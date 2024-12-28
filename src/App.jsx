import React from 'react'
import Card from './components/Card'
import Input from './components/Input'

const App = () => {
  return (
    <div className='w-full flex flex-col items-center gap-3 pt-10'>
      <Input/>
      <Card src={"/vite.svg"} name={"Javeriya Saleem"} bio={"Skilled Front-End Developer!"} followers={"29"} following={"24"} repos={"38"} repo1={"Beauty-shop-using-React"} repo2={"Hackathon-Javascript"} repo3={"cloudinary"} repo4={"tik-tok-toe"} repo5={"twitter-clone"}/>
    </div>
  )
}

export default App
