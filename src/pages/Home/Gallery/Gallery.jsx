import img1 from '../../../assets/images/cute-kid-playing-with-wooden-train-side-view_23-2149357243.avif';
import img3 from "../../../assets/images/father-son-playing-with-trucks-lego-pieces_23-2148500805.avif";
import img4 from "../../../assets/images/happy-asian-children-playing-lawn-playground_640221-82.avif";
import img5 from "../../../assets/images/superheroes-children-playing-home_411285-1169.avif";
import img6 from "../../../assets/images/top-view-hands-holding-eco-toy_23-2149884350.avif";
import img7 from "../../../assets/images/toy-car-transporter-with-cars-white-background_528985-2196.avif";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Gallery = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-2xl mx-auto p-6">
            <div data-aos ='fade-up-right' className="card bg-base-100 shadow-xl mx-auto">
                <figure><img src={img1} alt="Shoes" /></figure>
            </div>
            <div data-aos ='fade-up-left' className="card bg-base-100 shadow-xl">
                <figure><img src={img3} alt="Shoes" /></figure>
            </div>
            <div data-aos ='fade-up-right' className="card bg-base-100 shadow-xl">
                <figure><img src={img4} alt="Shoes" /></figure>
            </div>
            <div data-aos ='fade-up-left' className="card bg-base-100 shadow-xl">
                <figure><img src={img5} alt="Shoes" /></figure>
            </div>
            <div data-aos ='fade-up-right' className="card bg-base-100 shadow-xl">
                <figure><img src={img6} alt="Shoes" /></figure>
            </div>
            <div data-aos ='fade-up-left' className="card bg-base-100 shadow-xl">
                <figure><img src={img7} alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default Gallery;