import SiteRoutes from "./components/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ComingSoon from "./pages/soon";

const isLive = import.meta.env.VITE_IS_LIVE === "true"
function App(){
  return(
    isLive?(
      <>
        <Header/>
        <SiteRoutes/>
        <Footer/>
      </>
    ):(
      <ComingSoon/>
    )
  )
    
  
}
export default App;