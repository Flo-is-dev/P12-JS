import { useParams } from 'react-router-dom';
import { formatUserAverageSessions } from '../formatData';
import { mockDailyActivity } from '../mockData';
import { useState,useEffect,useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ThemeContext } from '../context/ThemeProvider';
import CustomTooltip from './CustomTooltip';



const DailyActivity = () => {
    const {callApi } = useContext(ThemeContext)
    console.log("check",callApi);
    const { userId } = useParams(); 

    const [userDailyActivity, setUserDailyActivity] = useState([]);
    const [minPoids, setMinPoids] = useState(0);
    const [maxPoids, setMaxPoids] = useState(0);
    const [midPoids, setMidPoids] = useState(0);

    useEffect(() => {
        const loadSessions = async () => {
            try {
                const formattedSessions = await formatUserAverageSessions(userId);
                return formattedSessions;
            } catch (error) {
                console.error("Erreur de chargement des data API:", error);
                return [];  // Retourner un tableau vide en cas d'erreur
            }
        };
    
        if (callApi) {
            loadSessions().then(formattedSessions => {
                setUserDailyActivity(formattedSessions);
                setMinPoids(Math.min(...formattedSessions.map(item => item.poids)));
                setMaxPoids(Math.max(...formattedSessions.map(item => item.poids)));
                setMidPoids((maxPoids + minPoids) / 2)
            });
        } else {
            setUserDailyActivity(mockDailyActivity);
            setMinPoids(Math.min(...mockDailyActivity.map(item => item.poids)));
            setMaxPoids(Math.max(...mockDailyActivity.map(item => item.poids)));
            setMidPoids((maxPoids + minPoids) / 2)
        }
    }, [userId, callApi]);

  return (
    <div className="chart"> 
            <h3 style={{ textAlign: 'center', position: 'absolute', top: '2%', left: '4%' }}>Activité quotidienne</h3>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart data={userDailyActivity} barGap={10} margin={{ top: 10, right: 30, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="1 1" vertical={false} horizontalPoints={[50,80,100]} />
                <XAxis dataKey="day" tickLine={false}  />
                <YAxis yAxisId="left" orientation="left" stroke="white" tick={false} axisLine={false} />
                <YAxis yAxisId="right" orientation="right" axisLine={false}  tickLine={false} stroke="#74798c"  tick={true} ticks={[70,71,72]}  domain={[70, 72]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" align="right" height={maxPoids} iconType="circle" iconSize={8}   />
                <Bar yAxisId="left" dataKey="poids"  fill="#282D30" barSize={8} radius={[10, 10, 0, 0]} />
                <Bar yAxisId="right" dataKey="calories" fill="#FF0000" barSize={8} radius={[10, 10, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}


export default DailyActivity