import { useParams } from 'react-router-dom';
import { getUserAverageSessions } from '../data';
import { useState,useEffect } from 'react';

const DailyActivity = () => {

    const { userId } = useParams(); 
    const [userDailyActivity, setUserDailyActivity] = useState("")

    console.log("Activity quotidien",userDailyActivity);

    useEffect(() => {
        const loadData = async () => {
            try {
                const userDailyActivity = await getUserAverageSessions(userId);
                setUserDailyActivity(userDailyActivity.data.sessions);
            } catch (error) {
                console.error("Failed to fetch key data:", error);
            }
        };
        loadData();
    }, [userId]);


  return (
    <div className="chart"> 
    DailyActivity</div>
  )
}
export default DailyActivity