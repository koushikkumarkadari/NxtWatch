import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import Gaming from './components/Gaming'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import ThemeContext from './context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

class App extends Component {
  state = {lightTheme: true}

  changeActiveTheme = () => {
    this.setState(prevState => ({activeTheme: !prevState.activeTheme}))
  }

  render() {
    const {lightTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{lightTheme, changeActiveTheme: this.changeActiveTheme}}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
