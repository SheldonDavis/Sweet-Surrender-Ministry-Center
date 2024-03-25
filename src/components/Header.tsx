import {NavLink} from 'react-router-dom'
import FullLogo from '../assets/SSMC_full_logo.svg'

interface Link{
    text:string;
    url:string;
    optClasses:string;
    active:boolean;
}

const links:Array<Link> = [
    {
        text:'home',
        url:'/',
        optClasses:'',
        active:true,
    },
    {
        text:'contact',
        url:'/contact',
        optClasses:'',
        active:true,
    },
    {
        text:'about',
        url:'/about',
        optClasses:'',
        active:false,
    },
    {
        text:'projects',
        url:'/projects',
        optClasses:'',
        active:true,
    },
    {
        text:'donate',
        url:'/donate',
        optClasses:'btn',
        active:true,
    },
    {
        text:'legal',
        url:'/legal',
        optClasses:'',
        active:false,
    },
    {
        text:'other',
        url:'/other',
        optClasses:'',
        active:false,
    },
]
function Header() {
   
    return(        
        <header>
            <a href={`/`} className={`fullLogoLink`}>
                <img src={FullLogo} alt={`Sweet Surrender Ministry Center Logo text with icon`}/>
            </a>
            <nav>
                {links.map((page, i)=>{
                    return(
                        page.active&&(<p key={`${page.text}_${i}`}><NavLink to={page.url} className={`${page.optClasses}`}>{page.text}</NavLink></p>)
                    )
                })}
            </nav>
        </header>
    )
}
export default Header;