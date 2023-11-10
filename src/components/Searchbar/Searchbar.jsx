import { Component } from 'react';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onCLick(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <header className="searchbar">
        <form className="form" onClick={this.handleSubmit}>
          <button type="button" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input-item"
            type="text"
            autoComplete="off"
            autoFocus
            value={query}
            onChange={this.handleChange}
            title='keyword'
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
