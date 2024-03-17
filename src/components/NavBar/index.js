// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore} = this.props
    return (
      <div className="navbar">
        <div className="score-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="nav-text">Emoji Game</h1>
        </div>
        <div className="score-con">
          <p className="nav-text">Score: {score}</p>
          <p className="nav-text">Top Score: {topScore}</p>
        </div>
      </div>
    )
  }
}
export default NavBar
