import proxyquire from 'proxyquire';
import isPlainObject from 'lodash.isplainobject';

export default (request, stubs) => {
  for (let key in stubs) {
    if ({}.hasOwnProperty.call(stubs, key)) {
      let stub = stubs[key];
      if (isPlainObject(stub)) {
        if (!{}.hasOwnProperty.call(stub, 'default')) {
          stubs[key] = {
            default: stub,
          };
          Object.keys(stub).forEach((k) => {
            stubs[key][k] = stub[k];
          });
        }
      } else {
        stubs[key] = {
          default: stub,
        };
      }
    }
  }
  const res = proxyquire(request, stubs);
  return isPlainObject(res) && {}.hasOwnProperty.call(res, 'default') ? res.default : res;
};
