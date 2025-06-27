import styles from './ProjectCard.module.css'

function ProjectCard(props) {
 return (
    <>  
        <section className={styles.container}>

        <div className={styles.projectContainer}>
            <div className={styles.projectElement}>
                <div className = {styles.projectImg}>
                    <img src={props.img}/>
                </div>
                <div>
                <a className={styles.projectTitle} href={props.link} target="_blank">{props.title}</a>
                <p className={styles.projectDesc}>
                    {props.description}
                </p>
                </div>
            </div>



        </div>
        </section>
    </>
 )
}

export default ProjectCard