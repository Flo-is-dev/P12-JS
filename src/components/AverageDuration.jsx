import { useParams } from 'react-router-dom';
import { getUserAverageSessions } from '../data';
import { mockAverageDuration } from '../mockData';
import { useState,useEffect } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, CartesianGrid, YAxis } from 'recharts';




const AverageDuration = () => {

    const { userId } = useParams(); 
    const [userAverageDuration, setUserAverageDuration] = useState("")

    // on définie la valeur que Data prendra entre API et mock
    const data = mockAverageDuration;

    useEffect(() => {
        const loadData = async () => {
            try {
                const userAverageDuration = await getUserAverageSessions(userId);
                setUserAverageDuration(userAverageDuration);
            } catch (error) {
                console.error("Failed to fetch key data:", error);
            }
        };
        loadData();
    }, [userId]);

    console.log("userAverageDuration",userAverageDuration);


    

  return (
    <div className="line"> 
    <ResponsiveContainer width="100%" height={250} style={{margin:"auto"}}>
    <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="day" stroke="#FFFFFF" axisLine={false} tickLine={false} />
      <YAxis hide />
      <Tooltip  />
      <Line type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer></div>
  )
}
export default AverageDuration