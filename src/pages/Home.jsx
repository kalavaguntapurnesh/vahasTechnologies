// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Working from "../components/Working";
import Final from "../components/Final";
import Record from "../components/Record";
import OriNavbar from "../components/OriNavbar";
import Benefits from "../components/Benefits";
import ScrollToTop from "../components/ScrollToTop";
// import PropagateLoader from "react-spinners";
import { useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="flex space-x-2">
            <div className="h-4 w-4 rounded-full bg-companyColor animate-bounce"></div>
            <div className="h-4 w-4 rounded-full bg-companyColor animate-bounce2"></div>
            <div className="h-4 w-4 rounded-full bg-companyColor animate-bounce"></div>
          </div>
        </div>
      ) : (
        <div>
          <OriNavbar />
          <Hero />
          <Record />
          <ScrollToTop />
          <Working />
          <Benefits />
          <Final />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
