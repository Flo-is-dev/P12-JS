import { useState,useEffect } from 'react';
import Aside from '../components/Aside'
import Content from '../components/Content'
import Navigation from '../components/Navigation'
import { useParams } from 'react-router-dom';
import { getUserInfo } from '../data';


function User() {
    const { userId } = useParams(); 
    const [userName, setUserName] = useState("");
    const [userScore, setUserScore] = useState(0);

    useEffect(() => {
        const loadData = async () => {
            try {
                const userName = await getUserInfo(userId);
                const todayScore = userName.data.todayScore;
                const score = userName.data.score
                setUserScore(todayScore ? todayScore : score
                )
                setUserName(userName.data.userInfos.firstName);
                
            } catch (error) {
                console.error("Failed to fetch key data:", error);
            }
        };
        loadData();
    }, [userId]);

 
  return (
    <div className='appContainer'>
        <Navigation/>
        <Aside/>
        <div className='contentContainer'>
            <div style={{width: "fit-content",margin: "auto"}}>
               <h1>Bonjour <span className='red'>{userName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <Content userScore={userScore} /> 
            </div>
            
        </div>
    </div>
  )
}

export default User
