import { css } from '../../';
import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onInputChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const { onSubmit } = this.props;

    return (
      <header className="Searchbar">
        <form onSubmit={this.onFormSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            value={this.state.inputValue}
            onChange={this.onInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
