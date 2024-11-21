import { Navigate, Route, Routes } from "react-router-dom"
import { Clerigo, Guerrero, HomePages, Login, Magos } from "../publicVeiws/pages"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { HomePagesAdmin } from "../admin/pages/HomePagesAdmin"
import { CreateProjectAdmin } from "../admin/pages/CreateProjectAdmin"
import { EditProjectAdmin } from "../admin/pages/EditProjectAdmin"
import { Paladin } from "../publicVeiws/pages/Paladin"

/**Estas son las rutas que tendra la aplicacion.Cada una son las vistas de paginas y componentes
 * 
 * @returns 
 */
export const AppRouters = () => {
  const { isAuthenticated } = useContext(UserContext)
/* RUTAS PUBLICAS */
  return (
    <Routes>
      {/* RUTAS PROTEGIDAS */}
      {
        isAuthenticated
       ? (
        <>
        <Route path="admin" element={<HomePagesAdmin/>}/>
        <Route path="admin/create-character" element={<CreateProjectAdmin/>}/> 
        <Route path="admin/edit-character/:id" element={<EditProjectAdmin/>}/> 
        </>
        ):(
          <>
          <Route path="/" element={<HomePages />} />
          <Route path="home" element={<HomePages />} />
          <Route path="magos" element={<Magos />} />
          <Route path="clerigo" element={<Clerigo />} />
          <Route path="guerrero" element={<Guerrero />} />
          <Route path="Paladin" element={<Paladin />} />
          <Route path='login' element={<Login />} />
          <Route path='/*' element={<Navigate to={'/'} />} />
          <Route path='logout' element={<Login/>}/>
          </>
        )
      }

       


    </Routes>
  )
}
