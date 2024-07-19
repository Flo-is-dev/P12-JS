import PropTypes from 'prop-types';
import {Rectangle} from "recharts";


const CustomCursor = (props) => {
    const { points, width, height } = props;
    const { x, y } = points[0];
    console.log(props);
    return (
      <Rectangle
        fill="#E60000"
        stroke="#E60000"
        x={x}
        y={y}
        width={width}
        height={height}
      />
    );
  };

  CustomCursor.propTypes = {
    points: PropTypes.array,   
    width: PropTypes.number,   
    height: PropTypes.number,   
    stroke: PropTypes.string,   
  };

export default CustomCursor