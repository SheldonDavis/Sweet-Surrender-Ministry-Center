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
        text:'Home',
        url:'/',
        optClasses:'',
        active:true,
    },
    {
        text:'Contact',
        url:'/contact',
        optClasses:'',
        active:true,
    },
    {
        text:'About',
        url:'/about',
        optClasses:'',
        active:false,
    },
    {
        text:'Projects',
        url:'/projects',
        optClasses:'',
        active:true,
    },
    {
        text:'Donate',
        url:'/donate',
        optClasses:'btn',
        active:true,
    },
    {
        text:'Legal',
        url:'/legal',
        optClasses:'',
        active:false,
    },
    {
        text:'Other',
        url:'/other',
        optClasses:'This_Is_Placeholder_Use_As_Baseline_For_More_Links',
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