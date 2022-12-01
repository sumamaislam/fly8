import Head from "next/head";
import Image from "next/image";
import { Footer, Header } from "../components/common";
import {
  Banner,
  Brands,
  Cards,
  Cards2,
  Cards3,
  Cards4,
  Categories,
  Email,
  Product,
} from "../components/Home";
import styles from "../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {

  const {carts} = useSelector((state)=>state.product)
  
  useEffect(()=>{
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("localCart", JSON.stringify({ carts: carts }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[carts])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Banner />
        <Email />
        <Cards />
        <Cards2 />
        <Categories />
        <Cards3 />
        <Cards4 />
        <Brands />
        {/* <Product /> */}
        <Footer />
      </main>
    </div>
  );
}

export default Home;