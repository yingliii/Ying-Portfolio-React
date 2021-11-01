const Card = ({ name, description}) => {
  return (
    <div className="card-wrapper">
      {/* Link */}
      {/* image/logo */}
      {/* languages/frameworks */}
      <div className="card-name">{name}</div>
      <div className="card-description">{description}</div>
    </div>
  )
}

export default Card;