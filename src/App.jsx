import { UserProvider } from "./context/UserContext"
import { AppRouters } from "./routers/AppRouters"
import { NavBar } from "./ui/components/NavBar"




function App() {
  return (


    <>
      <UserProvider>
        <header className="cabecera">
       
          MAKEyourDnD
        </header>
        <nav>
          <NavBar />

          <div>

          </div>
        </nav>
        <main>

          <AppRouters />
          <img src="/src/images/fondo.jpg" alt="descripcion de imagen" />
        </main>

        <footer className="footer">
          
          MAKEyourDnD
        </footer>
      </UserProvider>
    </>
  )
}
export default App
