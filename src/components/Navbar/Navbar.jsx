import style from './Navbar.module.css';
import landing_image from '../../assets/images/landing-image.jpg';

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
