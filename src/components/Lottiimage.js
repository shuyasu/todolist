import React from 'react'
import AnimationAbcd from "../assets/101335-parrot.json"
import Lottie from "react-lottie-player"
import "../App.css"
const Lottiimage = () => {
  return (
    <div >
      <Lottie 
      play
      speed={'1'}
      animationData={AnimationAbcd} style={{
        width:100,
        height:100,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        alignContent:"center",
        marginLeft:"50%"
      }}/>
     </div>
  )
}

export default Lottiimage
