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
            <h3>Activité quotidienne</h3>
            <div className="chart-legend">
                <div className="legend-poids">
                    <div></div>
                    <span>Poids (kg)</span>
                </div>
                <div className="legend-calories">
                    <div></div>
                    <span>Calories brûlées (kCal)</span>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart data={userDailyActivity} barGap={10} margin={{ top: 60, right: 30, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="2 2" vertical={false} />
                <XAxis dataKey="day" tickLine={false}  />
                <YAxis yAxisId="right" orientation="left" stroke="#74798c" tick={false} axisLine={false}   domain={[minPoids, 'auto']} />
                <YAxis yAxisId="left" orientation="right" axisLine={false}  tickLine={false} stroke="#74798c"  tick={true} tickSize={30} domain={[minPoids - 2, maxPoids + 2]}  />
                <Tooltip content={<CustomTooltip />} />
                <Bar yAxisId="left" dataKey="poids"  fill="#282D30" barSize={8} radius={[10, 10, 0, 0]} />
                <Bar yAxisId="right" dataKey="calories" fill="#FF0000" barSize={8} radius={[10, 10, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}


export default DailyActivity