import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-1000 p-5 m-0 ' 
      style={{backgroundColor: color}}>
        <div className='flex flex-wrap w-full bg-black gap-3 justify-center items-center rounded-full top-7 p-5'>
          <button onClick={() => setColor("red")} className='bg-red-500 p-2 rounded-full w-24'>Red</button>
          <button onClick={() => setColor("blue")} className='bg-blue-500 p-2 rounded-full w-24'>Blue</button>
          <button onClick={() => setColor("green")} className='bg-green-500 p-2 rounded-full w-24'>Green</button>
          <button onClick={() => setColor("yellow")} className='bg-yellow-500 p-2 rounded-full w-24'>Yellow</button>
          <button onClick={() => setColor("violet")} className='bg-violet-500 p-2 rounded-full w-24'>Lavendar</button>
          <button onClick={() => setColor("pink")} className='bg-pink-500 p-2 rounded-full w-24'>Pink</button>
        </div>
      </div>
    </>
  )
}

export default App
