'use client';
import { ThemeProvider, LangProvider } from '@/context/Providers';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CommandCenter from '@/components/CommandCenter';
import TransparencyPortal from '@/components/TransparencyPortal';
import GrievanceSystem from '@/components/GrievanceSystem';
import AgricultureIntel from '@/components/AgricultureIntel';
import WaterGovernance from '@/components/WaterGovernance';
import VillageMap from '@/components/VillageMap';
import GramSabha from '@/components/GramSabha';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import EmergencyAlerts from '@/components/EmergencyAlerts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <ThemeProvider>
      <LangProvider>
        <div className="min-h-screen" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
          <Navbar />
          <main>
            <HeroSection />
            <CommandCenter />
            <TransparencyPortal />
            <GrievanceSystem />
            <AgricultureIntel />
            <WaterGovernance />
            <VillageMap />
            <GramSabha />
            <AnalyticsDashboard />
            <EmergencyAlerts />
          </main>
          <Footer />
        </div>
      </LangProvider>
    </ThemeProvider>
  );
}
