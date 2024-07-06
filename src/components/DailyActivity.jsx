import { useParams } from 'react-router-dom';
import { getUserAverageSessions } from '../data';
import { useState,useEffect } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DailyActivity = () => {

    const { userId } = useParams(); 
    const [userDailyActivity, setUserDailyActivity] = useState("")

    // console.log("Activity quotidien",userDailyActivity);

    const data = [
        { day: '1', weight: 70, calories: 240 },
        { day: '2', weight: 69, calories: 220 },
        { day: '3', weight: 68, calories: 356 },
        { day: '4', weight: 70, calories: 300 },
        { day: '5', weight: 69, calories: 220 },
        { day: '6', weight: 70, calories: 200 },
        { day: '7', weight: 69, calories: 290 },
        { day: '8', weight: 70, calories: 350 },
        { day: '9', weight: 69, calories: 220 },
        { day: '10', weight: 70, calories: 320 },
      ];

    useEffect(() => {
        const loadData = async () => {
            try {
                const userDailyActivity = await getUserAverageSessions(userId);
                setUserDailyActivity(userDailyActivity);
            } catch (error) {
                console.error("Failed to fetch key data:", error);
            }
        };
        loadData();
    }, [userId]);


  return (
    <div className="chart"> 
         <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip  />
        <Legend verticalAlign="top" height={36} />
        <Bar yAxisId="left" dataKey="weight" fill="#000000" barSize={20} />
        <Bar yAxisId="right" dataKey="calories" fill="#FF0000" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}
export default DailyActivity