import Banner from "../../components/banner/banner";
import Gifts from "../../components/gifts/gifts";
import MainScreen from "../../components/mainScreen/mainScreen";
import Partners from "../../components/partners/partners";
import Slider from "../../components/slider/slider";

const Home = () => {
  return (
    <div>
      <MainScreen />
      <Slider />
      <Gifts />
      <Partners />
      <Banner />
    </div>
  );
};
export default Home;
