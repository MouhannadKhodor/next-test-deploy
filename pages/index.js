import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function index() {
  return (
    <>
      <Head>
          <title>Ninja List | Home</title>
          <meta name="keywords" content="Ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Index</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          necessitatibus debitis perferendis, alias, deserunt id quidem neque
          officia esse nesciunt culpa ipsam, obcaecati praesentium consequatur
          aliquam quae possimus sint cupiditate.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          necessitatibus debitis perferendis, alias, deserunt id quidem neque
          officia esse nesciunt culpa ipsam, obcaecati praesentium consequatur
          aliquam quae possimus sint cupiditate.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}

export default index;
