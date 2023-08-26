import axios from 'axios';

const baseURL = `https://gateway.marvel.com/v1/public/characters`;

export const client = axios.create({
  baseURL,
});