import axios from "axios";
import { options, Top_Rated_Movies } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getTopRatedMovie } from "../redux/movieSlice";

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();
    try {
        const res = await axios.get(Top_Rated_Movies, options);
        dispatch(getTopRatedMovie(res.data.results));
    } catch (error) {
        console.log(error);
        
    }
}

export default useTopRatedMovies;