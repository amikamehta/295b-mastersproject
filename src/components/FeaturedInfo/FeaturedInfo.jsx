import { ArrowUpward, CameraAlt, Edit, Person } from "@material-ui/icons";
import "./featuredInfo.css"

export default function FeaturedInfo() {
  return (
    <div className="FeaturedInfo">
        <div className="FeaturedInfoContainer">
            <div className="featureInfoTitle">
            Active camera's on campus
            </div>
            <div className="moneyContainer">
                <span className="Rate">
                    40 
                    <CameraAlt className="icon"/>
                </span>
            </div>
            <span className="textInfo">
                View camera location
            </span>
        </div>

        <div className="FeaturedInfoContainer">
            <div className="featureInfoTitle">
            Number of Active Alerts
            </div>
            <div className="moneyContainer">
            <span className="Rate">
                10 
                <ArrowUpward className="icon"/>
            </span>
            </div>
            <span className="textInfo">
                Compared to last hour
            </span>
        </div>

        <div className="FeaturedInfoContainer">
            <div className="featureInfoTitle">
            Resolved Maintainance Requests
            </div>
            <div className="moneyContainer">
            <span className="Rate">
                30
                <Edit className="icon"/>
            </span>
            </div>
            <span className="textInfo">
                In the last hour
            </span>
        </div>  

        <div className="FeaturedInfoContainer">
            <div className="featureInfoTitle">
            Currently enrolled active users
            </div>
            <div className="moneyContainer">
            <span className="Rate">
                2000
                <Person className="icon"/>
            </span>
            </div>
            <span className="textInfo">
                Number of current active users
            </span>
        </div>  

    </div>
  );
}
