import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Notification from './Notification/Notification';
import fetchImages from './services/searchAPI';

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
    showModal: false,
    largeImgUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    const prevSearch = prevState.search;
    const nextSearch = this.state.search;

    if (prevPage !== nextPage || prevSearch !== nextSearch) {
      this.setState({ loading: true });
      fetchImages(this.state.search, this.state.page)
        .then(data => {
          if (data.total === 0) {
            return Promise.reject(new Error());
          }
          this.setState(({ images }) => {
            return {
              images: images.concat(data),
            };
          });
        })
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  onSearchSubmit = search => {
    this.setState(prevState => {
      return {
        images: [],
        search,
        page: 1,
        error: null,
      };
    });
  };
  onLoadMoreBtnClick = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  handleImg = largeUrl => {
    this.setState({ largeImgUrl: largeUrl });
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { loading, error, showModal, images, largeImgUrl } = this.state;
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSearchSubmit} />

        {error && <Notification />}

        {images.length > 0 && (
          <>
            <ImageGallery images={this.state.images} onClick={this.handleImg} />
            <Button onClick={this.onLoadMoreBtnClick} />
          </>
        )}
        {loading && <Loader />}
        {showModal && <Modal onClose={this.toggleModal} src={largeImgUrl} />}
      </div>
    );
  }
}