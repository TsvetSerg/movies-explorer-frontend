import React  from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({Component, ...props}) => {
  return (
    <Route>
      {
        () => { return (props.authorize ? Component : <Redirect to="/" />)}
      }
    </Route>
  )
}

export default ProtectedRoute;
