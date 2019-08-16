import React from 'react'
import Nav from './Nav'
import HomeScreen from './HomeScreen'
import GalleryScreen from './GalleryScreen'
import JoinScreen from './JoinScreen'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {

  render() {

    return (
      <div className='App'>
        <Router>
          <Nav />
          <Switch>
            <Route path='/gallery' component={GalleryScreen}/>
            <Route path='/join' component={JoinScreen}/>
            <Route component={HomeScreen}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App