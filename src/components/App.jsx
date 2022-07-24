import { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Notification from './Notification/Notification';
import fetchImages from './services/searchAPI';

export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImgUrl, setlargeImgUrl] = useState('');

  //
  useEffect(() => {
    if (search === '') return;
    setLoading(true);
    fetchImages(search, page)
      .then(data => {
        if (data.total === 0) {
          return Promise.reject(new Error());
        }
        setImages(state => state.concat(data));
      })
      .catch(error => setError(state => !state))
      .finally(() => {
        setLoading(false);
      });
  }, [page, search]);
  //
  const onSearchSubmit = search => {
    setImages([]);
    setSearch(search);
    setPage(1);
    setError(false);
  };

  //

  const onLoadMoreBtnClick = () => {
    setPage(state => state + 1);
  };

  //

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  //
  const handleImg = largeUrl => {
    setlargeImgUrl(largeUrl);
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={onSearchSubmit} />

      {error && <Notification />}

      {images.length > 0 && (
        <>
          <ImageGallery images={images} onClick={handleImg} />
          <Button onClick={onLoadMoreBtnClick} />
        </>
      )}
      {loading && <Loader />}
      {showModal && <Modal onClose={toggleModal} src={largeImgUrl} />}
    </div>
  );
};

//

// ///
// export class App extends Component {
//   state = {
//     search: '',
//     images: [],
//     page: 1,
//     loading: false,
//     error: null,
//     showModal: false,
//     largeImgUrl: '',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevPage = prevState.page;
//     const nextPage = this.state.page;
//     const prevSearch = prevState.search;
//     const nextSearch = this.state.search;

//     if (prevPage !== nextPage || prevSearch !== nextSearch) {
//       this.setState({ loading: true });
//       fetchImages(this.state.search, this.state.page)
//         .then(data => {
//           if (data.total === 0) {
//             return Promise.reject(new Error());
//           }
//           this.setState(({ images }) => {
//             return {
//               images: images.concat(data),
//             };
//           });
//         })
//         .catch(error => this.setState({ error }))
//         .finally(() => {
//           this.setState({ loading: false });
//         });
//     }
//   }

//   onSearchSubmit = search => {
//     this.setState(prevState => {
//       return {
//         images: [],
//         search,
//         page: 1,
//         error: null,
//       };
//     });
//   };
//   onLoadMoreBtnClick = () => {
//     this.setState(prevState => {
//       return {
//         page: prevState.page + 1,
//       };
//     });
//   };
//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };
//   handleImg = largeUrl => {
//     this.setState({ largeImgUrl: largeUrl });
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { loading, error, showModal, images, largeImgUrl } = this.state;
//     return (
//       <div className="App">
//         <SearchBar onSubmit={this.onSearchSubmit} />

//         {error && <Notification />}

//         {images.length > 0 && (
//           <>
//             <ImageGallery images={this.state.images} onClick={this.handleImg} />
//             <Button onClick={this.onLoadMoreBtnClick} />
//           </>
//         )}
//         {loading && <Loader />}
//         {showModal && <Modal onClose={this.toggleModal} src={largeImgUrl} />}
//       </div>
//     );
//   }
// }
