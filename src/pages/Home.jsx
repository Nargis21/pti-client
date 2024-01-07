import { Toaster } from "sonner";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Slider category="Popular" />
      <Slider category="Recommended" />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Home;
