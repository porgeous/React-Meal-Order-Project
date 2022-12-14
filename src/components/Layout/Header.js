import {Fragment} from "react";

import mealsPic from '../../assets/meals.jpeg'
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css'

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsPic} alt="A table full of delicious food"/>
        </div>
    </Fragment>
}

export default Header;