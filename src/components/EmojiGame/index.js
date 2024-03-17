import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
class EmojiGame extends Component {
  state = {clickedEmojis: [], score: 0, topScore: 0, isPlaying: 'true'}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  playAgain = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState(prevState => ({
        topScore: prevState.score,
        isPlaying: 'true',
        score: 0,
        clickedEmojis: [],
      }))
    } else {
      this.setState({isPlaying: 'true', score: 0, clickedEmojis: []})
    }
  }

  display = () => {
    const {clickedEmojis, topScore, score, isPlaying} = this.state
    const {emojisList} = this.props
    if (isPlaying === 'true') {
      console.log('hello')
      return (
        <div>
          <NavBar score={score} topScore={topScore} />
          <ul className="emoji-game-con">
            {emojisList.map(eachEmoji => (
              <EmojiCard
                emojiDetails={eachEmoji}
                key={eachEmoji.id}
                clickEmoji={this.clickEmoji}
              />
            ))}
          </ul>
        </div>
      )
    }
    if (isPlaying === 'false' && score < 12) {
      return (
        <div className="set-layout-result">
          <WinOrLoseCard
            score={score}
            imgUrl="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            result="You Lose"
            playAgain={this.playAgain}
            text="Score"
          />
        </div>
      )
    }
    if (isPlaying === 'win') {
      return (
        <div className="set-layout-result">
          <WinOrLoseCard
            score={score}
            imgUrl="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            result="You Won"
            playAgain={this.playAgain}
            text="Best Score"
          />
        </div>
      )
    }
    return 0
  }

  updateScore = id => {
    const {clickedEmojis, topScore, score} = this.state
    console.log(id)
    if (!clickedEmojis.includes(id)) {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    }
    if (!clickedEmojis.includes(id) && score === 11) {
      this.setState(prevState => ({
        isPlaying: 'win',
      }))
    } else if (clickedEmojis.includes(id)) {
      this.setState({isPlaying: 'false'})
    }
    return <p>hello</p>
  }

  clickEmoji = id => {
    this.updateScore(id)
    this.setState(prevState => ({
      clickedEmojis: [...prevState.clickedEmojis, id],
      emojisList: this.shuffledEmojisList(),
    }))
  }

  render() {
    const {emojisList} = this.props
    const {clickedEmojis, score, topScore, isPlaying} = this.state
    console.log(score)
    return <div>{this.display()}</div>
  }
}
export default EmojiGame
