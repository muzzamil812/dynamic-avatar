import "./App.css";

import AvatarCanvas from "./components/Avatar";

import BallCatchGame from "./components/Tetrus";

const App = () => (
  <>
    <AvatarCanvas>
      {/* <ChildTeddyBear position={[-1, -1, 2]} /> */}
      <BallCatchGame />
      {/* <ColorfulText /> */}
    </AvatarCanvas>
  </>
);

export default App;
