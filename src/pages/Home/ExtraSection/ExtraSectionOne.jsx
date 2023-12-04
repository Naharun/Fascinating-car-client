import img1 from '../../../assets/images/amusement.jpg'
import img2 from '../../../assets/images/little-boy.avif'
import img3 from '../../../assets/images/mother.avif'
const ExtraSectionOne = () => {
    return (
        <div className='mx-auto p-6'>
            <h2 className="text-4xl font-bold">OUR SHO<span className="text-amber-500">W</span>RO<span className="text-amber-500">O</span>M</h2><br />
            <p className="text-sky-800 text-xl">Location : Dhanmondi 9, Dhaka, Bangladesh </p>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-2xl">
                <div data-aos='fade-up-right' className="card bg-base-100 shadow-xl mx-auto">
                    <figure><img src={img1} alt="Shoes" /></figure>
                </div>
                <div data-aos='fade-up-right' className="card bg-base-100 shadow-xl mx-auto">
                    <figure><img src={img2} alt="Shoes" /></figure>
                </div>
                <div data-aos='fade-up-right' className="card bg-base-100 shadow-xl mx-auto">
                    <figure><img src={img3} alt="Shoes" /></figure>
                </div>
            </div>

        </div>
    );
};

export default ExtraSectionOne;