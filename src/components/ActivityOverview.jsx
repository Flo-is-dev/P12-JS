import activity1 from "../assets/img/calories-icon.png"
import activity2 from "../assets/img/protein-icon.png"
import activity3 from "../assets/img/carbs-icon.png"
import activity4 from "../assets/img/fat-icon.png"
import data from "../data.json";


const ActivityOverview = () => {


    let keyData = data.data.id12.keyData
    console.log(keyData);

  return (
    <div className="activityContainer">

        <div className="activityCard">
            <img src={activity1} alt="icon calories" />
            <span className="activityNumber">{keyData.calorieCount}kCal</span>
            <span className="activityTitle">Calories</span>  
        </div>

        <div className="activityCard">
            <img src={activity2} alt="icon protéines" />
            <span className="activityNumber">{keyData.proteinCount}g</span>
            <span className="activityTitle">Calories</span>  
        </div>

        <div className="activityCard">
            <img src={activity3} alt="icon glucides" />
            <span className="activityNumber">{keyData.carbohydrateCount}g</span>
            <span className="activityTitle">Calories</span>  
        </div>

        <div className="activityCard">
            <img src={activity4} alt="icon lipides" />
            <span className="activityNumber">{keyData.lipidCount}g</span>
            <span className="activityTitle">Calories</span>  
        </div>

    </div>
  )
}
export default ActivityOverview