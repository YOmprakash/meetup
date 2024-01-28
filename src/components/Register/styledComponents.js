// styledComponents.js
import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

export const RegisterImage = styled.img`
  width: 50%; /* Adjust the width as needed */
  height: auto;
`

export const RegisterForm = styled.form`
  width: 45%; /* Adjust the width as needed */
`

export const Heading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
`

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
`
