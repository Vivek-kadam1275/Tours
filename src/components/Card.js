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
        <div className="card">
            <div>
                <img src={image} alt="Not Available" className="image" />
            </div>
            <div className="tourDetails">
                <h4 className="price">
                    ₹ {price}
                </h4 >
                <h4 className="name">
                    {name}
                </h4 >
                <div className="description">
                    {description}
                    <span onClick={toggleHandler} className="readMore"> {readMore ? 'Read Less' : 'Read More'}</span>
                </div>

                


            </div>
            <button onClick={removeTourHandler} className="interestedButton">Not Interested</button>

        </div>
    )

}

export default Card;