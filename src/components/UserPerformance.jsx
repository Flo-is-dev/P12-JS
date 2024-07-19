import { useParams } from 'react-router-dom';
import { formatUserPerformance } from '../formatData';
import { mockUserPerformance } from '../mockData';
import { useState,useEffect,useContext } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { ThemeContext } from '../context/ThemeProvider';


const UserPerformance = () => {
    const {callApi } = useContext(ThemeContext)

    const { userId } = useParams(); 
    const [userPerformance, setUserPerformance] = useState([])

    useEffect(() => {
        const loadSessions = async () => {
            try {
                const formattedSessions = await formatUserPerformance(userId);
                return formattedSessions;
            } catch (error) {
                console.error("Erreur de chargement des data API:", error);
                return [];
            }
        };
    
        if (callApi) {
            loadSessions().then(formattedSessions => {
                setUserPerformance(formattedSessions);
            });
        } else {
            setUserPerformance(mockUserPerformance);
        }
    }, [userId, callApi]);

  return (

    <div className="toile">
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={userPerformance}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#FFFFFF', fontSize: 12 }} />
            <PolarRadiusAxis tick={false} axisLine={false} tickLine={false} />
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