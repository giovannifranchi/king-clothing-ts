import './cartDropdown.style.scss';

import DropdownCard from '../dropdownCard/dropDownCard.component';
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector';



const CartDropdown = () => {

    const { cartItems, totalAmount} = useContext(CartContext);

    const isOpen = useSelector(selectIsCartOpen);


    const cartItemsArray = ()=>{
        if(!Object.keys(cartItems).length) return [];
        const list = [];
        for(let item in cartItems) list.push(cartItems[item]);
        return list;
    }

    const cart = cartItemsArray();

    return (
        <div className={`${isOpen ? 'cart-dropdown-container' : 'd-none'}`}>

            {
                totalAmount ? 
                (<div className='cart-items'>
                    {
                        cart.map((item)=>{return <DropdownCard item={item} key={item.info.id}/>})
                    }
                </div>)
                :
                (<div className='empty-message'>No items in cart</div>)
            }


            {
                totalAmount ?
                (
                    <NavLink to='checkout' className='w-100 mt-2'>
                        <Button text='Go to Checkout' buttonType='inverted'/>
                    </NavLink>
                )
                : 
                (<></>)
            }
        </div>

    )
}

export default CartDropdown;