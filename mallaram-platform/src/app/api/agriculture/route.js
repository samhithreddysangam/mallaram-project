// API: Agriculture data endpoints
import { NextResponse } from 'next/server';

const cropPrices = [
    { crop: 'Paddy (Sona Masoori)', variety: 'Grade A', price: 2140, change: 45, mandi: 'Suryapet', unit: 'quintal' },
    { crop: 'Maize', variety: 'Yellow', price: 1850, change: -20, mandi: 'Suryapet', unit: 'quintal' },
    { crop: 'Red Gram', variety: 'Tur Dal', price: 8500, change: 120, mandi: 'Hyderabad', unit: 'quintal' },
    { crop: 'Groundnut', variety: 'Bold', price: 5200, change: 80, mandi: 'Suryapet', unit: 'quintal' },
    { crop: 'Chilli', variety: 'Teja', price: 12000, change: -300, mandi: 'Guntur', unit: 'quintal' },
    { crop: 'Onion', variety: 'Red', price: 1800, change: 150, mandi: 'Suryapet', unit: 'quintal' },
    { crop: 'Cotton', variety: 'H6', price: 6800, change: 200, mandi: 'Adilabad', unit: 'quintal' },
];

const weatherForecast = [
    { date: '2026-05-08', tempMax: 32, tempMin: 24, humidity: 78, rainfall: 12, condition: 'Thunderstorms', icon: '⛈️' },
    { date: '2026-05-09', tempMax: 30, tempMin: 23, humidity: 72, rainfall: 8, condition: 'Scattered Rain', icon: '🌦️' },
    { date: '2026-05-10', tempMax: 33, tempMin: 25, humidity: 55, rainfall: 2, condition: 'Partly Cloudy', icon: '⛅' },
    { date: '2026-05-11', tempMax: 35, tempMin: 26, humidity: 45, rainfall: 0, condition: 'Sunny', icon: '☀️' },
    { date: '2026-05-12', tempMax: 34, tempMin: 25, humidity: 50, rainfall: 0, condition: 'Clear', icon: '☀️' },
];

const pestAlerts = [
    { pest: 'Fall Armyworm', crop: 'Maize', severity: 'high', advisory: 'Apply Chlorantraniliprole spray early morning' },
    { pest: 'Brown Planthopper', crop: 'Paddy', severity: 'medium', advisory: 'Drain water from fields, apply Pymetrozine' },
];

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'all';

    const response = {};
    if (type === 'all' || type === 'prices') response.cropPrices = cropPrices;
    if (type === 'all' || type === 'weather') response.weatherForecast = weatherForecast;
    if (type === 'all' || type === 'pests') response.pestAlerts = pestAlerts;
    if (type === 'all') {
        response.aiRecommendation = {
            message: 'Based on soil moisture and weather data, delay paddy transplanting by 3 days. Current moisture levels are optimal for field preparation.',
            confidence: 0.92,
            updatedAt: new Date().toISOString(),
        };
    }

    return NextResponse.json({ success: true, data: response });
}
