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

  // Function to fetch friends data from the server
  const getFriends = async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      setFriends(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching friends:", error);
      return [];
    }
  };

  // Providing the state and functions through the context
  return (
    <GlobalContext.Provider value={{ friends, getFriends }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to access the global context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
