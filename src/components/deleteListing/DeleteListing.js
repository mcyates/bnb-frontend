import React from 'react';
import {Mutation} from 'react-apollo';
import {DELETELISTING} from '../../mutations/DeleteListing';
import { navigate } from '@reach/router/lib/history';


export const DeleteListing = (props) => {
  return (

    <Mutation mutation={DELETELISTING} onCompleted={(e) => {
      console.log(e);
    }}
  >
    {(deleteListing, {loading, error}) => (
      <button onMouseUp={() => {
        deleteListing({
          variables: {
            id: props.id
          }
        })
      navigate("/dashboard")
      }}>Delete</button>
      )}
      </Mutation>
      )
}

export default DeleteListing
