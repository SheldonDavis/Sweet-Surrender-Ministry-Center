import {NavLink} from 'react-router-dom'

interface Link{
    text:string;
    link:string;
    optClasses:string;
    active:boolean;
}

const links:Array<Link> = [
    {
        text:'home',
        link:'/',
        optClasses:'',
        active:true,
    },
    {
        text:'contact',
        link:'/contact',
        optClasses:'',
        active:true,
    },
    {
        text:'about',
        link:'/about',
        optClasses:'',
        active:false,
    },
    {
        text:'other',
        link:'/other',
        optClasses:'',
        active:false,
    },
    {
        text:'donate',
        link:'/donate',
        optClasses:'btn',
        active:true,
    },
    {
        text:'legal',
        link:'/legal',
        optClasses:'',
        active:true,
    },
]
function Header() {
   
    return(        
        <header>
            {links.map((page, i)=>{
                return(
                    page.active&&(<p key={`${page.text}_${i}`}><NavLink to={page.link} className={({isActive})=>isActive?`active`:``}>{page.text}</NavLink></p>)
                )
            })}
        </header>
    )
}
export default Header;