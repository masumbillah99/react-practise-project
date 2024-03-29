import { Square, Triangle, Circle, Box, Heart, Hexagon } from "react-feather";

const ShapeDemo = () => {
  return (
    <div>
      <h1>Shape Demo</h1>

      <div className="demo">
        <Square color="black" size={125} />
        <Triangle color="black" size={125} />
        <Circle color="black" size={125} />
        <Box color="black" size={125} />
        <Heart color="black" size={125} />
        <Hexagon color="black" size={125} />
      </div>
    </div>
  );
};

export default ShapeDemo;
