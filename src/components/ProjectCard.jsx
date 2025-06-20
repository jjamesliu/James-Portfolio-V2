import styles from './ProjectCard.module.css'
import reduceCarbonPic from '../assets/reduce_carbon_project.png'
function ProjectCard() {
 return (
    <>  
        <section className={styles.container}>
        <h1 className={styles.title}>Projects</h1>

        <div className={styles.projectContainer}>
            <div className={styles.projectElement}>
                <div className = {styles.projectImg}>
                    <img src={reduceCarbonPic}/>
                </div>
                <div>
                <h3 className={styles.projectTitle}>Reduce Carbon</h3>
                <p className={styles.projectDesc}>
                    A React-based web application that helps users visualize and reduce their carbon emissions based on travel routes. 
                    By integrating the Climatiq API, the app calculates CO₂ impact for different travel options, 
                    allowing users to compare and choose eco-friendlier alternatives. I also implemented geolocation features and interactive 
                    Google Maps to create an engaging and informative user experience.
                </p>
                </div>
            </div>



        </div>
        </section>
    </>
 )
}

export default ProjectCard