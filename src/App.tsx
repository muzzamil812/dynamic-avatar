import "./App.css";

import AvatarCanvas from "./components/Avatar";
import ColorfulText from "./components/ColorfullText";
import TeddyBear from "./components/TeddyBear";
import FemaleTeddyBear from "./components/FemaleTeddyBear";
import ChildTeddyBear from "./components/ChildTeddyBear";

const App = () => (
  <>
    <h1>Use Mouse Scroll To Adjust</h1>
    <AvatarCanvas>
      {/* Position the Box slightly to the left */}

      {/* Position the Male Teddy Bear at the center */}
      <TeddyBear position={[-3, 0, 0]} />
      <ChildTeddyBear position={[1, 0, 0]} />
      {/* Position the Female Teddy Bear slightly to the right */}
      <FemaleTeddyBear position={[5, 0, 0]} />

      {/* Colorful Text positioned below the teddy bears */}
      <ColorfulText />
    </AvatarCanvas>
  </>
);

export default App;
