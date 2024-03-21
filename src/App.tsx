import SiteRoutes from "./components/routes";
import Nav from "./components/Header";
import ComingSoon from "./pages/soon";
const isLive = false
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