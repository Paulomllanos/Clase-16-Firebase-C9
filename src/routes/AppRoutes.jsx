import {Routes, Route} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../views/Home";
import Menu from "../views/Menu";
import About from "../views/About";
import Reserva from "../views/Reserva";
import Admin from "../views/Admin";

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/reserva" element={<Reserva />} />
                <Route path="/admin" element={<Admin />} />
            </Route>
        </Routes>
    </>
  )
}

export default AppRoutes