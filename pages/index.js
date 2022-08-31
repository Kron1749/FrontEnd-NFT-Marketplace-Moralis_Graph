import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import ManualHeader from "../Components/ManualHeader"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lottery App</title>
                <meta name="description" content="Lottery smart contract" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ManualHeader />
            Hello!
        </div>
    )
}
