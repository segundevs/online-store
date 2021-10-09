import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import './shop.scss';



const Shop = ({view, value, setValue}) => {
  const selector = useSelector(state => state.data);
  const { loading, error } = selector;

  return (
    <div className="shop__container">
      <div className="header__filter">
          <select className="header__filter-select" value={value} onChange={(e) => setValue(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>

          {/* <div className="header__filter-input-container">
            <input className="header__filter-input" type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <SearchIcon className="searchIcon"/>
          </div>    */}
          
        </div>
      <h1 className="shop__header">{value === 'all' ? 'ALL PRODUCTS' : value.toUpperCase()}</h1>
      <div className="shop__container-items">
        {loading && <h4>Fetching data....</h4>}
        {error && <h4>{error}</h4>}
        {view && view.map((item) => (
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default Shop
