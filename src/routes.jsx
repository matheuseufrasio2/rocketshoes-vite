import { Routes as Switch, Route } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
    </Switch>
  );
}
