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
    error: false,
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    // зберігаємо query - параметр пошуку
    // скидаємо page до 1
    // очистити масив galleryItems
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
    return <div>
      <Searchbar />
      {this.state.galleryItems.length > 0 && <ImageGallery images={this.galleryItems} />}
      <ImageGallery />
      <Btn onClick={this.handleLoadMore} />
      {this.state.loading && <Loader />}
    </div>;

  }
}

// import React from "react";
// import { Contact } from "Element/Element";

// export const ContactList = ({ persons, toDelete }) => {
//   return (
//     <ul>{persons.map(person => (
//       <li key={person.id}>
//         <Contact info={person} toDelete={toDelete} />
//       </li>
//     ))}
//     </ul>)
// }