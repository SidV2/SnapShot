import axios from "axios";
import { apiKey } from "../api/config";
import { store } from "../store/store";
import { setImages, setLoading } from "../store/photos/photos.actions";

export const runSearch = query => {
  store.dispatch(setLoading(true));
  axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => {
      console.log(response);
      store.dispatch(setImages(response.data.photos.photo));
      store.dispatch(setLoading(false));
    })
    .catch(error => {
      store.dispatch(setLoading(false));
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
    });
};
