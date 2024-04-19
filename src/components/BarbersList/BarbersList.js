"use client"

import Link from 'next/link';
import styles from './BarbersList.module.css';
import { getBarberLocations, getBarbers, getBarbersByLocation } from '@/data/barbers';
import { useEffect, useState } from 'react';

export default function BarbersList() {

    const allBarbers = getBarbers();
    const allLocations = getBarberLocations();

    const [barbers, setBarbers] = useState(allBarbers);
    const [location, setLocation] = useState('all');

    useEffect(() => {
        const selectedBarbers = getBarbersByLocation(location);
        setBarbers(selectedBarbers);
    }, [location]);


    return (<>
        <select className={styles.locations} onChange={e => setLocation(e.target.value)} >
            <option value="all">All Locations</option>

            {allLocations.map(location => (
                <option key={location} value={location}>{location}</option>
            ))}
        </select>

        <ul className={styles.barbers}>
            {barbers.map(barber => ( <Barber key={barber.id} barber={barber} /> ))}
        </ul>
    </>);
}

function Barber({ barber }) {
    return (
        <li>
            <h3>{barber.name}</h3>
            <p>Rating: {barber.rating}</p>
            <p>Location: {barber.location}</p>
            <p>Services: {barber.services.join(', ')}</p>

            <p>
                <Link href={`/barbers/${barber.id}`}>View Details</Link>
            </p>
        </li>
    );
}