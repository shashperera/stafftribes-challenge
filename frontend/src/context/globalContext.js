import React, { useContext, useState } from "react";
import axios from 'axios';

// Axios to connect to the server
const BASE_URL = "https://stafftribes-backend.onrender.com/api";
// const BASE_URL = "http://localhost:5000/api/";


// Creating a context for global state
const GlobalContext = React.createContext();

// Global Provider component
export const GlobalProvider = ({ children }) => {
  // State to store friends data
  const [friends, setFriends] = useState([]);
  const [justForFunFriends, setJustForFunFriends] = useState([]); 
  const [moreSeriousFriends, setMoreSeriousFriends] = useState([]);
  const [user, setUser] = useState([]);
  const [filteredFriends, setFilteredFriends] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState('JustForFun');
  const [selectedWeek, setSelectedWeek] = useState(null);
  
  // Function to fetch friends data from the server
  const getFriends = async () => {
    try {
      const response = await axios.get(`${BASE_URL}friends`);
      setFriends(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching friends:', error);
    }
  };

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

  // Get friends for fun filtered out
  const getJustForFunFriends = async () => {
    try {
      const response = await axios.get(`${BASE_URL}justForFun`);
      setJustForFunFriends(response.data);
    } catch (error) {
      console.error('Error fetching just for fun friends:', error);
      return [];
    }
  };

  // Get more serious friends filtered out
  const getMoreSeriousFriends = async () => {
    try {
      const response = await axios.get(`${BASE_URL}moreSerious`);
      setMoreSeriousFriends(response.data);
    } catch (error) {
      console.error('Error fetching more serious friends:', error);
      return [];
    }
  };

  // Function to handle checkbox change
  const handleCheckboxChange = async (weekNumber) => {
    try {
      const week = weekNumber + 1; // Assuming week numbers start from 1
      const isDisabled = user.availability.includes(week);
      return isDisabled;
    } catch (error) {
      console.error('Error updating user availability:', error);
    }
  };

  // Function to find filtered friends by week
  const filterFriendsByWeek = async (week) => {
    try {
      const response = await axios.get(`${BASE_URL}findCommonAvailabilityForWeek`, {
        params: { week },
      });
      setFilteredFriends (response.data);
      return response.data;
    } catch (error) {
      console.error('Error finding filtered friends by week:', error);
      return [];
    }
  };

  const updateSelectedCategory = async (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    setSelectedWeek(null); // Reset selected week when changing the category

    if (selectedCategory === 'JustForFun') {
      await getJustForFunFriends();
    } else if (selectedCategory === 'MoreSerious') {
      await getMoreSeriousFriends();
    }
  };

  const updateSelectedWeek = async (week) => {
    setSelectedWeek(week);
    await filterFriendsByWeek(week);
  };

  // Providing the state and functions through the context
  return (
    <GlobalContext.Provider value={{ 
      friends,
      getFriends,
      justForFunFriends,
      moreSeriousFriends,
      user,
      handleCheckboxChange,
      getMoreSeriousFriends,
      getJustForFunFriends,
      findCommonAvailability,
      filterFriendsByWeek, 
      selectedCategory,
      setSelectedWeek,
      updateSelectedCategory,
      updateSelectedWeek
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to access the global context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
