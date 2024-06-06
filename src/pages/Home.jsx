import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Working from "../components/Working";
import Final from "../components/Final";
import Record from "../components/Record";
import OriNavbar from "../components/OriNavbar";
import Benefits from "../components/Benefits";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <>
      <OriNavbar />
      <Hero />
      <Record />
      <ScrollToTop />
      <Working />
      <Benefits />
      <Final />
      <Footer />
    </>
  );
};

export default Home;
