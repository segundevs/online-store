
export const getAllProducts = async() => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      return data;
    }

export const getFeaturedProducts = async() => {
      const res = await fetch('https://fakestoreapi.com/products?limit=6');
      const data = await res.json();
      return data;
    }