// Write your code here.
import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  render() {
    const {emojiDetails, clickEmoji} = this.props
    const {emojiName, emojiUrl, id} = emojiDetails

    const onClickEmoji = () => {
      clickEmoji(id)
    }

    return (
      <li className="eachCard">
        <button className="btn-set">
          <img src={emojiUrl} alt={emojiName} onClick={onClickEmoji} />
        </button>
      </li>
    )
  }
}

export default EmojiCard
