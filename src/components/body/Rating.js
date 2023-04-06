import React from "react";
// const Rating = (props) => {
//     let rating_div = React.createElement('div');
//     for (var i = 0; i < 5; i++) {
//         let star = document.createElement('span');
//         star.classList.add("fa");
//         star.classList.add("fa-star");
//         if (i < props.rating) {
//             star.classList.add("checked");
//         }
//         rating_div.appendChild(star);
//     }
//     console.log(rating_div);
//     return rating_div
// }
const Rating = (props) => {
    let stars = [];
    // console.log(props.rating);
    for (var i = 0; i < 5; i++) {
        if (i < props.rating) {
            let star = (React.createElement('span', { style: { color: "orange" }, className: "fa fa-star", id: i, key: i }));
            stars.push(star);
        }
        else {
            let star = (React.createElement('span', { className: "fa fa-star", id: i, key: i }));
            stars.push(star);
        }
    }
    return (
        <div className="d-flex justify-content-left my-1" style={{ marginLeft: "30px" }}>
            {stars}
        </div>
    );
}
export default Rating; 