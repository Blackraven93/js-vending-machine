import Event from './Controller/Event/Event.js';
import Router from './View/Component/Router.js';
import UserPurchase from './View/Component/UserPurchase.js';
import CashBox from './View/Component/CashBox.js';
import ProductDashboard from './View/Component/Product/ProductDashboard.js';
import ProductManageMenu from './View/Template/ProductManageMenu.js';
import ProductInventory from './View/Component/Product/ProductInventory.js';
import Component from './View/index.js';

const init = () => {
  customElements.define('vending-machine-router', Router);
  customElements.define('product-inventory', ProductInventory);
  customElements.define('product-dashboard', ProductDashboard);
  customElements.define('user-purchase', UserPurchase);
  customElements.define('cash-box', CashBox);

  ProductManageMenu.of().render();
  Component.product.display();
};

window.addEventListener('DOMContentLoaded', init);
