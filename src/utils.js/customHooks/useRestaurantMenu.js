import { useEffect, useState } from "react";
import { MENU_URL } from "../constants";
import resMockData from "../resMockData";

const useRestaurantMenu = (redId) => {
    const [resInfo, setResInfo] = useState(null)

    //--------------------  Using Swiggy Api ------------------
    // useEffect(() => {
    //     fetchData()
    // }, []);

    // const fetchData = async () => {
    //     const data = await fetch(MENU_URL + redId + "&catalog_qa=undefined&submitAction=ENTER");
    //     const json = await data.json()
    //     setResInfo(json.data)
    // }


    //--------------------  Using Static Data ------------------

    useEffect(() => {
        // Instead of fetching, load from mock data
        const data = resMockData[redId]

        if (data) {
            setResInfo(data);
        } else {
            console.warn("No mock data found for resId:", resId);
        }
    }, [redId])
    console.log(resInfo,"rrere");
    

    return resInfo;
}

export default useRestaurantMenu;