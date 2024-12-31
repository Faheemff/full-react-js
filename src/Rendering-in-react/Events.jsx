// eslint-disable-next-line no-unused-vars
import React from 'react'

const Events = () => {
  return (
    <div>
      <input onChange={'this is event'} type="text" />
      <input onMouseEnter={'this is event'} type="password" />
      <input onMouseLeave={'this is another event'} type="email" />
      <button type='button'>Click</button>
    </div>
  )
}

export default Events
