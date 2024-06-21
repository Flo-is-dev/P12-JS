import ActivityOverview from "./ActivityOverview"

const Content = () => {
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