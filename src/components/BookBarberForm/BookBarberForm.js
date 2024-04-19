"use client"

import { useState } from "react";

import styles from "./BookBarberForm.module.css"


export default function BookBarberForm({ id }) {

    const [formData, setFormData] = useState({ name: 'linus', email: 'linus@example.com', message: 'test' });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const body = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            barberId: id,
        };

        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        await response.json();

        setFormSubmitted(true);
    }
    

    const handleChangeForm = (event) => {
        const fieldName = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [fieldName]: value });
    }

    return (<>
        {formSubmitted == false ? (
            <form className={styles.form} onSubmit={handleSubmit} onChange={handleChangeForm}>

                <fieldset>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" defaultValue={formData.name} />
                </fieldset>

                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" defaultValue={formData.email} />
                </fieldset>

                <fieldset>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" defaultValue={formData.message} ></textarea>
                </fieldset>

                <button type="submit">Book</button>

            </form>
        ) : (<p className={styles.submitted}>Form submitted!</p>)}

    </>);
}