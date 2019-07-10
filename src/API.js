const API_URL = 'https://api.unsplash.com/search/photos?client_id=11f2ff5a50fcce4df43aa4c897d132d3f5ad4a84ed0aec7be67718deb5120192';

export default {
  search(searchTerm) {
    const url = `${API_URL}&query=${searchTerm}`;  
    
    return fetch(url)
      .then(response => response.json())
      .then(result => {
        return result.results;
      });
  }
}