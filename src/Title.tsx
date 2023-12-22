import { TypeAnimation } from "react-type-animation";

function Title() {
  return (
    <TypeAnimation
      style={{
        height: "200px",
        width: "300px",
        display: "static",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
      cursor={false}
      className="type"
      preRenderFirstString={true}
      sequence={[
        "InspireMe",
        3000,
        "Inspiration Unlocked, One Quote at a Time",
        2000,
      ]}
      wrapper="span"
      speed={60}
      repeat={Infinity}
      deletionSpeed={99}
    />
  );
}

export default Title;
