import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';


const UserScore = ({ userScore }) => {
    
    const data = [
        {
            name: 'Score',
            value: 90 +  360 * userScore ,
            fill: '#FF0000',
        },
    ];


    return (
        <div className='cercle' >
            <h3>Score</h3>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="80%"
                    barSize={10}
                    data={data}
                    startAngle={90}
                    endAngle={data[0].value}
                >
                    
                    <RadialBar
                        minAngle={15}
                        background
                        clockWise
                        dataKey="value"
                        cornerRadius={10}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
            <div className='circleScore'>
                <h2>{`${userScore * 100}%`}</h2>
                <p>de votre objectif</p>
            </div>
           
        </div>
    );
};


UserScore.propTypes = {
    userScore: PropTypes.number.isRequired
}

export default UserScore