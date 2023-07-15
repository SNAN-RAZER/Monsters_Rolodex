import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";

class App extends Component {

  constructor(){
    super();
    
    this.state ={
      monsters:[
        {
          name:"Linda",
          id:123
        },
        {
          name:"Frank",
          id:456
        },
        {
          name:"Jacky",
          id:789
        },
        {
          name:"Beedi",
          id:101112
        },
      ],
      searchfield:""
    }
  }

 async componentDidMount(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users  = await response.json();
    this.setState({monsters:users});

                  
  }

  onSearchChange (e) {
    
    this.setState({searchfield:e.target.value})
   }

  render() {
  
    const filteredMonsters = this.state.monsters.filter((monster)=>monster.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase()));

    return (
      <div className="App">

       <h1 className="app-title">
        Monsters Rolodex
       </h1>

    <input 
        className="search-box"
        type="search"
        placeholder="search monsters"
        onChange={(event)=>this.onSearchChange(event)}
        />

        {/* <SearchBox  onChangeHandler={this.onSearchChange}/> */}
         {/* {
          
          filteredMonsters.map(element=>{
            return <h1 key ={element.id}>{element.name}</h1>
          })
         } */}

          <CardList   monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
