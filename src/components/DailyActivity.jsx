import { useParams } from 'react-router-dom';
import { formatUserAverageSessions } from '../formatData';
import { mockDailyActivity } from '../mockData';
import { useState,useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ThemeContext } from '../context/ThemeProvider';
import { useContext } from 'react';

const DailyActivity = () => {

    const {callApi } = useContext(ThemeContext)
    console.log(callApi);

    const { userId } = useParams(); 
    // valeure utilisée globalement pour le graphique
    const [userDailyActivity, setUserDailyActivity] = useState([])
    // tableau importé via le call API
    const [apiDailyActivity, setApiDailyActivity] = useState([])
    // tableau importé via le call MOCK et setter supprimé car non utile
    const [mockedDailyActivity] = useState(mockDailyActivity)
    
    useEffect(() => {
        setUserDailyActivity(callApi ? apiDailyActivity : mockDailyActivity);
    }, [callApi, apiDailyActivity, mockedDailyActivity]);


    useEffect(() => {
        const loadSessions = async () => {
            try {
                const formattedSessions = await formatUserAverageSessions(userId);
                console.log("5555", formattedSessions);
                setApiDailyActivity(formattedSessions);
    
            } catch (error) {
                console.error("Erreur de chargement des data API:", error);
            }
        };
    
        loadSessions();
    }, [userId]);
    

    //   const dataWeightMin = Math.min(...data.map(item => item.weight));
    //   const dataWeightMax = Math.max(...data.map(item => item.weight));



  return (
    <div className="chart"> 
         <ResponsiveContainer width="100%" height="100%">
      <BarChart data={userDailyActivity} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="1 1" vertical={false} horizontalPoints={[50,150,400]} />
        <XAxis dataKey="day" tickLine={false} />
        <YAxis yAxisId="left" orientation="left" stroke="white" tick={false} />
        <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} stroke="#74798c" tick={true} ticks={[50,200,400]} domain={[50,400]} />
        <Tooltip  />
        <Legend verticalAlign="top" height={36} iconType="circle" iconSize={8} />
        <Bar yAxisId="left" dataKey="poids" fill="#282D30" barSize={8} radius={[10, 10, 0, 0]} />
        <Bar yAxisId="right" dataKey="calories" fill="#FF0000" barSize={8} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default DailyActivity