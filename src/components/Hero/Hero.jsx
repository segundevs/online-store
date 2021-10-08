import { Link } from 'react-router-dom';
import './hero.scss';

const Hero = () => {

  return (
    <div className="hero__container">
      <div className="overlay">
        <div className="hero__content">
      <h1 className="hero__header">
        All you need in one shop
      </h1>
      <p className="hero__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam in, labore numquam modi quidem dolor dolores expedita eum a id.
      </p>
      <Link to="/shop" className="hero__link">Browse Products</Link>
      </div>
      </div>
    </div>
  )
}

export default Hero
