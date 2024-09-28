import style from './Navbar.module.css';
import landing_image from "../../images/bg-masthead.jpg";

const Navbar = () => {
     return (
          <>
               <div className={style.navbar}>
                    <a href='#'>LOGO</a>
                    <button>Sign Up</button>
               </div>
               <img src={landing_image} alt='landing-image' />
          </>
     )
}

export default Navbar
