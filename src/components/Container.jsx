import React, { useContext, useEffect } from "react";
import Gallery from "./Gallery";
import Loader from "./Loader";
import { runSearch } from '../service/PhotoService';

const Container = ({ searchTerm }) => {

  //const { images, loading, runSearch } = useContext(PhotoContext);

  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div className="photo-container">
      {/* {loading ? <Loader /> : <Gallery data={images} />} */}
    </div>
  );
};

export default Container;
