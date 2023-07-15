import { Component } from "react";
import App from "../../App";

class SearchBox extends Component{

    render(){

        const {onChangeHandler} = this.props;
        return(
            <input 
            className="search-box"
            type="search"
            placeholder="search monsters"
            onChange={(event)=>onChangeHandler(event)}
            />
        )
    }
}

export default SearchBox;