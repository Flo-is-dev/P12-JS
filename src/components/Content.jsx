import ActivityOverview from "./ActivityOverview"
import DailyActivity from "./DailyActivity"
import AverageDuration from "./AverageDuration"
// import data from "../data.json";


const Content = () => {

//   let data = require("../data/data.json");
//  let keyData = data.data.id12.keyData
//   console.log(keyData);

  return (
    <div className="contentBoard">
        <DailyActivity />
        <AverageDuration />
        <div className="toile"></div>
        <div className="cercle"></div>
        <ActivityOverview/>
    </div>
  )
}
export default Content