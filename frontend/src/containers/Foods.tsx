import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { fetchFoods } from '../apis/foods';

type Props = {} & RouteComponentProps<{ restaurantsId: string }>;

export const Foods: FC<Props> = (props) => {
  useEffect(() => {
    fetchFoods(props.match.params.restaurantsId).then((data) => console.log(data));
  })
  return (
    <>
      フード一覧
      <p>
        restaurantsIdは {props.match.params.restaurantsId} です
      </p>
    </>
  )
}