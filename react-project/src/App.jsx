import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import img_1 from './assets/img-1.png'
import img_2 from './assets/img-2.png'
import img_3 from './assets/img-3.png'

function App() {
  const [count, setCount] = useState(0)
  const active = 1


  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        <Card title="Tokyo" imgUrl="https://media.gettyimages.com/id/904453184/it/foto/immagine-composita-del-monte-fuji-e-dello-skyline-di-tokyo.jpg?s=612x612&w=gi&k=20&c=DjeMEHuejLb7rCaCHFmPodDIGl91e5QuWWY2gTSiAp8=">
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        </Card>
        <Card title="New York" imgUrl="https://img.freepik.com/foto-gratuito/splendida-vista-degli-stati-impero-e-dei-grattacieli-di-new-york-city_181624-6295.jpg">
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        </Card>
        <Card title="Paris" imgUrl="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D">
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        </Card>
        <Card title="London" imgUrl="https://img.freepik.com/foto-gratuito/big-ben-e-westminster-bridge-al-tramonto-londra-regno-unito_268835-1395.jpg">
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
        </Card>
      </div>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <img className={`${active == 1 ? "block" : "hidden"}`} src={img_1} alt="" />
      <img className={`${active == 2 ? "block" : "hidden"}`} src={img_2} alt="" />
      <img className={`${active == 3 ? "block" : "hidden"}`} src={img_3} alt="" />
      <button onClick={active == 1 ? () => setCount(2) : () => setCount(1)} className='btn btn-primary'>Next Image</button>

    </>
  )
}

export default App
