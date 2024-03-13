import {Routes, Route} from 'react-router-dom'

//importing pages
import Whoops from '../pages/404';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Donate from '../pages/donate';
import Legal from '../pages/legal';


const SiteRoutes = () => {
    return (
        <Routes>
            //* 404 page to handle all weird URLS *//
            <Route path='*' element={<Whoops/>}/>
            
            //* home page pathing *//
            <Route path={'/'} element={<Home/>}/>

            //* about page pathing *//
            {/* <Route path={'/about'} element={<About/>}/> */}

            //* about page detail pathing *//
            {/* <Route path='/about/:id' Component={(props)=>(
                <About {...props} />
            )}/> */}

            //* Contact page route *//
            <Route path={`/contact`} element={<Contact/>}/>

            //* Donation  information page route *//
            <Route path={`/donate`} element={<Donate/>}/>

            //* Legal information page route *//
            <Route path={`/legal`} element={<Legal/>}/>
            
        </Routes>
    )
}
export default SiteRoutes;