import {NavLink, useLocation} from 'react-router-dom'

const pages:Array<string> = ['home','contact','donate','legal']//'about','other',
const hrefs:Array<string> = ['/','/contact','/donate','/legal']//'/about/','/other/',

function Nav() {
    const loc = useLocation()
    let subDir = loc.pathname.replace("/","").replace("/","");

    if(subDir===""){subDir="home"}
    // console.log(subDir)
    // console.log(loc)
    return(        
        <header>
            {pages.map((page, i)=>{
                return(<p key={page}><NavLink to={hrefs[i]} className={({isActive})=>isActive?`active`:``}>{page}</NavLink></p>)
            })}
        </header>
    )
}
export default Nav;