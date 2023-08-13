import { useState } from 'react'
import './App.css'
import { Card } from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card-container">
        <Card imgId={'YwAgyCddum3K0'} alt={''}></Card>
        <Card imgId={'QuxqWk7m9ffxyfoa0a'} alt={''}></Card>
        <Card imgId={'ighdr7xNaVwwQtUkP0'} alt={''}></Card>
        <Card imgId={'h8OX1iXpgYoH1wIkHE'} alt={''}></Card>
        <Card imgId={'5zI213WKIL2uI'} alt={''}></Card>
        <Card imgId={'3pQA6Uba4Argk'} alt={''}></Card>
        <Card imgId={'jpbAaUG7cjkZy'} alt={''}></Card>
        <Card imgId={'qTD9EXZRgI1y0'} alt={''}></Card>
        <Card imgId={'XcL6a7YHm4sWA'} alt={''}></Card>
        <Card imgId={'kBrY0BlY4C4jhBeubb'} alt={''}></Card>
      </div>     
    </>
  )
}

export default App
