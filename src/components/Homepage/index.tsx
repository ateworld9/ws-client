import React, { useContext } from 'react';
import { IUser } from 'types';
import { myContext } from '../../Context';

const Homepage = () => {
  const context = useContext(myContext) as IUser;
  return (
    <>
      {context ? (
        <h1>Welcome back {context.name}</h1>
      ) : (
        <h1>Welcome To ateworld9 Web Site </h1>
      )}
    </>
  );
  //  <div>Welcome To ateworld9 Web Site </div>;
};

export { Homepage };
