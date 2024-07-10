import { useParams } from 'react-router-dom';
import { getUserAverageSessions } from '../data';
import { useState,useEffect } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DailyActivity = () => {

    const { userId } = useParams(); 
    const [userDailyActivity, setUserDailyActivity] = useState("")

    console.log("Activity quotidien",userDailyActivity);

    const data = [
        { day: '1', poids: 70, calories: 240 },
        { day: '2', poids: 69, calories: 220 },
        { day: '3', poids: 68, calories: 356 },
        { day: '4', poids: 70, calories: 300 },
        { day: '5', poids: 69, calories: 220 },
        { day: '6', poids: 70, calories: 200 },
        { day: '7', poids: 69, calories: 290 },
        { day: '8', poids: 70, calories: 350 },
        { day: '9', poids: 69, calories: 220 },
        { day: '10', poids: 70, calories: 320 },
    ];

    //   const dataWeightMin = Math.min(...data.map(item => item.weight));
    //   const dataWeightMax = Math.max(...data.map(item => item.weight));


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
        <CartesianGrid strokeDasharray="1 1" vertical={false} horizontalPoints={[50,150,400]} />
        <XAxis dataKey="day" tickLine={false} />
        <YAxis yAxisId="left" orientation="left" stroke="white" tick={false} />
        <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} stroke="#74798c" tick={true} ticks={[50,200,400]} domain={[50,400]} />
        <Tooltip  />
        <Legend verticalAlign="top" height={36} iconType="circle" iconSize={8} />
        <Bar yAxisId="left" dataKey="poids" fill="#000000" barSize={10} radius={[10, 10, 0, 0]} />
        <Bar yAxisId="right" dataKey="calories" fill="#FF0000" barSize={10} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default DailyActivity