import { Component } from "react";
import './card.styles.css';
class Card extends Component{


    render(){

        const {name, id, email} = this.props.monster;
        return(
            <div className="card-container" key={id}>
            <img src={`https://robohash.org/${id}`} alt={name} />
            <h1>{name}</h1>
            <p>{email}</p>
            
          </div>
        )
    }
}

export default Card;