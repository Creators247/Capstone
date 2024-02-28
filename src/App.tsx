import { Routes, Route } from "react-router-dom";
import SignUp from "./component/SignUp/SignUp";
import Landingpage from "./component/Landing-Page/Landingpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
