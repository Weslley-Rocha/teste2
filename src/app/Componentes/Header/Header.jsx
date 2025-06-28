import styles from './Header.module.css'
import Link from "next/link"

export default function Header() {
    return(
        <>
        <header className={styles.header}>
        <div>
        <h1>Meu Site</h1>
        </div>
        <nav className={styles.nav}>
        <Link href="/Pages/home">Home</Link>
        <Link href="/Pages/galeria">Galeria</Link>
        <Link href="/Pages/contato">Contato</Link>
        </nav>
        </header>
        </>
    )
}