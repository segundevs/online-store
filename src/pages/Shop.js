import { useSelector } from 'react-redux';
import Card from '../components/Card';


const Shop = ({view, value}) => {
  const selector = useSelector(state => state.data);
  const { loading, error } = selector;

  return (
    <>
      <h1 className="text-gray-700 dark:text-gray-200 text-center text-4xl my-6 font-black">{value === 'all' ? 'ALL PRODUCTS' : value.toUpperCase()}</h1>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 md:grid md:grid-cols-2">
        {loading && <h4>Fetching data....</h4>}
        {error && <h4>{error}</h4>}
        {view && view.map((item) => (
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </>
  )
}

export default Shop
