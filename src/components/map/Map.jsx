import "./map.css"
import { ResponsiveContainer } from "recharts";

export default function Map() {
  return (
    <div>
        <h3 className="mapTitle">Campus Map</h3>
        <div className="MapBox">
    <ResponsiveContainer width="50%" aspect={4/2} className="container">
    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Washington%20Sq,%20San%20Jose,%20CA%2095192+(San%20Jose%20State%20University)&amp;t=h&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        <a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
        </ResponsiveContainer>


        <ResponsiveContainer width="50%" aspect={4/2}>
        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Charles%20W.%20Davidson%20College%20of%20Engineering+(San%20Jose%20State%20University)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe>
        </ResponsiveContainer>
        </div>
    </div>
  );
}
