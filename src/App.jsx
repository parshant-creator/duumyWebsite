import AppRoute from "./routes/AppRoute";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position="top-center" />
      <AppRoute />
    </div>
  );
};

export default App;
