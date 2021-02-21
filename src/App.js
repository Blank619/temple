import './App.css'
import Home from './components/home'
import Navbarr from './components/navbar'
import Footer from './components/footer'
import LightboxPage from './components/oldPhotos'
import TemplePhotos from './components/templephotos'
import Trusties from './components/trusties'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Navbarr />

      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/oldphotos' component={LightboxPage} />
          <Route exact path='/templephotos' component={TemplePhotos} />
          <Route exact path='/trusties' component={Trusties} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
