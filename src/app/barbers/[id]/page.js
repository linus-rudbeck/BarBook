import BookBarberForm from "@/components/BookBarberForm/BookBarberForm";
import FeaturesList from "@/components/FeaturesList/FeaturesList";
import styles from "./page.module.css";

import { getBarberById } from "@/data/barbers";

export default function SingleBarberPage({ params }) {
    const barber = getBarberById(params.id);

    const features = [
        `Rating: ${barber.rating}`,
        `Location: ${barber.location}`,
        `Services: ${barber.services.join(', ')}`,
    ]

    return (<>
        <h2>{barber.name}</h2>

        <div className={styles.barberFeatures}>
            <FeaturesList features={features} />
        </div>

        <BookBarberForm id={barber.id} />
    </>);
}