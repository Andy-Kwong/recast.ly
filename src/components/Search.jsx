class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChange(obj) {
    console.log('this', this);
    this.setState({text: obj.target.value});
    console.log('from search handleChange', obj.target.value);
  }

  handleSubmit() {
    // invoke props.search(text) passed in from parent
    console.log('from search handleSubmit', this.state.text);
    //_.debounce(() => { this.props.search(this.state.text); }, 1000);
    this.props.search(this.state.text);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleSubmit.bind(this)} className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
