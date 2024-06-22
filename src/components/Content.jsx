import ActivityOverview from "./ActivityOverview"
import data from "../data.json";


const Content = () => {

//   let data = require("../data/data.json");
 let keyData = data.data.id12.keyData
  console.log(keyData);

  return (
    <div className="contentBoard">
        <div className="chart"></div>
        <div className="line"></div>
        <div className="toile"></div>
        <div className="cercle"></div>
        <ActivityOverview/>
    </div>
  )
}
export default Content