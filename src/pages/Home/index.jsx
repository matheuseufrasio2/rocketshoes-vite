import { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { api } from '../../services/api';
import { addToCart } from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';

import {
  Container,
} from './styles';

export function Home() {
  const amount = useSelector(state => state.cart.reduce((acc, product) => {
    acc[product.id] = product.amount;
    return acc;
  }, {}));

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const response = await api.get('/products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      {
        products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button type="button" onClick={() => dispatch(addToCart(product))}>
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
                {' '}
                {amount[product.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))
      }
    </Container>
  );
}
