import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [videos, setVideos] = useState([])
  async function get_data() {

    const result = await fetch("http://127.0.0.1:8000/tonedetection/getvideos/")
    const  json = await result.json()
    console.log(json)
    setVideos(json.data.videos) 
  }
  useEffect(() => {
    get_data()
  }, [])
  // Loading Screen
  if (videos.length == 0) {
    return (
      <div className='loading'>...</div>
    )
  }
  return (
    <div>{videos.map((video) => (video as any).title)}</div>
  )
  // "template"
  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       lmao
  //     </p>
  //   </div>
  // )
}

export default App
