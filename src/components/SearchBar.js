import homeSearch from "../../public/images/bite-home.jpg"
import video from "../../public/videos/food-video-cmp.mp4"
import { useState, useEffect, useContext } from "react"
import useBody from "../utils.js/customHooks/useBody";
import useOnlineStatus from "../utils.js/customHooks/useOnlineStatus";
import UserContext from "../utils.js/userContext";

export const SearchBar = ({ listOfRestaurants, setFilteredReastauants }) => {

    // const [listOfRestaurants, setListOfReastauants] = useState([]);
    // const [filteredRestaurants, setFilteredReastauants] = useState([]);
    const [searchText, setSearchText] = useState("");

    // -----------DEBOUNCE [ setTimeout with useEffect ]
    // useEffect(() => {
    //     console.log(listOfRestaurants,"render");

    //     const timer = setTimeout(() => {
    //         if (searchText.trim() === "") {
    //             // If search text is empty, show all restaurants
    //             setFilteredReastauants(listOfRestaurants);
    //         } else {
    //             const filtered = listOfRestaurants.filter((res) => {
    //                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
    //             })
    //             setFilteredReastauants(filtered)
    //         }
    //     }, 2000)
    //     return () => clearTimeout(timer) // cleanup function
    // }, [searchText, listOfRestaurants, setFilteredReastauants])

    useEffect(() => {
        const timer = setTimeout(() => {
          if (searchText.trim() === "") {
            // If search text is empty, show all restaurants
            setFilteredReastauants(listOfRestaurants);
          } else {
            const filtered = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredReastauants(filtered);
          }
        }, 2000); // 500ms delay
    
        return () => clearTimeout(timer); // Cleanup function
      }, [searchText, listOfRestaurants, setFilteredReastauants]);



    // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // custom hooks
    const restaurantsListData = useBody();
    const onlineStatus = useOnlineStatus();

    const { loggedInUser, setUserName } = useContext(UserContext)

    // useEffect(() => {
    //   setListOfReastauants(restaurantsListData);
    //   setFilteredReastauants(restaurantsListData);
    // }, [restaurantsListData]);


    return (
        <div className="relative z-[7]" >
            <video className="h-[65dvh] w-full object-cover" autoPlay loop muted playsInline >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* <img className="h-[450px] object-cover" src={homeSearch} alt="search" /> */}
            <div className="absolute top-0 right-0 opacity-[40%] w-full h-full bg-black "></div>


            <div className="search w-full items-center justify-center flex flex-col absolute top-0 left-0 right-0 bottom-0 m-auto">
                <p className="text-white text-[40px] font-normal">Discover the Best Food and Drinks</p>
                <input
                    className="search_input w-[50%] h-[50px]"
                    placeholder="Search for restaurant and cuisines"
                    type="text"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                {/* filter the restraunt cards and update the ui */}
                {/* need search text */}
                {/* inputfield is restricting value to be typed because value searchText is tighted the value as empty  */}
                {/* whenever local variable changes react re render the component but only the changed value getting render with virtual dom(finding difference b/w older virtual dom and newer virtual dom)*/}
                {/* whenever state variables update , react triggers a reconciliation cycle(re-render the conponent) */}
                <button
                    onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredReastauants(filteredRestaurants);
                    }}
                    className="submit_search text-white"
                    type="button"
                >
                    Search
                </button>

                {/* search container */}
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default SearchBar;