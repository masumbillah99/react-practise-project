import { Circle } from "react-feather";

const ColorDemo = () => {
  const colors = [
    "#A63578",
    "#008080",
    "#000000",
    "#FFA500",
    "#FF0000",
    "#008000",
  ];

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
