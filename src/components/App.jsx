import React, { Component } from 'react';
import { fetchApi } from 'assets/fetchApi';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    query: null,
    status: 'idle',
    error: null,
    dataLength: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ status: 'pending' });

      fetchApi(this.state.query, this.state.page).then(data => {
        this.setState({
          images: data.hits,
          status: 'resolved',
          dataLength: data.totalHits,
        });
      });
    }
  }

  onSubmitHandler = data => {
    this.setState({ query: data });
  };

  onLoadMore = () => {
    console.log(this.state.page);
    this.setState(prevState => ({
      status: 'pending',
      page: prevState.page + 1,
    }));

    fetchApi(this.state.query, this.state.page).then(data => {
      this.setState({
        images: [...this.state.images, ...data.hits],
        status: 'resolved',
      });
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmitHandler}></Searchbar>
        {this.state.status === 'pending' && <Loader></Loader>}
        <ImageGallery
          images={this.state.images}
          query={this.state.searchQuery}
        ></ImageGallery>
        {this.state.images && this.state.dataLength >= 12 && (
          <Button onClick={this.onLoadMore} />
        )}
      </div>
    );
  }
}
