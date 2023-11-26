import React, { useContext, useState } from "react"
import axios from 'axios'

//axios to connect to server
const BASE_URL = "http://localhost:5000/api/";


const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {

    const [friends, setFriends] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    const getFriends = async () => {
        try {
            const response = await axios.get(`${BASE_URL}`);
            setFriends(response.data);
            console.log("Fetched friends data:", response.data);
        } catch (error) {
            console.error("Error fetching friends:", error);
            setFriends([]);
        }
    };



    return (
        <GlobalContext.Provider value={{
            getFriends

        }}>            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}