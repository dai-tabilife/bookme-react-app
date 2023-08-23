  export interface StoreType {
    exploreGroupHotel: Array<exploreGroupHotelType>,
    exploreHotel: Array<exploreHotelType>
    setExplorHotel: React.Dispatch<React.SetStateAction<exploreHotelType[]>>
  }

  export interface exploreGroupHotelType {
    city: string;
    count: number;
    city_image:string;
    list:Array<exploreHotelType>;
  }
  export interface exploreHotelType {
    property_name: string;
    property_city: string;
    property_price:string;
    spot_hotel_id:string;
    property_image :string;
  }

  