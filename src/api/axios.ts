import axios from 'axios';


export const api = axios.create({
  baseURL: 'https://asia-northeast1-bookme-stag.cloudfunctions.net/',
});
