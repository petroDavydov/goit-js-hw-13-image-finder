const BASE_URL = "https://pixabay.com/api";
const API_KEY = "22948593-eb3728724c643cf2948c736ef";

export default class ImageApiService {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
  }

  async fetchImage() {
    const responseUrl = await fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=22948593-eb3728724c643cf2948c736ef`
    );

    const { hits: images } = await responseUrl.json();
    this.incrementPage();

    return images;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
