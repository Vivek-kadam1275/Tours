import { useState } from "react";
import Card from "./Card";
import data from "../data";
function Tour() {

    const [tours, setTours] = useState(data);
    function removeTour(id) {
        const newTour = tours.filter(tour => tour.id !== id)
        console.log(id);
        setTours(newTour);

    }
    function refrestHandler() {
        setTours(data);
    }
    if (tours.length === 0) {
        return (
            <div className="refreshContainer">
                <h2 className="refreshHeading">
                    No Tours Left
                </h2>
                <button onClick={refrestHandler} className="refreshButton">Refresh</button>

            </div>
        )
    }
    return (
        <div className="container">
            <div>
                <h2 className="title"> Plan With Vivek</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour) => {
                        return (
                            <Card {...tour} key={tour.id} removeTour={removeTour} ></Card>
                        )
                    })
                }
            </div>

        </div>
    )

}
export default Tour;