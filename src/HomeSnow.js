import React from 'react'
import Snowfall from 'react-snowfall'
function HomeSnow() {
  return (
    <Snowfall snowflakeCount={20}  style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
      
      }}></Snowfall>
  )
}

export default HomeSnow