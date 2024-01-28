import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import './App.css'
import NotFound from './components/NotFound'
import RegisterProvider from './context/RegisterProvider'

// Replace your code here
const App = () => (
  <RegisterProvider>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route component={NotFound} />
    </Switch>
  </RegisterProvider>
)

export default App
