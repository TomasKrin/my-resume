import '../ProjectCard/ProjectCard.css';

const ProjectCard = ({title, image, subtitle }) => {
  return (
    <div className='cardContainer'>
        <img src={image} alt="pic"/>
        <h3>
            {title}
        </h3>
        <p>{subtitle}</p>
        <button className='moreButton'>Check further..</button>
    </div>
  )
}

export default ProjectCard
