import { useState } from "react";

function Card({ id, name, info, image, price, removeTour }) {



    const [readMore, setReadMore] = useState(false);

    const description = readMore ? info : `${info.substr(0, 200)}...`; // If readMore is true then info else substring.

    function toggleHandler() {
        setReadMore(!readMore); // passing negation of readMore
        console.log('clicked');

    }

    function removeTourHandler() {
        removeTour(id);
    }
    return (
        <div className="card w-[400px] max-h-fit p-3 border rounded-md flex flex-col gap-5">
            <div>
                <img src={image} alt="Not Available" className="image w-[380px] aspect-square object-fit" /> 
            </div>
            <div className="tourDetails pl-3">
                <h4 className="price text-[#1faa59] font-bold text-[1.5rem]">
                    ₹ {price}
                </h4 >
                <h4 className="name text-[1.5rem] font-bold">
                    {name}
                </h4 >
                <div className="description text-[18px] text-justify leading-[22px]">
                    {description}
                    <span onClick={toggleHandler} className="readMore cursor-pointer text-[#12b0e8]"> {readMore ? 'Read Less' : 'Read More'}</span>
                </div>

                


            </div>
            <button onClick={removeTourHandler} className="interestedButton w-[300px] mx-auto text-2xl py-1 font-bold bg-[#b4161b21] hover:bg-red-500 hover:text-white rounded-md border border-[##b4161b21]">Not Interested</button>

        </div>
    )

}

export default Card;