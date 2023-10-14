import Navigate from "../../routes/Navigate"
import { Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <div>
        <Navigate />
        <Outlet />
    </div>
  )
}

export default Layout