import { useQuery } from 'react-query';
import Card from '../components/Card';
import { getFeaturedProducts } from '../utils/api';

const Home = () => {

  const {data, isLoading, isError} = useQuery('featured-products', getFeaturedProducts);

  return (
    <>
      <h1 className="text-gray-700 dark:text-gray-200 text-center text-4xl my-6 font-black">Featured Products</h1>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4">
        {data && console.log(data)}
        {data && data.map((item)=>(
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </>
  )
}

export default Home
