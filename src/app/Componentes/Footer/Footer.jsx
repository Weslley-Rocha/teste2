import styles from './Footer.module.css'
import Link from "next/link"

export default function Footer() {
    return(
        <>
        <footer className={styles.footer}>
        <div>
        <h1>&copy; 2025 MeuSite. Todos os direitos Resrvados.</h1>
        </div>
        </footer>
        </>
    )
}