import React, { useContext, useState } from "react";
import axios from 'axios';

// Axios to connect to the server
const BASE_URL = "http://localhost:5000/api/";

// Creating a context for global state
const GlobalContext = React.createContext();

// Global Provider component
export const GlobalProvider = ({ children }) => {
  // State to store friends data
  const [friends, setFriends] = useState([]);
  const [justForFunFriends, setJustForFunFriends] = useState([]); 
  const [moreSeriousFriends, setMoreSeriousFriends] = useState([]);
  

  // Function to fetch friends data from the server
  const getFriends = async () => {
    const response = await axios.get(`${BASE_URL}friends`)
    setFriends(response.data)
    console.log(response.data)
}

  // Function to fetch friends filtered on availability
  const findCommonAvailability = async (friendIds) => {
    try {
      const response = await axios.get(`${BASE_URL}findCommonAvailability`, {
        params: { friends: friendIds.join(',') },
      });
      return response.data.commonAvailability;
    } catch (error) {
      console.error('Error finding common availability:', error);
      return [];
    }
  };

  //Get friends for fun filtered out
  const getJustForFunFriends = async () => {
    try {
      const response = await axios.get(`${BASE_URL}justForFun`);
      setJustForFunFriends(response.data);
    } catch (error) {
      console.error('Error fetching just for fun friends:', error);
      return [];
    }
  };

  //Get more serious friends filtered out
  const getMoreSeriousFriends = async () => {
    try {
      const response = await axios.get(`${BASE_URL}moreSerious`);
      setMoreSeriousFriends(response.data);
    } catch (error) {
      console.error('Error fetching more serious friends:', error);
      return [];
    }
  };

  // Function to get friends by availability and week
  // const getFriendsByAvailability = async (availability, week) => {
  //   try {
  //     const response = await axios.get(`${BASE_URL}${availability}`, {
  //       params: { week },
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.error(`Error fetching ${availability} friends:`, error);
  //     return [];
  //   }
  // };

  // const filterFriends = async (availability, week, setFilteredFriends) => {
  //   try {
  //     const response = await axios.get(`/api/${availability}?week=${week}`);
  //     setFilteredFriends(response.data);
  //   } catch (error) {
  //     console.error('Error fetching friends:', error);
  //     setFilteredFriends([]);
  //   }
  // };

  


  // Providing the state and functions through the context
  return (
    <GlobalContext.Provider value={{ 
      friends,
      getFriends,
      justForFunFriends,
      moreSeriousFriends,

      getMoreSeriousFriends,
      getJustForFunFriends,

    }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to access the global context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
