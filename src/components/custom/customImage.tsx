import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

interface CustomImageProps {
  url: string;
  className?: string;
}

export const CustomImage: React.FC<CustomImageProps> = ({ url, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  useEffect(() => {
    setImageLoaded(false);
  }, [url]);
  return (
    <>
      {" "}
      {!imageLoaded && (
        <div className={`${className}`}>
          <Skeleton
           className={`${className}`}
            sx={{ animationDuration: "0.5s" }}
            style={{ transform: "scale(1, 1)", height: "100%", width: "100%" }}
          />
        </div>
      )}
      <img
        className={`${className}`}
        style={{ display: !imageLoaded ? 'none' : 'block' }}
        src={url}
        alt=""
        onLoad={handleImageLoad}
      />
    </>
  );
};
