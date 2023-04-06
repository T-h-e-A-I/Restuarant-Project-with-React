import React from "react";
import Date from "./Date";
import { Card } from "reactstrap";
import CommentForm from "./CommentForm";
import Rating from "./Rating";

const Comment = (props) => {
    let size = 0;
    let com_arr = props.comment.map((item) => {
        size++;
        return (
            <Card className="me-auto" key={item.id}>
                <h5 style={{ textAlign: "left", display: "inline", marginLeft: "30px", marginTop: "10px", marginRight: "20px" }}>{item.author}</h5>
                <Date date={item.date} />
                <Rating rating={item.rating}></Rating>
                <p style={{ textAlign: "left", marginLeft: "30px" }}>{item.comment}</p>
            </Card>
        );
    }

    );


    return (
        <div clasName="col-md-6">
            {com_arr}

            <CommentForm size={size}></CommentForm>
        </div>

    );
}
export default Comment;