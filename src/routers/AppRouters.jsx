import { Navigate, Route, Routes } from "react-router-dom"
import { Clerigo, Guerrero, HomePages, Login, Magos } from "../publicVeiws/pages"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { ProtectedPages } from "../admin/pages/ProtectedPages"


export const AppRouters = () => {
  const { isAuthenticated } = useContext(UserContext)

  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="home" element={<HomePages />} />
      <Route path="magos" element={<Magos />} />
      <Route path="clerigo" element={<Clerigo />} />
      <Route path="guerrero" element={<Guerrero />} />
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<Navigate to={'/'} />} />
      {
        isAuthenticated
          ?
          <Route exact path="admin" element={<ProtectedPages />} />
          :
          <Route path='/*' element={<Navigate to={Login} />} />
      }


    </Routes>
  )
}
