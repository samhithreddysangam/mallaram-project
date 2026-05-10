const translations = {
    en: {
        nav: { home: 'Home', about: 'About', ikp: 'IKP Booking', schemes: 'Govt Schemes', login: 'Login', transparency: 'Transparency', agriculture: 'Agriculture', water: 'Water', grievance: 'Grievance' },
        hero: {
            badge: '🌿 Smart Village Rooted in Nature',
            title: 'Mallaram Gram Panchayat',
            titleHighlight: '"Mana Ooru"',
            subtitle: 'A transparent, accountable, and AI-powered governance system led by Sarpanch Sangam Arpitha. Empowering 2000+ citizens through digital infrastructure.',
            cta1: 'IKP Slot Booking', cta2: 'Submit Complaint', cta3: 'View Fund Transparency',
            stats: { water: 'Water Supply', literacy: 'Literacy Rate', population: 'Population', households: 'Households', projects: 'Active Projects' }
        },
        command: {
            title: 'Digital Village', titleHighlight: 'Command Center',
            subtitle: 'Real-time village intelligence dashboard with AI-powered insights',
            rainfall: 'Rainfall Analytics', canal: 'Canal Water Flow', irrigation: 'Irrigation Schedule',
            sanitation: 'Sanitation Tracking', electricity: 'Electricity Status', weather: 'Weather Warnings',
            aiInsight: 'AI Village Insight', aiText: 'Based on current rainfall patterns, irrigation canal #3 should be opened by tomorrow to optimize paddy field water levels in Zone B.'
        },
        transparency: {
            title: 'Public Transparency', titleHighlight: 'Portal',
            subtitle: 'Complete visibility into government fund utilization and project progress',
            budget: 'Total Budget', spent: 'Amount Spent', projects: 'Active Projects', completion: 'Avg Completion',
            fundsTitle: 'Fund Utilization', projectsTitle: 'Project Tracker', auditTitle: 'Public Audit'
        },
        grievance: {
            title: 'AI Grievance', titleHighlight: 'System',
            subtitle: 'Smart complaint management with AI categorization and priority scoring',
            total: 'Total Complaints', resolved: 'Resolved', pending: 'Pending', avgTime: 'Avg Resolution',
            upload: 'Upload Complaint', track: 'Track Status', whatsapp: 'WhatsApp Integration',
            formTitle: 'Submit New Complaint', formName: 'Full Name', formPhone: 'Phone Number',
            formCategory: 'Category', formDesc: 'Description', formSubmit: 'Submit Complaint',
            categories: ['Road Repair', 'Water Supply', 'Electricity', 'Sanitation', 'Other']
        },
        agriculture: {
            title: 'Smart Agriculture', titleHighlight: 'Intelligence',
            subtitle: 'AI-powered farming recommendations, market prices, and weather forecasts',
            prices: 'Mandi Prices', weather: 'Weather Forecast', pests: 'Pest Alerts',
            irrigation: 'Irrigation Advisory', fertilizer: 'Fertilizer Guide', disease: 'Crop Disease AI',
            recommendation: 'AI Recommendation', recText: 'Based on soil moisture and weather data, delay paddy transplanting by 3 days. Current moisture levels are optimal for field preparation.'
        },
        water: {
            title: 'Water Governance', titleHighlight: 'System',
            subtitle: 'Intelligent water management with canal monitoring and reservoir analytics',
            reservoir: 'Reservoir Level', canals: 'Active Canals', allocation: 'Water Allocated', schedule: 'Next Release'
        },
        map: {
            title: 'Smart Village', titleHighlight: 'Map',
            subtitle: 'Interactive GIS-style village map showing infrastructure and development',
            roads: 'Roads', pipelines: 'Pipelines', canals: 'Canals', schools: 'Schools',
            hospitals: 'Hospitals', lights: 'Streetlights', works: 'Dev Works', waterInfra: 'Water Infra'
        },
        sabha: {
            title: 'Digital Gram', titleHighlight: 'Sabha',
            subtitle: 'Transparent and participatory local governance meetings',
            live: 'Live Streaming', agenda: 'Public Agenda', polling: 'Citizen Polling',
            resolutions: 'Digital Resolutions', archived: 'Archived Meetings', participation: 'Participation Analytics',
            nextMeeting: 'Next Meeting', upcoming: 'Upcoming Agenda Items'
        },
        analytics: {
            title: 'Analytics & AI', titleHighlight: 'Insights',
            subtitle: 'Comprehensive governance performance metrics and predictive analytics',
            governance: 'Governance Score', complaints: 'Complaint Trends', waterUsage: 'Water Usage',
            sanitation: 'Sanitation Index', prediction: 'Predictive Analytics', health: 'Village Health'
        },
        emergency: {
            title: 'Emergency Alert', titleHighlight: 'System',
            subtitle: 'Multi-channel emergency alerts for flood, weather, and critical announcements',
            whatsapp: 'WhatsApp Alerts', sms: 'SMS Alerts', voice: 'Voice Calls',
            flood: 'Flood Alerts', rain: 'Rain Warnings', announce: 'Announcements',
            active: 'Active Alerts', recent: 'Recent Alerts'
        },
        footer: {
            desc: 'AI-powered smart governance platform for Mallaram Gram Panchayat. Transforming rural governance through technology.',
            services: 'Services', resources: 'Resources', contact: 'Contact',
            rights: '© 2026 Mallaram Digital Governance Platform. All rights reserved.',
            madeWith: 'Made with ❤️ for Rural India'
        }
    },
    te: {
        nav: { home: 'హోమ్', about: 'గురించి', ikp: 'IKP బుకింగ్', schemes: 'ప్రభుత్వ పథకాలు', login: 'లాగిన్', transparency: 'పారదర్శకత', agriculture: 'వ్యవసాయం', water: 'నీరు', grievance: 'ఫిర్యాదు' },
        hero: {
            badge: '🌿 ప్రకృతిలో పాతుకుపోయిన స్మార్ట్ గ్రామం',
            title: 'మల్లారం గ్రామ పంచాయతీ',
            titleHighlight: '"మన ఊరు"',
            subtitle: 'సర్పంచ్ సంగం అర్పిత నేతృత్వంలో పారదర్శక, జవాబుదారీ మరియు AI ఆధారిత పాలన వ్యవస్థ. డిజిటల్ మౌలిక సదుపాయాల ద్వారా 2000+ పౌరులకు సాధికారత.',
            cta1: 'IKP స్లాట్ బుకింగ్', cta2: 'ఫిర్యాదు చేయండి', cta3: 'నిధుల పారదర్శకత',
            stats: { water: 'నీటి సరఫరా', literacy: 'అక్షరాస్యత రేటు', population: 'జనాభా', households: 'గృహాలు', projects: 'యాక్టివ్ ప్రాజెక్టులు' }
        },
        command: {
            title: 'డిజిటల్ గ్రామ', titleHighlight: 'కమాండ్ సెంటర్',
            subtitle: 'AI-ఆధారిత అంతర్దృష్టులతో నిజ-సమయ గ్రామ మేధస్సు డాష్‌బోర్డ్',
            rainfall: 'వర్షపాత విశ్లేషణ', canal: 'కాలువ నీటి ప్రవాహం', irrigation: 'నీటిపారుదల షెడ్యూల్',
            sanitation: 'పారిశుద్ధ్య ట్రాకింగ్', electricity: 'విద్యుత్ స్థితి', weather: 'వాతావరణ హెచ్చరికలు',
            aiInsight: 'AI గ్రామ అంతర్దృష్టి', aiText: 'ప్రస్తుత వర్షపాత నమూనాల ఆధారంగా, జోన్ B లో వరి పొలాల నీటి స్థాయిలను ఆప్టిమైజ్ చేయడానికి రేపటి నాటికి నీటిపారుదల కాలువ #3 తెరవాలి.'
        },
        transparency: {
            title: 'ప్రజా పారదర్శకత', titleHighlight: 'పోర్టల్',
            subtitle: 'ప్రభుత్వ నిధుల వినియోగం మరియు ప్రాజెక్ట్ పురోగతిలో పూర్తి విజిబిలిటీ',
            budget: 'మొత్తం బడ్జెట్', spent: 'ఖర్చు మొత్తం', projects: 'యాక్టివ్ ప్రాజెక్టులు', completion: 'సగటు పూర్తి',
            fundsTitle: 'నిధుల వినియోగం', projectsTitle: 'ప్రాజెక్ట్ ట్రాకర్', auditTitle: 'ప్రజా ఆడిట్'
        },
        grievance: {
            title: 'AI ఫిర్యాదు', titleHighlight: 'వ్యవస్థ',
            subtitle: 'AI వర్గీకరణ మరియు ప్రాధాన్యత స్కోరింగ్‌తో స్మార్ట్ ఫిర్యాదు నిర్వహణ',
            total: 'మొత్తం ఫిర్యాదులు', resolved: 'పరిష్కరించినవి', pending: 'పెండింగ్', avgTime: 'సగటు పరిష్కార సమయం',
            upload: 'ఫిర్యాదు అప్‌లోడ్', track: 'స్థితి ట్రాక్', whatsapp: 'WhatsApp ఇంటిగ్రేషన్',
            formTitle: 'కొత్త ఫిర్యాదు సమర్పించండి', formName: 'పూర్తి పేరు', formPhone: 'ఫోన్ నంబర్',
            formCategory: 'వర్గం', formDesc: 'వివరణ', formSubmit: 'ఫిర్యాదు సమర్పించండి',
            categories: ['రోడ్డు మరమ్మతు', 'నీటి సరఫరా', 'విద్యుత్', 'పారిశుద్ధ్యం', 'ఇతర']
        },
        agriculture: {
            title: 'స్మార్ట్ వ్యవసాయ', titleHighlight: 'మేధస్సు',
            subtitle: 'AI-ఆధారిత వ్యవసాయ సిఫార్సులు, మార్కెట్ ధరలు మరియు వాతావరణ సూచనలు',
            prices: 'మండి ధరలు', weather: 'వాతావరణ సూచన', pests: 'పురుగు హెచ్చరికలు',
            irrigation: 'నీటిపారుదల సలహా', fertilizer: 'ఎరువుల గైడ్', disease: 'పంట వ్యాధి AI',
            recommendation: 'AI సిఫార్సు', recText: 'నేల తేమ మరియు వాతావరణ డేటా ఆధారంగా, వరి నాట్లు 3 రోజులు ఆలస్యం చేయండి. ప్రస్తుత తేమ స్థాయిలు పొలం తయారీకి అనుకూలంగా ఉన్నాయి.'
        },
        water: {
            title: 'నీటి పరిపాలన', titleHighlight: 'వ్యవస్థ',
            subtitle: 'కాలువ పర్యవేక్షణ మరియు జలాశయ విశ్లేషణతో తెలివైన నీటి నిర్వహణ',
            reservoir: 'జలాశయ స్థాయి', canals: 'యాక్టివ్ కాలువలు', allocation: 'కేటాయించిన నీరు', schedule: 'తదుపరి విడుదల'
        },
        map: {
            title: 'స్మార్ట్ గ్రామ', titleHighlight: 'మ్యాప్',
            subtitle: 'మౌలిక సదుపాయాలు మరియు అభివృద్ధిని చూపే ఇంటరాక్టివ్ GIS-శైలి గ్రామ మ్యాప్',
            roads: 'రోడ్లు', pipelines: 'పైప్‌లైన్లు', canals: 'కాలువలు', schools: 'పాఠశాలలు',
            hospitals: 'ఆసుపత్రులు', lights: 'వీధి దీపాలు', works: 'అభివృద్ధి పనులు', waterInfra: 'నీటి మౌలిక సదుపాయాలు'
        },
        sabha: {
            title: 'డిజిటల్ గ్రామ', titleHighlight: 'సభ',
            subtitle: 'పారదర్శక మరియు భాగస్వామ్య స్థానిక పాలన సమావేశాలు',
            live: 'ప్రత్యక్ష ప్రసారం', agenda: 'ప్రజా ఎజెండా', polling: 'పౌర పోలింగ్',
            resolutions: 'డిజిటల్ తీర్మానాలు', archived: 'ఆర్కైవ్ సమావేశాలు', participation: 'భాగస్వామ్య విశ్లేషణ',
            nextMeeting: 'తదుపరి సమావేశం', upcoming: 'రాబోయే ఎజెండా అంశాలు'
        },
        analytics: {
            title: 'విశ్లేషణ & AI', titleHighlight: 'అంతర్దృష్టులు',
            subtitle: 'సమగ్ర పాలన పనితీరు కొలమానాలు మరియు అంచనా విశ్లేషణ',
            governance: 'పాలన స్కోర్', complaints: 'ఫిర్యాదు ధోరణులు', waterUsage: 'నీటి వినియోగం',
            sanitation: 'పారిశుద్ధ్య సూచిక', prediction: 'అంచనా విశ్లేషణ', health: 'గ్రామ ఆరోగ్యం'
        },
        emergency: {
            title: 'అత్యవసర హెచ్చరిక', titleHighlight: 'వ్యవస్థ',
            subtitle: 'వరదలు, వాతావరణం మరియు క్లిష్టమైన ప్రకటనల కోసం బహుళ-ఛానెల్ అత్యవసర హెచ్చరికలు',
            whatsapp: 'WhatsApp హెచ్చరికలు', sms: 'SMS హెచ్చరికలు', voice: 'వాయిస్ కాల్స్',
            flood: 'వరద హెచ్చరికలు', rain: 'వర్షం హెచ్చరికలు', announce: 'ప్రకటనలు',
            active: 'యాక్టివ్ హెచ్చరికలు', recent: 'ఇటీవలి హెచ్చరికలు'
        },
        footer: {
            desc: 'మల్లారం గ్రామ పంచాయతీ కోసం AI-ఆధారిత స్మార్ట్ పరిపాలన వేదిక. సాంకేతికత ద్వారా గ్రామీణ పరిపాలనను మార్చడం.',
            services: 'సేవలు', resources: 'వనరులు', contact: 'సంప్రదించండి',
            rights: '© 2026 మల్లారం డిజిటల్ గవర్నెన్స్ ప్లాట్‌ఫారమ్. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
            madeWith: '❤️ తో గ్రామీణ భారతదేశం కోసం తయారు చేయబడింది'
        }
    }
};

export const t = (lang, path) => {
    const keys = path.split('.');
    let result = translations[lang] || translations.en;
    for (const key of keys) {
        result = result?.[key];
    }
    return result || path;
};

export default translations;
