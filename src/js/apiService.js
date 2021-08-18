import "./pnotify";

export default class NewApiService {
  constructor() {
    this.BASE_URL = "https://pixabay.com/api/";
    this.MY_API_KEY = "22948593-eb3728724c643cf2948c736ef";
    this.searchQuery = "";
    this.page = 1;
    this.no_more_response = false;
  }
  getRequest() {
    return `${this.BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${MY_API_KEY}
	`;
  }

  async fetchGallery() {
    try {
      const response = await fetch(this.getRequest());
      const images = await response.json();
      const array = await images.hits;
      successWatch();
      return this.makeValidationArray(array);
    } catch {
      errorWrong();
    }
  }

  setSearchQuery(value) {
    this.searchQuery = value;
  }

  makeValidationArray(array) {
    if (array.length === 0 && this.page === 1) {
      alertNothingFind();
      this.no_more_response = true;
    }

    if (array.length === 0 && this.page > 1) {
      infoSymbol();
      this.no_more_response = true;
    }
    this.incrementPage();
    return array;
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
