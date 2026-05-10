// API: Grievance endpoints
import { NextResponse } from 'next/server';

// Mock data for demo
const grievances = [
    { id: 'GRV-2026-001', category: 'Road Repair', status: 'resolved', priority: 'high', createdAt: '2026-05-06', ward: 3, description: 'Pothole on main road near temple' },
    { id: 'GRV-2026-002', category: 'Water Supply', status: 'in_progress', priority: 'critical', createdAt: '2026-05-07', ward: 1, description: 'No water supply since 2 days' },
    { id: 'GRV-2026-003', category: 'Electricity', status: 'pending', priority: 'medium', createdAt: '2026-05-08', ward: 5, description: 'Streetlight not working in colony' },
    { id: 'GRV-2026-004', category: 'Sanitation', status: 'resolved', priority: 'low', createdAt: '2026-05-05', ward: 2, description: 'Garbage not collected this week' },
];

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const ward = searchParams.get('ward');

    let filtered = [...grievances];
    if (status) filtered = filtered.filter(g => g.status === status);
    if (ward) filtered = filtered.filter(g => g.ward === parseInt(ward));

    return NextResponse.json({
        success: true,
        data: filtered,
        meta: {
            total: filtered.length,
            resolved: filtered.filter(g => g.status === 'resolved').length,
            pending: filtered.filter(g => g.status === 'pending').length,
        }
    });
}

export async function POST(request) {
    const body = await request.json();

    // Validate required fields
    if (!body.description || !body.category) {
        return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // AI Priority Scoring (mock)
    const priorityKeywords = { water: 3, flood: 4, electricity: 2, road: 1.5, danger: 4, urgent: 3 };
    let aiScore = 5;
    Object.entries(priorityKeywords).forEach(([keyword, weight]) => {
        if (body.description.toLowerCase().includes(keyword)) aiScore += weight;
    });

    const newGrievance = {
        id: `GRV-2026-${String(grievances.length + 1).padStart(3, '0')}`,
        ...body,
        status: 'pending',
        aiPriorityScore: Math.min(aiScore, 10),
        priority: aiScore > 7 ? 'critical' : aiScore > 5 ? 'high' : aiScore > 3 ? 'medium' : 'low',
        createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ success: true, data: newGrievance }, { status: 201 });
}
