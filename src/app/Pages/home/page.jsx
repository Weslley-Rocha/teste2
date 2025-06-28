import styles from "./home.module.css"
export default function Home(){
    return(
        <>
        <header className={styles.header}>
        <h1>Home</h1>
        </header>
        <div>
    <p>Bem-vindo a Home</p>
        </div>
        </>
    )
}