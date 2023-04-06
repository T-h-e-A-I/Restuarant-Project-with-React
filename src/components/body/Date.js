import React from "react";
import { Badge } from "reactstrap";
import { ISO8601_WITH_TZ_OFFSET_FORMAT, format } from "date-format";

const Date = (props) => {
    var format = require('date-format')
    //console.log(format.parse(format.ISO8601_WITH_TZ_OFFSET_FORMAT, props.date));
    var date = format.parse(format.ISO8601_WITH_TZ_OFFSET_FORMAT, props.date);
    var dateout = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    return (
        <Badge style={{ display: "inline-block", textAlign: "left", marginLeft: "30px", marginRight: "30px" }}>{dateout}</Badge>

    );
}
export default Date;



