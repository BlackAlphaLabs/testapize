import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from "react"
import HomePage from "./pages/HomePage"
import EnvMain from "./pages/Env/EnvMain"
import HomeEnv from "./pages/EnvPages/HomeEnv"
import InforAbout from "./pages/EnvPages/InforAbout"
import Request from "./pages/EnvPages/Request"


const AppRoutes = () => {
  const location = useLocation()

  return (
    <>
      {/* Show Nav only if not on "/" */}
      {/* {location.pathname !== "/" && <Nav />} */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Env" element={<EnvMain /> } >
          <Route path="Home" element={<HomeEnv /> } />
          <Route path="About" element={<InforAbout /> } />
          <Route path="Request" element={<Request /> } />
        </Route>
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App