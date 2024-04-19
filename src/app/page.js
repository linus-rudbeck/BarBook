import FeaturesList from "@/components/FeaturesList/FeaturesList";
import styles from "./page.module.css";

const features = [
  "Find available appointment slots with your favorite barbers",
  "Book your next haircut in just a few clicks",
  "Receive reminders and updates about your appointment",
  "Manage your bookings easily from any device",
];

export const metadata = { title: "Home | Barbook" };

export default function Home() {
  return (<>
    <h2>Home</h2>

    <p>
        Futurama är en amerikansk animerad science fiction-situationskomediserie skapad av
        Matt Groening (skapare av Simpsons) och David X. Cohen. De fyra första säsongerna
        sändes mellan den 28 mars 1999 och den 10 augusti 2003 på TV-kanalen Fox. Fyra filmer
        gavs ut direkt till dvd mellan 2007 och 2009, men klipptes även om till en femte säsong
        som började sändas 23 mars 2008 på Comedy Central. Säsong 6 och 7 sändes mellan 24 juni
        2010 och 4 september 2013 på Comedy Central. Den 22 februari 2022 meddelade streamingtjänsten
        Hulu att de hade återupplevt serien och att de skulle göra 20 avsnitt till av serien.
        Säsong 8 hade premiär den 23 juli 2023.
      </p>

      <hr />

      <FeaturesList features={features} />
  </>);
}
