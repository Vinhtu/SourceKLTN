import { combineReducers } from 'redux';
import AccountReducer from './accounts';
import NotificationReducer from './notifications';
import TeamReducer from './teams';
import PositionReducer from './positions';
import CategoryReducer from './categorys';
import BrandReducer from './brands';
import ColorReducer from './colors';
import SizeReducer from './sizes';
import AffilateshopReducer from './affilateshops';
import ProductReducer from './products';
import VoucherReducer from './vouchers';
import CartReducer from './carts';
import CartItemReducer from './cartitems';
import LanguageReducer from './languages';
import BannerReducer from './banners';
import EventReducer from './events';
import CommentReducer from './comments';
import OrderReducer from './orders';
import PaymentReducer from './payments';
import UtilsReducer from './utils';
import EvaluateReducer from './evaluates';
import SearchReducer from './searchs';

const Reducers = combineReducers({
  account: AccountReducer,
  notification: NotificationReducer,
  team: TeamReducer,
  position: PositionReducer,
  category: CategoryReducer,
  brand: BrandReducer,
  color: ColorReducer,
  size: SizeReducer,
  affilateshop: AffilateshopReducer,
  product: ProductReducer,
  voucher: VoucherReducer,
  cart: CartReducer,
  cartitem: CartItemReducer,
  language: LanguageReducer,
  banner: BannerReducer,
  event: EventReducer,
  comment: CommentReducer,
  order: OrderReducer,
  payment: PaymentReducer,
  utils: UtilsReducer,
  evaluate: EvaluateReducer,
  search: SearchReducer,
});

export default Reducers;
