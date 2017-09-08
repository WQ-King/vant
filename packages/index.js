import Actionsheet from './actionsheet';
import Area from './area';
import Badge from './badge';
import BadgeGroup from './badge-group';
import Button from './button';
import Card from './card';
import Cell from './cell';
import CellGroup from './cell-group';
import CellSwipe from './cell-swipe';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Col from './col';
import CouponCell from './coupon-cell';
import CouponList from './coupon-list';
import DatetimePicker from './datetime-picker';
import Dialog from './dialog';
import Field from './field';
import GoodsAction from './goods-action';
import GoodsActionBigBtn from './goods-action-big-btn';
import GoodsActionMiniBtn from './goods-action-mini-btn';
import Icon from './icon';
import ImagePreview from './image-preview';
import Lazyload from './lazyload';
import Loading from './loading';
import NavBar from './nav-bar';
import NoticeBar from './notice-bar';
import Panel from './panel';
import Picker from './picker';
import Popup from './popup';
import Progress from './progress';
import PullRefresh from './pull-refresh';
import Radio from './radio';
import RadioGroup from './radio-group';
import Row from './row';
import Search from './search';
import Step from './step';
import Stepper from './stepper';
import Steps from './steps';
import SubmitBar from './submit-bar';
import Swipe from './swipe';
import SwipeItem from './swipe-item';
import Switch from './switch';
import SwitchCell from './switch-cell';
import Tab from './tab';
import Tabs from './tabs';
import Tag from './tag';
import Toast from './toast';
import TreeSelect from './tree-select';
import Uploader from './uploader';
import Waterfall from './waterfall';

const version = '0.9.1';
const components = [
  Actionsheet,
  Area,
  Badge,
  BadgeGroup,
  Button,
  Card,
  Cell,
  CellGroup,
  CellSwipe,
  Checkbox,
  CheckboxGroup,
  Col,
  CouponCell,
  CouponList,
  DatetimePicker,
  Field,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Icon,
  Loading,
  NavBar,
  NoticeBar,
  Panel,
  Picker,
  Popup,
  Progress,
  PullRefresh,
  Radio,
  RadioGroup,
  Row,
  Search,
  Step,
  Stepper,
  Steps,
  SubmitBar,
  Swipe,
  SwipeItem,
  Switch,
  SwitchCell,
  Tab,
  Tabs,
  Tag,
  TreeSelect,
  Uploader
];

const install = function(Vue) {
  if (install.installed) return;

  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Actionsheet,
  Area,
  Badge,
  BadgeGroup,
  Button,
  Card,
  Cell,
  CellGroup,
  CellSwipe,
  Checkbox,
  CheckboxGroup,
  Col,
  CouponCell,
  CouponList,
  DatetimePicker,
  Dialog,
  Field,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Icon,
  ImagePreview,
  Lazyload,
  Loading,
  NavBar,
  NoticeBar,
  Panel,
  Picker,
  Popup,
  Progress,
  PullRefresh,
  Radio,
  RadioGroup,
  Row,
  Search,
  Step,
  Stepper,
  Steps,
  SubmitBar,
  Swipe,
  SwipeItem,
  Switch,
  SwitchCell,
  Tab,
  Tabs,
  Tag,
  Toast,
  TreeSelect,
  Uploader,
  Waterfall
};
export default {
  install,
  version
};