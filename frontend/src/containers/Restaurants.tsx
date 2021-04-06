import React, { FC, useEffect } from 'react';
import { fetchRestaurants } from '../apis/restaurants';

export const Restaurants: FC = () => {
  useEffect(() => {
    fetchRestaurants().then((data) => console.log(data))
  }, []);

  return (
    <>
      レストラン一覧
    </>
  )
}