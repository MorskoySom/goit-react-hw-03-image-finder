import { fetchImages } from './api';
import { Btn } from "Button/Button";
import { ImageGallery } from "ImageGallery/ImageGallery";
import { Loader } from "Loader/Loader";
import { Searchbar } from "Searchbar/Searchbar";
import { Component } from "react";

export class App extends Component {
  state = {
    query: "",
    page: 1,
    galleryItems: [],
    loading: false,
    loadMore: false,
    error: false,
  }

  async componentDidMount() {

    this.setState({ loading: true });

    try {
      const pictures = await fetchImages();
      this.setState({ galleryItems: pictures.hits });
      console.log(pictures);
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false })
    }
  }

  handleSubmit = (query) => {
    this.setState({
      query: query,
      page: 1,
      galleryItems: [],
    }, this.fetchImages);
  }


  handleLoadMore = () => {
    this.setState(prevState => prevState.page + 1);
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      // HTTP-запит
    }
  }

  render() {
    const { galleryItems, loading } = this.state;
    return <div>
      <Searchbar toSubmit={this.handleSubmit} />
      {this.state.galleryItems.length > 0 && <ImageGallery images={galleryItems} />}
      <ImageGallery images={galleryItems} />
      <Btn onClick={this.handleLoadMore} />
      {loading && <Loader />}
    </div>;

  }
}
