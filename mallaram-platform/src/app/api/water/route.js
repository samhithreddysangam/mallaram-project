// API: Water governance endpoints
import { NextResponse } from 'next/server';

const waterData = {
    reservoir: { name: 'Nagarjuna Sagar (Local)', capacity: 2500, currentLevel: 1800, percentage: 72, dailyConsumption: 45, daysSupply: 40 },
    canals: [
        { name: 'Main Canal (Nagarjuna Sagar)', flowRate: 3.2, level: 82, status: 'active', nextRelease: '06:00 AM' },
        { name: 'Distributary Canal #1', flowRate: 1.8, level: 65, status: 'active', nextRelease: '07:30 AM' },
        { name: 'Minor Canal - Zone A', flowRate: 0.9, level: 45, status: 'scheduled', nextRelease: '10:00 AM' },
        { name: 'Minor Canal - Zone B', flowRate: 0.0, level: 12, status: 'closed', nextRelease: 'Tomorrow 06:00 AM' },
    ],
    irrigationSchedule: [
        { zone: 'Zone A - Paddy Fields', time: '06:00 - 08:00', days: [1, 3, 5], allocation: 450 },
        { zone: 'Zone B - Vegetable Plots', time: '08:00 - 10:00', days: [2, 4, 6], allocation: 280 },
        { zone: 'Zone C - Orchards', time: '16:00 - 18:00', days: [1, 4], allocation: 180 },
    ],
    qualityMetrics: { ph: 7.2, tds: 320, turbidity: 'Low', lastTested: '2026-05-07' },
};

export async function GET() {
    return NextResponse.json({ success: true, data: waterData });
}
