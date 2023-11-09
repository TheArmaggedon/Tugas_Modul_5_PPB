import "./CardSmall.css";
import { Link } from 'react-router-dom';




export default function CardSmall(props) {
    return (
    
      <div className="card" onClick={props.onClick}>
        <img src={props.img} alt="" className="photo" />
        <div className="description">
          <div>
            <p id="title">{props.title}</p>
            <p id="genre">{props.genre}</p>
            <p id="desc">{props.desc}</p>
            <p id="nim">{props.nim}</p>
            
          </div>
        </div>
      </div>
    
    );
}
