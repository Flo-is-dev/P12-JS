import { useParams } from 'react-router-dom';
import { formatAverageDuration } from '../formatData';
import { mockAverageDuration } from '../mockData';
import { useState,useEffect,useContext } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, CartesianGrid, YAxis } from 'recharts';
import { ThemeContext } from '../context/ThemeProvider';

const AverageDuration = () => {
    const {callApi } = useContext(ThemeContext)

    const { userId } = useParams(); 
    const [userAverageDuration, setUserAverageDuration] = useState([])


    useEffect(() => {
        const loadSessions = async () => {
            try {
                const formattedSessions = await formatAverageDuration(userId);
                return formattedSessions;
            } catch (error) {
                console.error("Erreur de chargement des data API:", error);
                return [];  
            }
        };
    
        if (callApi) {
            loadSessions().then(formattedSessions => {
                setUserAverageDuration(formattedSessions);
            });
        } else {
            setUserAverageDuration(mockAverageDuration);
        }
    }, [userId, callApi]);


  return (
    <div className="line">
        <h3>Durée moyenne des sessions</h3>
        <ResponsiveContainer width="100%" height={250} style={{margin:"auto"}}>
            <LineChart data={userAverageDuration} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <XAxis dataKey="day" stroke="#FFFFFF" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip  />
            <Line type="monotone" dataKey="sessionDuration" stroke="white" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
export default AverageDuration