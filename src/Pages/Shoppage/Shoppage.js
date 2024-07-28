import React, { useEffect, useState } from 'react';
import {auth} from '../../Components/Firebase'; // Adjust the path as necessary
import Navibar from './Navbar/Navibar';

const Shoppage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  if (user) {
    return (
      <div>
        <Navibar />
        {/* Your shop page content */}
      </div>
    );
  } else {
    return <div>User isn't authenticated</div>;
  }
};

export default Shoppage;