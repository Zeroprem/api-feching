import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './componets/Navbar'

function App() {
  const [cards, setCards] = useState([])
  const fetchdata = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data=await a.json()
    setCards(data)
    console.log(data)
  }
 
  useEffect(() => {
fetchdata()
  }, [])

  return (
    <>
    <Navbar/>
      <div className="containter flex gap-4 flex-wrap text-green-500">
        {cards.map((card)=>{
          return <div key={card.id} className="card border border-1 border-purple-400 w-[23vw] ">
            <h1>{card.tittle}</h1>
            <p>{card.body}</p>
            <span>By: UserId:{card.id}</span>
          </div>
        })}
      </div>
    </>
  )
}

export default App
