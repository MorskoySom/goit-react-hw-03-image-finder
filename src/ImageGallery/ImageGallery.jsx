import { GalleryView } from './ImageGallery.styled'
import { ImageGalleryItem } from 'ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({ images }) => {
    return (
        <GalleryView>Gallery{images.map(image => (
            <li key={image.id}>
                <ImageGalleryItem info={image} />
            </li>
        ))}
        </GalleryView>)
}


// render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     return (
//         <div>
//             <h1>Phonebook</h1>
//             <ContactForm toAdd={this.addContact} />
//             <h2>Contacts</h2>
//             <Filter filterName={filter} toSearch={this.changeFilter} />
//             <ContactList persons={visibleContacts} toDelete={this.deleteContactElement} />
//         </div>
//     )
// }