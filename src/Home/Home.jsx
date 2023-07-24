import { Helmet } from "react-helmet";
import Search from "./Search/Search";
import CollegeCard from "./CollegesCard/CollegeCard";
import Gallery from "./gallery/Gallery";
import Review from "./Review/Review";
import ResearchPaper from "./ResearchPaper/ResearchPaper";


const Home = () => {
    return (
        <div>
            <Helmet><title>Home | College Guide</title></Helmet>
            <div className=""><Search></Search></div>
            <CollegeCard></CollegeCard>
            <Gallery></Gallery>
            <ResearchPaper></ResearchPaper>
            <Review></Review>
        </div>
    );
};

export default Home;