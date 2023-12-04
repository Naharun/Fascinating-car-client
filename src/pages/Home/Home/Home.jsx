import Banner from "../Banner/Banner";
import ExtraSectionOne from "../ExtraSection/ExtraSectionOne";
import ExtraSectionTwo from "../ExtraSection/ExtraSectionTwo";
import Gallery from "../Gallery/Gallery";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br />
            <Gallery></Gallery>
            <br />
            <ExtraSectionOne></ExtraSectionOne>
            <br />
            <ExtraSectionTwo></ExtraSectionTwo>
        </div>
    );
};

export default Home;