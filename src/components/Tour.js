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
            <div className="h-screen w-screen flex flex-col justify-center items-center  gap-3"> 
                <h2 className="refreshHeading text-2xl font-bold w-[180px] text-center">
                    No Tours Left
                </h2>
                <button onClick={refrestHandler} className="refreshButton bg-gray-300 w-[180px] text-lg py-1">Refresh</button>

            </div>
        )
    }
    return (
        <div className="  py-5 ">
            <div className="my-5"> 
                <h2 className="title max-w-[550px] p-3 mx-auto text-center border-[7px] border-dashed rounded-[20px] border-[#0111a0] text-[45px] font-bold "> Plan With Vivek</h2>
            </div>
            <div className="cards flex flex-wrap mx-auto  w-11/12 justify-center gap-8">
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