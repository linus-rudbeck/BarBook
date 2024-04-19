import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Barbook</h1>

      <Navigation />
    </header>
  );
};

function Navigation() {
    return (
        <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/barbers">Barbers</Link>
            <Link href="/map">Map</Link>
        </nav>
    );
}