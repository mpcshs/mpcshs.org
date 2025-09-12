import { Navigate } from 'react-router';

const Join = () => {
  return <Navigate to="/?showJoinDialog=true" replace />;
};

export default Join;
