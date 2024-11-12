import { UserProvider } from "./context/UserContext"
import { AppRouters } from "./routers/AppRouters"
import { NavBar } from "./ui/components/NavBar"




function App() {
  return (


    <>
      <UserProvider>
        <header>
          <>HEADER</>
        </header>
        <nav>
        <NavBar/>
        </nav>
        <main>
          <AppRouters />
        </main>

        <footer>
          <>FOOTER</>
        </footer>
      </UserProvider>
    </>
  )
}
export default App
