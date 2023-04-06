import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";
import "../../Stylesheets/MenuItem.css";

const MenuItem = (props) => {
    return (
        <div className="mt-2 mb-2 card-menu">
            <a href="#detail">
                <Card inverse onClick={props.click}>

                    <CardImg
                        id="card-img"
                        alt="Card image cap"
                        src={"http://localhost:3001/" + props.menu.image}
                        width="100%"
                    />

                    <CardImgOverlay style={{ margin: "30px", color: "black" }}>
                        <CardTitle tag="h5" >
                            {props.menu.name}
                        </CardTitle>
                    </CardImgOverlay>
                </Card>
            </a>
        </div>
    );
}
export default MenuItem;