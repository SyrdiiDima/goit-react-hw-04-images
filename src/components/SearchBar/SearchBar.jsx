import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import css from './SearchBar.module.css';

class SearchBar extends Component {
  state = {
    search: '',
  };
  onChangeInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  onSubmintForm = e => {
    e.preventDefault();
    
    if (this.state.search.trim() === '') {
      alert('Еnter a value');
      return;
    }
    this.props.onSubmit(this.state.search);
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.onSubmintForm} className={css.SearchForm}>
          <button type="submit" className={css.SearchForm_button}>
            <ImSearch></ImSearch>
          </button>

          <input
            className={css.SearchForm_input}
            value={this.state.search}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChangeInput}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;