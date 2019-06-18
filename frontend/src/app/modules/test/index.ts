import { inject, observer } from 'inferno-mobx';
import TestView from './TestView';

const Test = inject(stores => {
  return { userDetailModel: stores.store.userDetailModel };
})(observer(TestView));

export default Test;
