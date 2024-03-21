import {NavLink} from 'react-router-dom'

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
        text:'other',
        url:'/other',
        optClasses:'',
        active:false,
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
        active:true,
    },
]
function Header() {
   
    return(        
        <header>
            {links.map((page, i)=>{
                return(
                    page.active&&(<p key={`${page.text}_${i}`}><NavLink to={page.url} className={`${page.optClasses}`}>{page.text}</NavLink></p>)
                )
                //
            })}
        </header>
    )
}
export default Header;