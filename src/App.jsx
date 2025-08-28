import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Post from "./pages/Post";
import { Navigate } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";

const App = () => {
  const { token } = useContext(UserContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />}></Route>
        <Route path="register" element={ <Signup />}></Route>
        <Route path="login" element={<Login />} />
        <Route
          path="createpost"
          element={token ? <Post /> : <Navigate to="/login" replace />}
        />
        <Route path="details/:id" element={ <Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
