import { NavLink } from "react-router-dom";
import { navItems } from "../constant/Constant";


export const Header = () => {
  return (
    <nav className="wrapper bg-navbarColor">
      <div className="nav_container pt-8 pb-8">
        <div className="nav_logo">
          <img src="./images/logo/logoGoesHere.png" alt="logo" />
        </div>
        <ul className="nav_items">
        {
        navItems.map(({id,link,title})=>{
          return(
            <li key={id}>
          <div className="nav_link"><NavLink to={link}>{title}</NavLink></div>
          </li>
          )
        })
        }
       
       
        </ul>
      </div>
    </nav>
  );
};
