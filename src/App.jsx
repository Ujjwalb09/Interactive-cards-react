import React from "react";
import { useState } from "react";
import Card from "./components/Card";

function App() {

  const data = [
    {name: "John", friends: false, profession: "Painter", image: "https://images.unsplash.com/photo-1595640115473-714d7e80cb48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Wang", friends: false,  profession: "Detective", image: "https://images.unsplash.com/photo-1558531976-c776dae36385?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Shi", friends: false, profession: "Police", image: "https://images.unsplash.com/photo-1712436144241-63d52ac193b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Evans", friends: false, profession: "Biologist", image: "https://images.unsplash.com/photo-1562742505-69a769e64026?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  ]

  const [realData, setRealData] = useState(data);

  const addFriend = (key)=> {
    setRealData((prev)=>{
     return prev.map((item, index)=>{
        if(index === key){
          return {...item, friends: !item.friends}
        }
          return item;
      })
    }) 
  }

  return (
    <div className="w-full h-screen bg-zinc-200 flex justify-center items-center gap-4">
      {realData.map((item, index)=>(
        <Card key={index} index={index} handleClick={addFriend} name={item.name} profession={item.profession} image={item.image} friends={item.friends}/>
      ))}
    </div>
  );
}

export default App;
