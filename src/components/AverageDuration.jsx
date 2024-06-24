import { useParams } from 'react-router-dom';
import { getUserAverageSessions } from '../data';
import { useState,useEffect } from 'react';

const AverageDuration = () => {

    const { userId } = useParams(); 
    const [userAverageDuration, setUserAverageDuration] = useState("")

    useEffect(() => {
        const loadData = async () => {
            try {
                const userAverageDuration = await getUserAverageSessions(userId);
                setUserAverageDuration(userAverageDuration.data.sessions);
            } catch (error) {
                console.error("Failed to fetch key data:", error);
            }
        };
        loadData();
    }, [userId]);

    console.log("userAverageDuration",userAverageDuration);

  return (
    <div className="line">AverageDuration</div>
  )
}
export default AverageDuration