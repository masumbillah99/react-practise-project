import { Circle } from "react-feather";

const SizeDemo = () => {
  const sizes = ["16", "32", "48", "64", "96", "128", "144"];

  return (
    <>
      <h1>Size Demo</h1>
      <div className="demo">
        {sizes.map((size, index) => (
          <Circle key={index} color="black" fill="black" size={size} />
        ))}
      </div>
    </>
  );
};

export default SizeDemo;
