import FeaturedInfo from "../components/FeaturedInfo/FeaturedInfo";
import Chart from "../components/chart/Chart";
import Map from "../components/map/Map";
import "./home.css"

export default function Pages() {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Map/>
      <Chart/>
    </div>
  );
}
