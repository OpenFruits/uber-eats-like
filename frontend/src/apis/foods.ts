import axios from 'axios';
import { foodsIndex } from '../urls/index';

export const fetchFoods = (restaurantId: string) => {
  return axios.get(foodsIndex(restaurantId))
  .then(res => {
    return res.data
  })
  .catch((e) => console.log(e))
}