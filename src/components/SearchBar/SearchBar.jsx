import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const onChangeInput = event => {
    //   const { name, value } = event.currentTarget;
    // this.setState({ [name]: value });

    setSearch(event.currentTarget.value);
  };

  //

  const onSubmitForm = e => {
    e.preventDefault();

    if (search.trim() === '') {
      alert('Еnter a value');
      return;
    }
    onSubmit(search);
  };

  return (
    <header className={css.Searchbar}>
      <form onSubmit={onSubmitForm} className={css.SearchForm}>
        <button type="submit" className={css.SearchForm_button}>
          <ImSearch></ImSearch>
        </button>

        <input
          className={css.SearchForm_input}
          value={search}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChangeInput}
        />
      </form>
    </header>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// class SearchBar extends Component {
//   state = {
//     search: '',
//   };
//   onChangeInput = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };
//   onSubminForm = e => {
//     e.preventDefault();

//     if (this.state.search.trim() === '') {
//       alert('Еnter a value');
//       return;
//     }
//     this.props.onSubmit(this.state.search);
//   };

//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   render() {
//     return (
//       <header className={css.Searchbar}>
//         <form onSubmit={this.onSubminForm} className={css.SearchForm}>
//           <button type="submit" className={css.SearchForm_button}>
//             <ImSearch></ImSearch>
//           </button>

//           <input
//             className={css.SearchForm_input}
//             value={this.state.search}
//             type="text"
//             name="search"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.onChangeInput}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default SearchBar;
