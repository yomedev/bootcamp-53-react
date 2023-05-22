import React from 'react'

export const Profile = ({isOnline, name}) => {
  
  return (
    <div>
      {/* <img src='' /> */}
      <p>{isOnline ? 'Online' : 'Offline'}</p>
      <p>{name}</p>
    </div>
  )
}
