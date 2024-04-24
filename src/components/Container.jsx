import React from 'react'

const Container = ({children,Style}) => {
  return (
    <div className='px-20 py-10' style={Style}>{children}</div>
  )
}

export default Container