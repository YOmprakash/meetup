// index.js
import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {RegisterContext} from '../../context/RegisterProvider'

import {
  RegisterContainer,
  RegisterImage,
  RegisterForm,
  Heading,
  Label,
  Input,
  Select,
  Button,
} from './styledComponents'
import Header from '../Header'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = () => {
  const {updateRegistrationData} = useContext(RegisterContext)
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('ARTS_AND_CULTURE')
  const [errorMessage, setErrorMessage] = useState('')

  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault()
    if (inputValue === '') {
      setErrorMessage('Please enter your name')
      return
    }
    const selectedTopic = topicsList.find(topic => topic.id === selectValue)
    updateRegistrationData({name: inputValue, topic: selectedTopic.displayText})
    history.replace('/')
  }

  return (
    <>
      <Header />

      <RegisterContainer>
        <RegisterImage
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
          alt="website register"
        />
        <RegisterForm onSubmit={handleSubmit}>
          <Heading>Let Us Join</Heading>
          <Label>NAME</Label>
          <Input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />

          <Label>TOPICS</Label>
          <Select onChange={e => setSelectValue(e.target.value)}>
            {topicsList.map(each => (
              <option key={each.id} value={each.id}>
                {each.displayText}
              </option>
            ))}
          </Select>
          <Button type="submit">Register Now</Button>
          {errorMessage && <p>{errorMessage}</p>}
        </RegisterForm>
      </RegisterContainer>
    </>
  )
}
export default Register
