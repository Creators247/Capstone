import Home from "./component/Home";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_PUBLIC_API_KEY,
  authDomain: "chatter-ebb5e.firebaseapp.com",
  projectId: "chatter-ebb5e",
  storageBucket: "chatter-ebb5e.appspot.com",
  messagingSenderId: "111195601360",
  appId: import.meta.env.VITE_PUBLIC_APP_ID,
  measurementId: "G-YD4XZ2H1L4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
console.log(analytics);

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
