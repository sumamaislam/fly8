import Head from "next/head";
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
import Gummies from "../components/Home/Gummies";
import Commitment from "../components/Home/Commitment";
import { wrapper } from "../store";
import { bannerDataRequest, footerDataRequest, gummiesDataRequest, mainDataRequest, navDataRequest, qualityDataRequest } from "../redux/home";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Teko:wght@300;500;600&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Header />
        <Banner />
        <Cards />
        {/* <Gummies/>  */}
        <Commitment/>
        <Email />
        <Footer />
      </main>
    </div>
  );
};

export default Home;


export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(navDataRequest());
  await store.dispatch(mainDataRequest());
  await store.dispatch(bannerDataRequest());
  // await store.dispatch(gummiesDataRequest());
  await store.dispatch(qualityDataRequest());
  await store.dispatch(footerDataRequest());
});
