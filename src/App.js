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
          <Route
            path='https://blank619.github.io/temple/'
            component={Trusties}
          />
          <Route
            path='https://blank619.github.io/oldphotos'
            component={LightboxPage}
          />
          <Route
            path='https://blank619.github.io/templephotos'
            component={TemplePhotos}
          />
          <Route
            path='https://blank619.github.io/trusties'
            component={Trusties}
          />
          <Redirect to='https://blank619.github.io/temple/' />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
