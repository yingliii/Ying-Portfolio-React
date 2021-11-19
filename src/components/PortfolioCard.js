import { Link } from 'react-router';

const Card = ({name, description, imageUrl, githubUrl, deployedUrl}) => {
  return (
    <div className="card-wrapper">
      <img className="portfolio-image" src={imageUrl} alt={name}/>
      <h4 className="card-name">{name}</h4>
      <div className="card-description">{description}</div>
      <div className="card-url" > <a href={githubUrl}> {name} Github </a></div>
      <div className="card-url" >
        <a href={deployedUrl}> {name} Deployed Website </a> </div>
    </div>
  )
}

export default Card;