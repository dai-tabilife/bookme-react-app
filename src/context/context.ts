import { createContext } from 'react';
import { StoreType } from '../interface/interface';

const MyContext = createContext<StoreType> ( {
    exploreGroupHotel:[],
    exploreHotel:[],
    setExplorHotel:()=>{}
  });

export default MyContext