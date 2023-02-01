import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return (
      <>
        {' '}
        <ul className="ImageGallery">
          {this.props.images &&
            this.props.images.map(
              ({ id, webformatURL, largeImageURL, tags }) => {
                return (
                  <ImageGalleryItem
                    key={id}
                    img={webformatURL}
                    largeImg={largeImageURL}
                    tags={tags}
                  />
                );
              }
            )}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
