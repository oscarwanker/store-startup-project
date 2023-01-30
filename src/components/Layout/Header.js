import { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import imageMeals  from  '../../assets/meals.jpg'

const Header = (props) => {

    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={imageMeals} alt='A table full of delicious food'/>
        </div>
    </Fragment>
};

export default Header;