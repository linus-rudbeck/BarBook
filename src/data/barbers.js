const barbers = [
    {
        id: 1,
        name: 'John Doe',
        rating: 4.5,
        location: 'New York',
        services: ['Haircut', 'Shave', 'Beard Trim']
    },
    {
        id: 2,
        name: 'Jane Doe',
        rating: 4.0,
        location: 'Los Angeles',
        services: ['Haircut', 'Shave', 'Beard Trim']
    },
    {
        id: 3,
        name: 'Alice Doe',
        rating: 4.2,
        location: 'Chicago',
        services: ['Haircut', 'Shave', 'Beard Trim']
    }
];

export function getBarbers() {
    return barbers;
}

export function getBarberById(id) {
    id = parseInt(id);
    return barbers.find(barber => barber.id === id);
}

export function getBarberLocations() {
    return barbers.map(barber => barber.location);
}

export function getBarbersByLocation(location) {
    if(location === 'all') {
        return getBarbers();
    }

    return barbers.filter(barber => barber.location === location);
}