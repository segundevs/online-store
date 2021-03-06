import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';
import { fetchFeatured } from '../redux/data/dataActions';

const Home = () => {

  const selector = useSelector(state => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeatured())
  }, [dispatch])

  const {loading, error, data} = selector;

  return (
    <>
      <h1 className="text-gray-700 dark:text-gray-200 text-center text-4xl my-6 font-black">Featured Products</h1>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4">
        {loading && <h4>Fetching data....</h4>}
        {error && <h4>{error}</h4>}
        {data && data.map((item)=>(
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </>
  )
}

export default Home
