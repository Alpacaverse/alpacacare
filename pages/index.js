import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Landing from "../components/Landing";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <AboutUs />
      <Footer />
    </>
  );
}
