import Banner from "../../components/banner/banner";
import CatalogComp from "../../components/cataloComp/catalogComp";
import Gifts from "../../components/gifts/gifts";
import MainScreen from "../../components/mainScreen/mainScreen";
import Partners from "../../components/partners/partners";

const Home = () => {
  return (
    <div>
      <MainScreen />
      <CatalogComp />
      <Gifts />
      <Partners />
      <Banner />
    </div>
  );
};
export default Home;
