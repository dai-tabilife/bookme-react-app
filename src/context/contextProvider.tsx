import React, { useState, ReactNode, useEffect } from "react";
import MyContext from "./context";
import {
  StoreType,
  exploreGroupHotelType,
  exploreHotelType,
} from "../interface/interface";
import { api } from "./../api/axios";
interface MyContextProviderProps {
  children: ReactNode;
}
const ContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [exploreGroupHotel, setExplorGroupHotel] = useState<
    Array<exploreGroupHotelType>
  >([]);
  const [exploreHotel, setExplorHotel] = useState<Array<exploreHotelType>>([]);

  const contextValue: StoreType = {
    exploreGroupHotel,
    exploreHotel,
    setExplorHotel,
  };

  useEffect(() => {
    api
      .get("property/getHotelList?property_groupid=pgroupid1")
      .then((response) => {
        setExplorGroupHotel(response.data.result)
        response.data.result[0]['list']&& setExplorHotel(response.data.result[0]['list'])
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  
  }, []);

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default ContextProvider;
