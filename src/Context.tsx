import React, { createContext, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const myContext = createContext({});

const Context = ({ children }: any) => {
  const [userObject, setUserObject] = useState<any>();

  useEffect(() => {
    axios
      .get('http://localhost:3001/getuser', { withCredentials: true })
      .then((res: AxiosResponse) => {
        if (res.data) {
          setUserObject(res.data);
        }
      });
  }, []);
  return <myContext.Provider value={userObject}>{children}</myContext.Provider>;
};

export { Context, myContext };
