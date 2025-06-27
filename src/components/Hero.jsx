import styles from './Hero.module.css'
import heroImg from '../assets/jamesliuprofilepicture.png'
import lightmode from '../assets/sun.svg'
import darkmode from '../assets/moon.svg'
import githubDay from '../assets/github-light.svg'
import linkedinDay from '../assets/linkedin-light.svg'
import githubNight from '../assets/github-dark.svg'
import linkedinNight from '../assets/linkedin-dark.svg'
import CV from '../assets/james_resume.pdf'
import { useTheme } from '../common/ThemeContext'

function Hero() {
  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? lightmode : darkmode;
  const linkedinIcon = theme === 'light' ? linkedinDay : linkedinNight;
  const githubIcon = theme === 'light' ? githubDay : githubNight;

  return (
    <>
     <section id="hero" className={styles.container}>
      <div className={styles.themeWrapper}>
      <img 
        className={styles.themeMode}
        src={themeIcon} 
        alt="Dark/Light Mode"
        onClick={toggleTheme}>
     </img>
     </div>
     <div className={styles.heroContainer}>
        <img className={styles.profilePic} 
        src={heroImg} 
        alt="James Liu Profile Picture">
        </img>
     </div>
     
     <div className={styles.info}>
      <h1 className={styles.james}>
        James Liu
      </h1>
      <h2 className={styles.fullstack}>
        Full-Stack Developer
      </h2>
      <span>
        <a href="https://github.com/jjamesliu" target="_blank">
          <img src={githubIcon} alt="Github Icon"></img>
        </a>
        <a href="https://www.linkedin.com/in/jameszhiliu/" target="_blank">
          <img src={linkedinIcon} alt="LinkedIn Icon"></img>
        </a>
      </span>
      <p>
        Hi, I'm James Liu, a full-stack developer based in Los Angeles, California, 
        studying at University of California: Los Angeles. I specialize in developing web applications. 
      </p>
      <p className={styles.closing}>
        I'm always open to learn and connect so don't hesitate to reach out to me.
      </p>
      <a href={CV} target="_blank" rel="noopener noreferrer"> 
        <button className="hover">Resume</button>
      </a>
     </div>
     </section>
     <h1 className={styles.title}>Projects</h1>
     </>
  )
}

export default Hero
