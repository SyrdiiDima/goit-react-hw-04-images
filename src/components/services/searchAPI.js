const fetchImages = (search, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=27797603-9eac1d55668e8ab1d57dfd4bf&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(r => r.json())
    .then(data => {
      const images = data.hits.map(image => {
        const img = {
          id: image.id,
          largeImageURL: image.largeImageURL,
          webformatURL: image.webformatURL,
        };
        return img;
      });
      return images;
    });
};

export default fetchImages;
