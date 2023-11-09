

import { useLocation } from 'react-router-dom';
import './Detail.css';

export default function Detail() {
  
  const { state } = useLocation();
  const itemData = state && state.itemData;

  
  
  if (!itemData) {
    return <div>Data not found</div>;
  }

  return (
    <div className="detail-container"> {/* Apply the container class */}
      <h1 className="detail-title">{itemData.title}</h1> {/* Apply title class */}
      <p className="detail-description">{itemData.desc}</p> {/* Apply description class */}
      <p className="detail-genre">{itemData.genre}</p>{/* Apply description class */}
      <img className="detail-image" src={itemData.img} alt={itemData.title} /> {/* Apply image class */}
    </div>
  );
}



