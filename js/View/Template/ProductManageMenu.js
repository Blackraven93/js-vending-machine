import { selector } from '../../util/consts.js';
import Template from './Template.js';

class ProductManageMenu extends Template {
  render() {
    selector('#app').innerHTML = String.raw`
      <h1>🧃 자판기 미션 🧃</h1>  
      <vending-machine-router></vending-machine-router>
      <product-dashboard></product-dashboard>
      <product-inventory></product-inventory>
    `;
  }

  static of() {
    return new ProductManageMenu();
  }
}

export default ProductManageMenu;
