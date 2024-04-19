import { NextResponse } from "next/server";
import * as fs from 'fs';

export async function POST(request) {
    const booking = await request.json();

    // | name | email | barberId |

    const bookingRow = `| ${booking.name} | ${booking.email} | ${booking.barberId} |\n`;

    fs.appendFileSync('bookings.md', bookingRow);

    return NextResponse.json({ message: 'Booking received!' });
};