import { GalleryItem, Image } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ image }) => {
    return (<GalleryItem>
        <Image src={image.webformatURL} alt={image.tags} />
    </GalleryItem>)
}
