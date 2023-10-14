import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39170790-720d13338eae2dc65ab148b0f';
const params = new URLSearchParams({
    key: API_KEY,
    // q: 'cat',
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 12,
    page: 1
});

export const fetchImages = async () => {
    const response = await axios.get(`${BASE_URL}?${params}`);
    return response.data
}