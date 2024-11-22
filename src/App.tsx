import "./App.css";

import AvatarCanvas from "./components/Avatar";
import ColorfulText from "./components/ColorfullText";

import TeddyBear from "./components/TeddyBear";

const App = () => (
  <>
    <h1>Use Mouse Scroll To Adjust</h1>
    <AvatarCanvas>
      {/* <Box /> */}
      {/* <Heart /> */}
      <TeddyBear />
      <ColorfulText />
    </AvatarCanvas>
  </>
);

export default App;
