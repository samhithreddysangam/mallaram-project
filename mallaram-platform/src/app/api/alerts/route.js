// API: Emergency alerts endpoints
import { NextResponse } from 'next/server';

const alerts = [
    { id: 1, title: 'Heavy Rain Warning', type: 'rain', severity: 'high', message: 'Heavy rainfall expected in next 24 hours. Farmers advised to secure crops and livestock.', channels: ['whatsapp', 'sms', 'voice'], isActive: true, sentCount: 2847, createdAt: '2026-05-08T06:00:00Z' },
    { id: 2, title: 'Canal Water Level Alert', type: 'flood', severity: 'medium', message: 'Canal water levels rising. Residents near Zone B canal are advised to stay alert.', channels: ['whatsapp', 'sms'], isActive: true, sentCount: 1523, createdAt: '2026-05-08T03:00:00Z' },
    { id: 3, title: 'Weather Update', type: 'general', severity: 'info', message: 'Clear skies expected from Thursday', channels: ['whatsapp'], isActive: false, sentCount: 2100, createdAt: '2026-05-07T10:00:00Z' },
];

export async function GET() {
    return NextResponse.json({
        success: true,
        data: {
            active: alerts.filter(a => a.isActive),
            recent: alerts,
            channels: {
                whatsapp: { subscribers: 2847 },
                sms: { recipients: 3450 },
                voice: { registered: 1200 },
            }
        }
    });
}

export async function POST(request) {
    const body = await request.json();
    if (!body.title || !body.message || !body.severity) {
        return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const newAlert = {
        id: alerts.length + 1,
        ...body,
        isActive: true,
        sentCount: 0,
        createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ success: true, data: newAlert }, { status: 201 });
}
