
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYoutube from '../lib/searchYoutube.js';
import Search from './Search.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0], //changed from exampleVideoData[0] to null
      data: [],
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><em>search</em> <Search search={this.search.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <em>videoPlayer</em>
              <VideoPlayer video={this.state.currentVideo} />
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <em>videoList</em>
              <VideoList videos={this.state.data} func={this.handleClick.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // make a query to YouTube API
    this.search();
  }

  search(query) {
    console.log(query);
    query = query || 'cats';

    var options = {
      key: YOUTUBE_API_KEY,
      q: query,
      part: 'snippet',
      maxResults: 5,
      type: 'video',
      videoEmbeddable: true
    };

    var updateState = (data) => {
      this.setState({
        data: data,
        currentVideo: data[0]
      });
    };

    searchYoutube(options, updateState);
  }

  // Method handleClick()
  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
