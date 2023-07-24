import { Helmet } from "react-helmet";
import Search from "./Search/Search";
import CollegeCard from "./CollegesCard/CollegeCard";
import Gallery from "./gallery/Gallery";
import Review from "./Review/Review";


const Home = () => {
    return (
        <div>
            <Helmet><title>Home | College Guide</title></Helmet>
            <div className=""><Search></Search></div>
            <CollegeCard></CollegeCard>
            <Gallery></Gallery>
            <Review></Review>
        </div>
    );
};

export default Home;