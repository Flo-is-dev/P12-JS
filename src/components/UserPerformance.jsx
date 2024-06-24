import { useParams } from 'react-router-dom';
import { getUserPerformance } from '../data';
import { useState,useEffect } from 'react';

const UserPerformance = () => {

    const { userId } = useParams(); 
    const [userPerformance, setUserPerformance] = useState("")

    useEffect(() => {
        const loadData = async () => {
            try {
                const userPerformance = await getUserPerformance(userId);
                setUserPerformance(userPerformance.data);
            } catch (error) {
                console.error("Failed to fetch key data:", error);
            }
        };
        loadData();
    }, [userId]);

    console.log("userPerformance",userPerformance);

  return (
    <div className="toile">UserPerformance</div>
  )
}
export default UserPerformance