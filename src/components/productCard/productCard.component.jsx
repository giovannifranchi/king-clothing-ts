import './productCard.style.scss'
import Button from '../button/button.component';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';

const ProductCard = ({product})=> {

    const {  name, imageUrl, price } = product;

    const dispatch = useDispatch();


    const addProduct = ()=> {
        dispatch(addItemToCart(product));
    }

    return (
        <div className='product-card-container mb-3'>

            <img src={imageUrl} alt={name}/>

            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}$</span>
            </div>

            <Button buttonType='inverted' text='Add To Cart' onClick={addProduct} />

        </div>
    )
}

export default ProductCard;