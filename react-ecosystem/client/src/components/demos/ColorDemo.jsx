import { Circle } from "react-feather";

const ColorDemo = () => {
  const colors = ["#A63578", "teal", "#000000", "orange", "read", "green"];

  return (
    <>
      <h1>Color Demo</h1>
      <div className="demo">
        {colors.map((color, index) => (
          <Circle key={index} color={color} fill={color} size={125} />
        ))}
      </div>
    </>
  );
};

export default ColorDemo;
