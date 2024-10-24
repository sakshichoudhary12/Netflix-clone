import axios from "axios";
import { options, Top_Rated_Movies } from "../utils/constant";
import { useDispatch } from "react-redux";
import {  getUpcomingMovies } from "../redux/movieSlice";

const useUpcomingMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Top_Rated_Movies, options);
        dispatch(getUpcomingMovies(res.data.results));
    } catch (error) {
        console.log(error);
        
    }
}

export default useUpcomingMovies;