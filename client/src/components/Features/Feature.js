
import React from "react";
import Card from "./Card";
import cardInfo from "./CardInfo";

const Feature = () => {
   
    return (
    <section  className="login1">
        <div className="container-fluid containerColor">
            <div className="row">
                <div className="marginBottomCol">
                    <div className="card-transparent">
                        <div className="card-body mt-5">
                            <div className="featured-title"> <h2>Featured Nail Technicians</h2> </div>
                            <br />
                            
                            <div className="row row-cols-1 rows-cols-md-3">
                                    {cardInfo.map(result => (
                                        <Card 
                                            id = {result.id}
                                            name={result.name}
                                            image = {result.image}
                                            link = {result.link}
                                            salon_name={result.salon_name}
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </section>
    );
}



export default Feature;