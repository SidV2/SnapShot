import React, { useContext, useEffect } from "react";
import Gallery from "./Gallery";
import Loader from "./Loader";
import { runSearch } from '../service/PhotoService';
import { useSelector } from "react-redux";
import { getIsLoading, getImages } from "../store/photos/photos.selectors";

const Container = ({ searchTerm }) => {

  const loading = useSelector(getIsLoading);
  const images = useSelector(getImages);

  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div className="photo-container">
      { loading ? <Loader /> : <Gallery data={images} />} 
    </div>
  );
};

export default Container;
