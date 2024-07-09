import { useParams } from 'react-router-dom';
import { getUserPerformance } from '../data';
import { useState,useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';



const UserPerformance = () => {

    const { userId } = useParams(); 
    const [userPerformance, setUserPerformance] = useState("")

    const data = [
        { subject: 'Intensité', A: 120, fullMark: 150 },
        { subject: 'Vitesse', A: 98, fullMark: 150 },
        { subject: 'Force', A: 86, fullMark: 150 },
        { subject: 'Endurance', A: 99, fullMark: 150 },
        { subject: 'Energie', A: 85, fullMark: 150 },
        { subject: 'Cardio', A: 65, fullMark: 150 },
      ];

    useEffect(() => {
        const loadData = async () => {
            try {
                const userPerformance = await getUserPerformance(userId);
                setUserPerformance(userPerformance);
            } catch (error) {
                console.error("Failed to fetch key data:", error);
            }
        };
        loadData();
    }, [userId]);

    console.log("userPerformance",userPerformance);

  return (

    <div className="toile">
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#FFFFFF', fontSize: 12 }} />
            <PolarRadiusAxis tick={false} axisLine={false} tickLine={false}/>
            <Radar
                name="Performance"
                dataKey="A"
                stroke="#FF0000"
                fill="#FF0000"
                fillOpacity={0.6}
            />
            </RadarChart>
        </ResponsiveContainer>
    </div>


  )
}
export default UserPerformance