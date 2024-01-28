import React, {useState} from 'react'

export const RegisterContext = React.createContext()

const RegisterProvider = ({children}) => {
  const [registrationData, setRegistrationData] = useState({
    name: '',
    topic: '',
  })

  const updateRegistrationData = newData => {
    setRegistrationData(newData)
  }

  return (
    <RegisterContext.Provider
      value={{registrationData, updateRegistrationData}}
    >
      {children}
    </RegisterContext.Provider>
  )
}

export default RegisterProvider
