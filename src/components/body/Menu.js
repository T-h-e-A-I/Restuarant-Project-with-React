import { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { connect } from "react-redux"
import Loading from "../Loading";
import axios from "axios";
import { getActiveElement } from "@testing-library/user-event/dist/utils";
class Menu extends Component {
    componentDidMount() {
        document.getElementById("menu").classList.add("active");
        document.getElementById("about").classList.remove("active")
        document.getElementById("contact").classList.remove("active")
        document.getElementById("home").classList.remove("active")
        this.props.fetchDish();
        this.props.fetchComment();
    }
    render() {
        if (this.props.menu == null) {
            return (
                <Loading></Loading>
            )
        }
        else {
            document.title = "Menu"
            let menuList = this.props.menu.map((item) => {

                return (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
                        <MenuItem
                            menu={item}
                            click={this.props.onDishSelect.bind(this, item)}
                        />
                    </div>
                );
            }
            )
            let dish_detail = null;
            let comment = null;
            if (this.props.selected_dish != null) {
                dish_detail = <DishDetail comment={this.props.comment} dish={this.props.selected_dish} modal={this.props.modal} toggle={this.props.toggle} />;
            }

            return (
                <div className="container">

                    <div className="row g-2">

                        {menuList}

                        <div className="col-md-6" id="detail-item">
                            {dish_detail}
                        </div>
                    </div>
                </div>
            );
        }
    }
}
const mapStateToProps = (state) => {

    return {
        menu: state.dish,
        modal: state.modal,
        selected_dish: state.dishSelection,
        comment: state.comment
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        toggle: () => dispatch({ type: "toggle" }),
        onDishSelect: (dish) => dispatch({ type: "select", payload: { item: dish } }),
        fetchDish: () => {
            axios.get("http://localhost:3001/dishes").then(
                response => response.data
            ).then(
                data => dispatch({ type: "dishLoad", payload: data })
            )

        },
        fetchComment: () => {
            axios.get("http://localhost:3001/comment").then(
                response => response.data
            ).then(
                data => dispatch({ type: "commentLoad", payload: data })
            ).catch(error => console.log(error.message))

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Menu);