import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

export const myContext = createContext("context")

const HookContext = () => {
    const context = useContext(myContext)

  return (
    <div>
        {context}
    </div>
  )
}

export default HookContext