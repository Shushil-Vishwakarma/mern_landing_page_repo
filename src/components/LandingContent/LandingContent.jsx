import style from './LandingContent.module.css';

const LandingContent = () => {
     return (
          <div className={style.overlay}>
               <div className={style.content}>
                    <p>Generate more leads with a professional landing page!</p>
                    <form>
                         <input type='email' placeholder='Enter your email' />
                         <input type='submit' value='Submit' />
                    </form>
               </div>
          </div>
     )
}

export default LandingContent;
