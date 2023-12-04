import img1 from '../../../assets/images/fun-gorilla-3d-illustration_183364-80089.avif';
import img2 from '../../../assets/images/illustration-red-sport-car-toy-withe-background_714605-739.avif';
import img3 from '../../../assets/images/funny-illustrated-car-painted-rainbow-colors_183364-23794.avif';
import img4 from '../../../assets/images/dump-track-toy-loaded-with-blocks_470606-617.avif';
import { FcCallback } from "react-icons/fc";
const Banner = () => {
    return (
        <div>
            <div className='flex justify-center h-[600px] w-full'>
                <div className="carousel w-3/5">
                    <div id="item1" className="carousel-item w-full">
                        <img src={img1} className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={img2} className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={img3} className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={img4} className="w-full" />
                    </div>
                </div>
                <div className='space-y-7 pl-12'>
                    <h2 className='text-5xl font-bold text-black'>A<span className='text-amber-500'>l</span>l Ki<span className='text-amber-500'>n</span>ds <br />Of Toy Ca<span className='text-amber-500'>r</span>s <br /><span className='text-amber-500'> A</span>re Av<span className='text-amber-500'>a</span>ila<span className='text-amber-500'>b</span>le</h2>
                    <p>We can provide the toy cars you need.There are <br /> many types of toy cars like <br /> sports car, truck, regular car, mini fire truck, mini police car, etc.</p>
                    <button className='btn btn-warning'>Call Now<span className='text-3xl pl-2'><FcCallback /></span></button>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xl btn-info">1</a>
                <a href="#item2" className="btn btn-xl btn-info">2</a>
                <a href="#item3" className="btn btn-xl btn-info">3</a>
                <a href="#item4" className="btn btn-xl btn-info">4</a>
            </div>
        </div>
    );
};

export default Banner;