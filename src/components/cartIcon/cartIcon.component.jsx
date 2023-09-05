
import './cartIcon.style.scss';
import CartDropdown from '../cartDropdown/cartDropdown.component';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { useDispatch } from 'react-redux';
import { toggleIsOpen } from '../../store/cart/cart.action';


const CartIcon = () => {

    const { totalAmount } = useContext(CartContext);

    // const toggleDropDown = ()=>{
    //     setIsOpen(!isOpen);
    // }

    const isOpen = useSelector(selectIsCartOpen);

    const dispatch = useDispatch();

    const toggleDropDown = ()=>{
        dispatch(toggleIsOpen(!isOpen));
    }

    return (
        <div onClick={toggleDropDown} className='cart-icon-container'>

            <ShoppingIcon className='shopping-icon' />

            <span className='item-count'>{totalAmount}</span>
            <CartDropdown/>
        </div>
    )
}

export default CartIcon;