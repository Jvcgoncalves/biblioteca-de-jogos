import PropTypes from "prop-types"

Game.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  onRemove: PropTypes.func

}

export default function Game ({title,cover, onRemove}){
  return (
    <div className="card">
      <img src={cover} alt="" className="card-img-left"/>
      <div 
      className="card-body d-grid">
        <h2 
        className="card-title">
          {title}
        </h2>
        <button 
        className="btn btn-primary align-self-center"
        onClick={onRemove}
        >Remover</button>
      </div>
    </div>
  )
}