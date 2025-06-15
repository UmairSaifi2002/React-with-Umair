import React from 'react'

const Username = ({params}) => {
  return (
    <>
        <div className='text-white text-2xl font-bold p-4 flex justify-center items-center'>
            {params.username}
        </div>
    </>
  )
}

export default  Username