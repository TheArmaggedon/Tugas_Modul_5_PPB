import "./CardSmall.css";





export default function CardProfile(props) {
    return (
      <div className="card" onClick={props.onClick}>
        <img src={props.img} alt="" className="photo" />+
        <div className="description">
          <div>
            <p id="title">{props.title}</p>
            <p id="genre">{props.nim}</p>
            
            
          </div>
        </div>
      </div>
   
    );
}
