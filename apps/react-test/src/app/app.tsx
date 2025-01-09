import NxWelcome from './nx-welcome';
import {Route, Routes} from "react-router-dom";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<NxWelcome title="react-test" />}/>
    </Routes>
  );
}

export default App;
