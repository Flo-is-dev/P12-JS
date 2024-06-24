import ActivityOverview from "./ActivityOverview"
import DailyActivity from "./DailyActivity"
import AverageDuration from "./AverageDuration"
import UserPerformance from "./UserPerformance"
import UserScore from "./UserScore"
// import data from "../data.json";


const Content = ({userScore}) => {

//   let data = require("../data/data.json");
//  let keyData = data.data.id12.keyData
//   console.log(keyData);

  return (
    <div className="contentBoard">
        <DailyActivity />
        <AverageDuration />
        <UserPerformance />
        <UserScore userScore={userScore} />
        <ActivityOverview/>
    </div>
  )
}
export default Content