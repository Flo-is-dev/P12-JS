import activity1 from "../assets/img/calories-icon.png"
import activity2 from "../assets/img/protein-icon.png"
import activity3 from "../assets/img/carbs-icon.png"
import activity4 from "../assets/img/fat-icon.png"


const ActivityOverview = () => {
  return (
    <div className="activityContainer">

        <div className="activityCard">
            <img src={activity1} alt="icon calories" />
            <span className="activityNumber">1,930kCal</span>
            <span className="activityTitle">Calories</span>  
        </div>

        <div className="activityCard">
            <img src={activity2} alt="icon protéines" />
            <span className="activityNumber">1,930kCal</span>
            <span className="activityTitle">Calories</span>  
        </div>

        <div className="activityCard">
            <img src={activity3} alt="icon glucides" />
            <span className="activityNumber">1,930kCal</span>
            <span className="activityTitle">Calories</span>  
        </div>

        <div className="activityCard">
            <img src={activity4} alt="icon lipides" />
            <span className="activityNumber">1,930kCal</span>
            <span className="activityTitle">Calories</span>  
        </div>

    </div>
  )
}
export default ActivityOverview