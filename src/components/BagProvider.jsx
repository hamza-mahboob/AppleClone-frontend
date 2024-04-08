import React, { createContext, useContext, useState, useEffect } from "react";

const BagContext = createContext();

export const BagProvider = ({ children }) => {
    const [bagItems, setBagItems] = useState([]);
    const [userID, setUserID] = useState([]);
    const [token, setToken] = useState("");

    useEffect(() => {
        // console.log("Loading items from localStorage");
        const storedItems = JSON.parse(localStorage.getItem("bagItems"));
        if (storedItems) {
            // console.log("Loaded items:", storedItems);
            setBagItems(storedItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("bagItems", JSON.stringify(bagItems));
    }, [bagItems]);

    const addToBag = (item) => {
        setBagItems([...bagItems, item]);
    };

    const clearBag = () => {
        setBagItems([]);
    };
    const setUserId = (user) => {
        setUserID(user);
        localStorage.setItem("UserId", JSON.stringify(userID));
    };
    const setUserToken = (token) => {
        setToken(token);
        localStorage.setItem("token", JSON.stringify(token));
    };

    return <BagContext.Provider value={{ bagItems, addToBag, clearBag, userID, setUserId, setUserToken }}>{children}</BagContext.Provider>;
};

export const useBag = () => useContext(BagContext);
