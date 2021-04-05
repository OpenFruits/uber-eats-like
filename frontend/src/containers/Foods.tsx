import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

type Props = {} & RouteComponentProps<{ restaurantsId: string }>;

export const Foods: FC<Props> = (props) => {
  return (
    <>
      フード一覧
      <p>
        restaurantsIdは {props.match.params.restaurantsId} です
      </p>
    </>
  )
}