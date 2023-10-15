import { fetchImages } from './api';
import { Btn } from "Button/Button";
import { ImageGallery } from "ImageGallery/ImageGallery";
import { Loader } from "Loader/Loader";
import { Searchbar } from "Searchbar/Searchbar";
import { Component } from "react";

export class App extends Component {
  state = {
    query: 'cat',
    page: 1,
    galleryItems: [],
    loading: false,
    loadMore: false,
    error: false,
  }

  getImages = async () => {
    const { query, page } = this.state;

    this.setState({ loading: true });

    try {
      const pictures = await fetchImages(query, page);
      this.setState({ galleryItems: pictures.hits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false })
    }
  }

  componentDidMount() {
    this.getImages();
  }

  handleSubmit = (query) => {
    this.setState({
      query: query,
      page: 1,
      galleryItems: [],
    });
  }

  handleLoadMore = () => {
    this.setState(prevState => prevState.page + 1);
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
  }

  render() {
    const { galleryItems, loading, query } = this.state;
    return <div>
      <Searchbar toSubmit={this.handleSubmit} />
      {this.state.galleryItems.length > 0 && <ImageGallery images={galleryItems} />}
      <Btn onClick={this.handleLoadMore} />
      {loading && <Loader />}
    </div>;
  }
}
