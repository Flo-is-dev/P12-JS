import { useParams } from 'react-router-dom';
import { formatUserAverageSessions } from '../formatData';
import { mockDailyActivity } from '../mockData';
import { useState,useEffect,useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ThemeContext } from '../context/ThemeProvider';

const DailyActivity = () => {
    const {callApi } = useContext(ThemeContext)
    console.log("check",callApi);
    const { userId } = useParams(); 

    const [userDailyActivity, setUserDailyActivity] = useState([])

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
            });
        } else {
            setUserDailyActivity(mockDailyActivity);
        }
    }, [userId, callApi]);

    
    //   const dataWeightMin = Math.min(...data.map(item => item.weight));
    //   const dataWeightMax = Math.max(...data.map(item => item.weight));


    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip" style={{ backgroundColor: '#ff0101',color:'#fff', padding: '10px', border: '1px solid #ccc' }}>
              <p className="intro">{` ${payload[0].value} Kg`}</p>
              <p>{`${payload[1].value} Kcal`}</p>
            </div>
          );
        }
      
        return null;
      };

  return (
    <div className="chart"> 
            <h3 style={{ textAlign: 'center', position: 'absolute', top: '2%', left: '4%' }}>Activité quotidienne</h3>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart data={userDailyActivity} barGap={10} margin={{ top: 10, right: 50, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="1 1" vertical={false} horizontalPoints={[50,150,400]} />
                <XAxis dataKey="day" tickLine={false}  />
                <YAxis yAxisId="left" orientation="left" stroke="white" tick={false} />
                <YAxis yAxisId="right" orientation="right" axisLine={false}  tickLine={false} stroke="#74798c" tick={true} ticks={[50,200,400]} domain={[50,400]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" align="right" height={36} iconType="circle" iconSize={8}   />
                <Bar yAxisId="left" dataKey="poids" fill="#282D30" barSize={8} radius={[10, 10, 0, 0]} />
                <Bar yAxisId="right" dataKey="calories" fill="#FF0000" barSize={8} radius={[10, 10, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default DailyActivity