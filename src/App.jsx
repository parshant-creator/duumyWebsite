import { useContext } from "react";
import AppRoute from "./routes/AppRoute";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const {user, loading} = useContext(AuthContext)
  
console.log("user:", user);
console.log("loading:", loading);
  return (
    <div>
      <Toaster position="top-center" />
      <AppRoute />
    </div>
  );
};

export default App;
