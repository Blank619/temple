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
          <Route path='/home' component={Home} />
          <Route path='/oldphotos' component={LightboxPage} />
          <Route path='/templephotos' component={TemplePhotos} />
          <Route path='/trusties' component={Trusties} />
   
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
