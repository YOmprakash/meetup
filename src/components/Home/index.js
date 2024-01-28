import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import {RegisterContext} from '../../context/RegisterProvider'

import {
  Container,
  Heading,
  Paragraph,
  Button,
  Name,
  Topic,
  Image,
} from './styledComponents'

const Home = () => {
  const {registrationData} = useContext(RegisterContext)
  const {name, topic} = registrationData
  return (
    <>
      <Header />
      <Container>
        {name && topic ? (
          <>
            <Name>Hello {name}</Name>
            <Topic>Welcome to {topic}</Topic>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </>
        ) : (
          <>
            <Heading>Welcome to Meetup</Heading>
            <Paragraph>Please register for the topic</Paragraph>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </>
        )}
      </Container>
    </>
  )
}

export default Home
