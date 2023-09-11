import { useState } from 'react'

function useToggle(isToggle: boolean) {
  const [toggle, setToggle] = useState(isToggle)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return {
    toggle,
    handleToggle
  }
}

export default useToggle