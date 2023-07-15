import {  useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";

const App = () =>{
  const [searchFelid, setSearchFelid] = useState("");
  const [monsters, setMonsters] = useState([    {
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
  ]);

  const getMonsterData = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users  = await response.json();
    setMonsters(users);
  }

  useEffect(()=>{
    getMonsterData();
  },[])
  
 const  onSearchChange =(e) => {
    
    setSearchFelid(e.target.value)
   }
  const filteredMonsters = monsters.filter((monster)=>monster.name.toLocaleLowerCase().includes(searchFelid.toLocaleLowerCase()));

  return (
    <div className="App">

    <h1 className="app-title">
     Monsters Rolodex
    </h1>

 <input 
     className="search-box"
     type="search"
     placeholder="search monsters"
     onChange={(event)=>onSearchChange(event)}
     />

     {/* <SearchBox  onChangeHandler={this.onSearchChange}/> */}
      {/* {
       
       filteredMonsters.map(element=>{
         return <h1 key ={element.id}>{element.name}</h1>
       })
      } */}

       <CardList   monsters={filteredMonsters}/>
   </div>
  )
}

export default App;
