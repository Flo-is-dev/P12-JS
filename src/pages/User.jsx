import { useState,useEffect } from 'react';
import Aside from '../components/Aside'
import Content from '../components/Content'
import Navigation from '../components/Navigation'
import { useParams } from 'react-router-dom';
import { getUserInfo } from '../data';


function User() {
    const { userId } = useParams(); 
    const [userName, setUserName] = useState("");
    const [userScore, setUserScore] = useState("");

    useEffect(() => {
        const loadData = async () => {
            try {
                const userName = await getUserInfo(userId);
                setUserScore(userName.data.todayScore
                )
                setUserName(userName.data.userInfos.firstName);
            } catch (error) {
                console.error("Failed to fetch key data:", error);
            }
        };
        loadData();
    }, [userId]);

    console.log("userData",userScore);
 
  return (
    <div className='appContainer'>
        <Navigation/>
        <Aside/>
        <div className='contentContainer'>
            <h1>Bonjour <span className='red'>{userName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <Content userScore={userScore} />
        </div>
    </div>
  )
}

export default User
