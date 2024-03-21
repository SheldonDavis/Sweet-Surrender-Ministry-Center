import SiteRoutes from "./components/routes";
import Nav from "./components/Header";
import ComingSoon from "./pages/soon";
const isLive = import.meta.env.VITE_IS_LIVE === "true"
function App(){
  return(
    isLive?(
      <>
        <Nav/>
        <SiteRoutes/>
      </>
    ):(
      <ComingSoon/>
    )
  )
    
  
}
export default App;