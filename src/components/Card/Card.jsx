import {useSelector, useDispatch} from 'react-redux';
import { addToCart } from '../../redux/cart/cartActions';
import Rating from '@mui/material/Rating';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import './card.scss';

const Card = ({item}) => {

  const selector = useSelector(state => state.cart);

  const { cartItem } = selector;

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addToCart(item))
  }

  return (
      <div className="card__container">
      <img className="card__container-image" src={item.image} alt={item.category} />
        <div className="card__container-content">
          <h5 className="category">{item.category.toUpperCase()}</h5>
            <h3 className="title">{item.title}</h3>
            <div className="rating">
              <Rating name="read-only" value={item.rating.rate} size="small" readOnly />
              <div className="rating__value"><span className="rating__rate">{item.rating.rate}</span><span>({item.rating.count})</span></div>
            </div>
            <div className="price">
              <h5 className="price__title">Price</h5>
              <h3 className="price__value">${item.price}</h3>
            </div>
            <button type="button" onClick={() => handleClick(item)} className="btn">
            {cartItem.find(el => el.id === item.id) ? <RemoveShoppingCartIcon /> : <AddShoppingCartIcon />}
            </button>
        </div>
            
    </div>
  )
}

export default Card
