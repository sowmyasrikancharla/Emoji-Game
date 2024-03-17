// Write your code here.
import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  render() {
    const {score, result, imgUrl, playAgain, text} = this.props

    const onClickPlayAgain = () => {
      playAgain()
    }

    return (
      <div className="total">
        <div className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="nav-text">Emoji Game</h1>
        </div>
        <div className="win-lose-con">
          <div>
            <h1 className="result-styling">{result}</h1>
            <p className="result-styling">{text}</p>
            <p className="score-styling">{score}/12</p>
            <button className="play-again-btn" onClick={onClickPlayAgain}>
              Play Again
            </button>
          </div>
          <div>
            <img src={imgUrl} alt="win or lose" />
          </div>
        </div>
      </div>
    )
  }
}
export default WinOrLoseCard
