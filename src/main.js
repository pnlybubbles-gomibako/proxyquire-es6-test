import a from './a';
import Klass from './klass';

export default (x) => {
  return a(x) + 10 + (new Klass(x)).x;
};
