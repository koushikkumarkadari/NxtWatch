<<<<<<< HEAD
import styledComponents from './styledComponents'

const SavedVideos = () => <p>SavedVideos</p>
=======
import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'

class SavedVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {savedVids} = value
          return (
            <ul>
              {savedVids.map(item => (
                <li key={item.id}>
                  <img src={item.thumbnailUrl} />
                  <p>{item.title}</p>
                  <p>{item.channel.name}</p>
                  <img src={item.channel.profileImageUrl} />
                  <p>{item.viewCount}</p>
                  <p>{item.publishedAt}</p>
                </li>
              ))}
            </ul>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
>>>>>>> dbbff48f9a46f0718baddf86e91655854e800075

export default SavedVideos
