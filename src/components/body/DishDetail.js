import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, Badge, Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import Comment from "./Comment";
// category: 'fast food',
//     label: 'Hot',
//         price: '30',
//             description:
const DishDetail = (props) => {
    let comments = [];
    if (props.comment != null) {
        for (let i of props.comment) {
            if (i.dishId == props.dish.id) {
                comments.push(i);
            }
        }
    }
    console.log("http://localhost:3001/" + props.dish.image);
    console.log("Rendering details");
    return (
        <div id="detail">
            <div>
                <Modal isOpen={props.modal} toggle={props.toggle}>
                    <ModalHeader toggle={props.toggle}>
                        {props.dish.name}
                    </ModalHeader>
                    <ModalBody>
                        <img
                            id="card-img"
                            alt="Card image cap"

                            src={"http://localhost:3001/" + props.dish.image}
                            width="100%"
                        />
                        <Badge color="primary">
                            {props.dish.category}
                        </Badge>{"  "}
                        <Badge color="success">
                            {props.dish.label}
                        </Badge>
                        <p></p>
                        <p>

                            Price: {props.dish.price} tk
                        </p>

                        <p className="m-2">
                            {props.dish.description}
                        </p>
                        <Comment comment={comments} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={props.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    )
}
export default DishDetail;