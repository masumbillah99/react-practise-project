import { Suspense, useState } from "react";
import demos from "../../data/demos-data";
import importDemos from "../../utils/importDemos";
// import ColorDemo from "./ColorDemo";
// import ShapeDemo from "./ShapeDemo";
// import SizeDemo from "./SizeDemo";

const ShapeComponent = () => {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const loadDemos = async (file) => {
    const Demo = await importDemos(file);
    return <Demo />;
  };

  const selectDemo = async (file) => {
    const DemoCompo = await loadDemos(file);
    setSelectedDemo(DemoCompo);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-center">
          React Lazy Load Experiment
        </h1>

        <div className="my-10">
          {demos.map((demo) => (
            <button
              key={demo.name}
              className="btn-demo"
              onClick={() => selectDemo(demo.file)}
            >
              {demo.name} demo
            </button>
          ))}

          {/* <button className="btn-demo" onClick={() => selectDemo("size")}>
            SizeDemo
          </button>
          <button className="btn-demo" onClick={() => selectDemo("color")}>
            ColorDemo
          </button>
          <button className="btn-demo" onClick={() => selectDemo("shape")}>
            ShapeDemo
          </button> */}
        </div>
      </div>

      <div>
        <Suspense fallback={<p>Loading Demos...</p>}>{selectedDemo}</Suspense>
        {/* {selectedDemo === "size" && <SizeDemo />}
        {selectedDemo === "color" && <ColorDemo />}
        {selectedDemo === "shape" && <ShapeDemo />} */}
      </div>
    </div>
  );
};

export default ShapeComponent;
