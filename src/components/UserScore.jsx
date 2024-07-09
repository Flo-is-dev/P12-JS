

// import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

// import PropTypes from 'prop-types';

// const data = [
//     {
//       name: '18-24',
//       uv: 31.47,
//       pv: 2400,
//       fill: '#8884d8',
//     },
//     {
//       name: 'unknow',
//       uv: 6.67,
//       pv: 4800,
//       fill: '#ffc658',
//     },
//   ];

//   const style = {
//     top: '50%',
//     right: 0,
//     transform: 'translate(0, -50%)',
//     lineHeight: '24px',
//   };


// const UserScore = ({userScore}) => {

    
//   return (
//     <div className="cercle">{userScore}
//         <ResponsiveContainer width="100%" height="100%">
//         <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
//           <RadialBar
//             minAngle={15}
//             label={{ position: 'insideStart', fill: '#fff' }}
//             background
//             clockWise
//             dataKey="uv"
//           />
//           <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
//         </RadialBarChart>
//       </ResponsiveContainer>
//       </div>
//   )
// }

// UserScore.propTypes = {
//     userScore: PropTypes.number.isRequired
// }

// export default UserScore



import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';


const UserScore = ({ userScore }) => {
    
    const data = [
        {
            name: 'Score',
            value: userScore * 100,
            fill: '#FF0000',
        },
    ];

    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
    };

    return (
        <div className='cercle' style={{ width: '100%', height: 300, position: 'relative' }}>
            <h3 style={{ textAlign: 'center', position: 'absolute', top: '5%', left: '10%' }}>Score</h3>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="80%"
                    barSize={10}
                    data={data}
                    startAngle={90}
                    endAngle={150}
                >
                    <RadialBar
                        minAngle={15}
                        background
                        clockWise
                        dataKey="value"
                        
                    />
                </RadialBarChart>
            </ResponsiveContainer>
            <div style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
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