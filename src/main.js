import a from './a';
import Klass from './klass';
import {obj1, obj2} from './no-default';

export default (x) => {
  return a(x) + 10 + (new Klass(x)).x + obj1.value + obj2.value;
};
