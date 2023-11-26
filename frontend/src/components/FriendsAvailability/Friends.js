import React, { useEffect } from 'react';

import { useGlobalContext } from '../../context/globalContext';

function Friends() {
  const { friends = [], getFriends } = useGlobalContext();

  useEffect(() => {
      console.log("Context value:", { friends, getFriends });
      if (!friends.length) {
          // If friends is not defined or is an empty array, fetch data
          getFriends();
      }
  }, []);

  console.log("Friends from context:", friends);
  return (
    <div>
      <h1>Friends</h1>
      <div className="income-content">
        <div className="form-container">
          {/* Include your Form component here */}
        </div>

      </div>
    </div>
  );
}

export default Friends;
