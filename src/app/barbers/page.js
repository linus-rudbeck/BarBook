import BarbersList from "@/components/BarbersList/BarbersList";
import styles from "./page.module.css";

export const metadata = { title: "Barbers" };

export default function BarbersPage() {
  return (<>
    <h2>Barbers</h2>

    <BarbersList />

    
  </>);
}
