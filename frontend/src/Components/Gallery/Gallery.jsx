import React, { useEffect, useState } from "react";
import "./Gallery.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos?per_page=${30}&client_id=zyiLvHbCUXttSghuUSTntnXuaLAr6-RFqqo_kqJAU0c`
        );
        const data = await response.json();
        const imageItems = data.map((item) => ({
          original: item.urls.full,
          thumbnail: item.urls.thumb,
          originalClass: "img01",
          thumbnailClass: "img02",
        }));
        setImages(imageItems);
        setLoading(false); // Set loading to false after images are fetched
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="mt-40 container mx-auto -z-[1000]">
      {loading ? ( // Display loading indicator while images are being fetched
        <p className="text-center font-medium text-lg">Loading...</p>
      ) : (
        <div className="gallery-wrappr w-[70%] mx-auto ">
          <ImageGallery
            items={images}
            showPlayButton={false}
            thumbnailPosition="left"
            autoPlay={true}
            showNav={false}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
