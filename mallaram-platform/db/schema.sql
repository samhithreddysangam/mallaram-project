-- Mallaram Digital Governance Platform - PostgreSQL Database Schema
-- =================================================================

-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis"; -- For GIS/spatial data

-- ========================
-- USERS & AUTHENTICATION
-- ========================
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(15) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE,
  aadhaar_hash VARCHAR(64), -- Hashed for security
  ward_number INTEGER,
  role VARCHAR(50) DEFAULT 'citizen' CHECK (role IN ('citizen', 'ward_member', 'sarpanch', 'secretary', 'admin', 'superadmin')),
  language_pref VARCHAR(5) DEFAULT 'te',
  is_active BOOLEAN DEFAULT true,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  token TEXT UNIQUE NOT NULL,
  device_info JSONB,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ========================
-- GRIEVANCE SYSTEM
-- ========================
CREATE TABLE grievance_categories (
  id SERIAL PRIMARY KEY,
  name_en VARCHAR(100) NOT NULL,
  name_te VARCHAR(100) NOT NULL,
  icon VARCHAR(10),
  priority_weight DECIMAL(3,2) DEFAULT 1.0
);

CREATE TABLE grievances (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  ticket_number VARCHAR(20) UNIQUE NOT NULL, -- e.g., GRV-2026-001
  user_id UUID REFERENCES users(id),
  category_id INTEGER REFERENCES grievance_categories(id),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  location_lat DECIMAL(10,8),
  location_lng DECIMAL(11,8),
  ward_number INTEGER,
  priority VARCHAR(20) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'critical')),
  ai_priority_score DECIMAL(5,2), -- AI-calculated priority
  ai_category_suggestion INTEGER REFERENCES grievance_categories(id),
  status VARCHAR(30) DEFAULT 'pending' CHECK (status IN ('pending', 'acknowledged', 'in_progress', 'resolved', 'rejected', 'escalated')),
  resolution_notes TEXT,
  resolved_by UUID REFERENCES users(id),
  resolved_at TIMESTAMPTZ,
  image_urls JSONB DEFAULT '[]',
  source VARCHAR(20) DEFAULT 'web' CHECK (source IN ('web', 'whatsapp', 'sms', 'voice', 'walk_in')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE grievance_comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  grievance_id UUID REFERENCES grievances(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id),
  comment TEXT NOT NULL,
  is_internal BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ========================
-- TRANSPARENCY & PROJECTS
-- ========================
CREATE TABLE budget_allocations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  financial_year VARCHAR(9) NOT NULL, -- e.g., 2025-2026
  category VARCHAR(100) NOT NULL,
  allocated_amount DECIMAL(15,2) NOT NULL,
  spent_amount DECIMAL(15,2) DEFAULT 0,
  source_fund VARCHAR(100), -- e.g., 15th Finance Commission, MGNREGA
  approved_by UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  budget_id UUID REFERENCES budget_allocations(id),
  contractor_name VARCHAR(255),
  contractor_contact VARCHAR(15),
  estimated_cost DECIMAL(15,2) NOT NULL,
  actual_cost DECIMAL(15,2) DEFAULT 0,
  start_date DATE,
  expected_end_date DATE,
  actual_end_date DATE,
  completion_percentage INTEGER DEFAULT 0,
  status VARCHAR(30) DEFAULT 'planned' CHECK (status IN ('planned', 'in_progress', 'completed', 'delayed', 'cancelled')),
  ward_number INTEGER,
  location_lat DECIMAL(10,8),
  location_lng DECIMAL(11,8),
  geo_tagged_photos JSONB DEFAULT '[]',
  audit_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ========================
-- WATER GOVERNANCE
-- ========================
CREATE TABLE water_sources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  type VARCHAR(50) CHECK (type IN ('reservoir', 'canal', 'borewell', 'overhead_tank', 'pipeline', 'treatment_plant')),
  capacity_liters DECIMAL(15,2),
  current_level_percentage DECIMAL(5,2),
  location_lat DECIMAL(10,8),
  location_lng DECIMAL(11,8),
  status VARCHAR(20) DEFAULT 'active',
  last_reading_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE water_readings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  source_id UUID REFERENCES water_sources(id),
  level_percentage DECIMAL(5,2),
  flow_rate DECIMAL(10,2), -- m³/s
  quality_ph DECIMAL(4,2),
  quality_tds INTEGER,
  reading_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE irrigation_schedules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  zone_name VARCHAR(100) NOT NULL,
  canal_id UUID REFERENCES water_sources(id),
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  days_of_week INTEGER[] NOT NULL, -- 1=Mon, 7=Sun
  allocation_cubic_meters DECIMAL(10,2),
  is_active BOOLEAN DEFAULT true,
  season VARCHAR(20),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ========================
-- AGRICULTURE
-- ========================
CREATE TABLE crop_prices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  crop_name VARCHAR(100) NOT NULL,
  variety VARCHAR(100),
  mandi_name VARCHAR(100),
  price_per_quintal DECIMAL(10,2) NOT NULL,
  price_change DECIMAL(10,2) DEFAULT 0,
  recorded_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE weather_data (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  date DATE NOT NULL,
  temperature_max DECIMAL(5,2),
  temperature_min DECIMAL(5,2),
  humidity DECIMAL(5,2),
  rainfall_mm DECIMAL(8,2),
  wind_speed DECIMAL(6,2),
  forecast_json JSONB,
  recorded_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE pest_alerts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pest_name VARCHAR(100) NOT NULL,
  affected_crop VARCHAR(100),
  severity VARCHAR(20) CHECK (severity IN ('low', 'medium', 'high', 'critical')),
  description_en TEXT,
  description_te TEXT,
  prevention_tips JSONB,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ========================
-- GRAM SABHA
-- ========================
CREATE TABLE gram_sabha_meetings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  meeting_date TIMESTAMPTZ NOT NULL,
  venue VARCHAR(255),
  stream_url TEXT,
  recording_url TEXT,
  agenda_items JSONB DEFAULT '[]',
  resolutions JSONB DEFAULT '[]',
  attendance_count INTEGER DEFAULT 0,
  online_viewers INTEGER DEFAULT 0,
  minutes_document_url TEXT,
  status VARCHAR(20) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'live', 'completed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE citizen_polls (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  meeting_id UUID REFERENCES gram_sabha_meetings(id),
  question_en TEXT NOT NULL,
  question_te TEXT NOT NULL,
  options JSONB NOT NULL,
  results JSONB DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  deadline TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE poll_votes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  poll_id UUID REFERENCES citizen_polls(id),
  user_id UUID REFERENCES users(id),
  selected_option INTEGER NOT NULL,
  voted_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(poll_id, user_id)
);

-- ========================
-- EMERGENCY ALERTS
-- ========================
CREATE TABLE alerts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  message_en TEXT NOT NULL,
  message_te TEXT NOT NULL,
  type VARCHAR(30) CHECK (type IN ('flood', 'rain', 'earthquake', 'cyclone', 'fire', 'health', 'water_supply', 'electricity', 'general')),
  severity VARCHAR(20) CHECK (severity IN ('info', 'low', 'medium', 'high', 'critical')),
  channels JSONB DEFAULT '["whatsapp", "sms"]',
  is_active BOOLEAN DEFAULT true,
  sent_count INTEGER DEFAULT 0,
  expires_at TIMESTAMPTZ,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ========================
-- VILLAGE INFRASTRUCTURE (GIS)
-- ========================
CREATE TABLE village_assets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  asset_type VARCHAR(50) CHECK (asset_type IN ('road', 'pipeline', 'canal', 'school', 'hospital', 'streetlight', 'borewell', 'community_hall', 'temple', 'government_building', 'other')),
  description TEXT,
  location GEOMETRY(Point, 4326), -- PostGIS point
  geo_path GEOMETRY(LineString, 4326), -- For roads, pipelines, canals
  ward_number INTEGER,
  condition VARCHAR(20) DEFAULT 'good' CHECK (condition IN ('excellent', 'good', 'fair', 'poor', 'critical')),
  metadata JSONB DEFAULT '{}',
  installed_date DATE,
  last_maintenance DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ========================
-- ANALYTICS
-- ========================
CREATE TABLE governance_metrics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  metric_date DATE NOT NULL,
  governance_score DECIMAL(5,2),
  water_efficiency DECIMAL(5,2),
  sanitation_index DECIMAL(5,2),
  complaint_resolution_rate DECIMAL(5,2),
  citizen_satisfaction DECIMAL(5,2),
  financial_health DECIMAL(5,2),
  sdg_scores JSONB DEFAULT '{}',
  climate_resilience_score DECIMAL(5,2),
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ========================
-- INDEXES
-- ========================
CREATE INDEX idx_grievances_status ON grievances(status);
CREATE INDEX idx_grievances_user ON grievances(user_id);
CREATE INDEX idx_grievances_ward ON grievances(ward_number);
CREATE INDEX idx_grievances_created ON grievances(created_at DESC);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_water_readings_source ON water_readings(source_id, reading_at DESC);
CREATE INDEX idx_crop_prices_crop ON crop_prices(crop_name, recorded_at DESC);
CREATE INDEX idx_alerts_active ON alerts(is_active, severity);
CREATE INDEX idx_village_assets_type ON village_assets(asset_type);
CREATE INDEX idx_village_assets_location ON village_assets USING GIST(location);
CREATE INDEX idx_governance_metrics_date ON governance_metrics(metric_date DESC);

-- ========================
-- SEED DATA
-- ========================
INSERT INTO grievance_categories (name_en, name_te, icon, priority_weight) VALUES
  ('Road Repair', 'రోడ్డు మరమ్మతు', '🛣️', 1.2),
  ('Water Supply', 'నీటి సరఫరా', '💧', 1.5),
  ('Electricity', 'విద్యుత్', '⚡', 1.3),
  ('Sanitation', 'పారిశుద్ధ్యం', '🧹', 1.1),
  ('Streetlights', 'వీధి దీపాలు', '💡', 0.8),
  ('Drainage', 'డ్రైనేజ్', '🕳️', 1.0),
  ('Other', 'ఇతర', '📋', 0.5);
