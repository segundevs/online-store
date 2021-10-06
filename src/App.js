import './App.scss';

import { useEffect, useState } from 'react';
// import Header from './components/Header';
import Hero from './components/Hero';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

import Header from './components/Header/Header';

//Categories
import { useSelector, useDispatch } from 'react-redux';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { fetchData, } from './redux/data/dataActions';


function App() {

  const selector = useSelector(state => state.data);
  const dispatch = useDispatch();

  const {data} = selector;

  const [value, setValue] = useState('all');
  const [view, setView] = useState([]);


  

  useEffect(() => {
    dispatch(fetchData())
    const newData = data.filter(el => el.category === value);

    if(value === 'all'){
      setView(data)
    }else{
      setView(newData);
    }

  }, [dispatch, data, value])


  return (
    <Router>
    <div className="text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700">
      <Header value={value} setValue={setValue} />
      <Hero />
      <Switch>
         <Route path="/home" exact>
          <Home value={value} />
        </Route> 
        <Route path="/shop">
          <Shop view={view} value={value} />
        </Route>
        <Route path="/product/:id">
          <ProductDetails />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
