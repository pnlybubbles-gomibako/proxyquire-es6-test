import test from 'ava';
import proxyquire from './proxyquire-babel';

function aMock(x) {
  return x * 5;
}

class KlassMock {
  constructor() {
    this.x = 1;
  }
}

const obj1Mock = {
  value: 1,
};

const obj2Mock = {
  value: 2,
};

const noDefaultMock = {
  obj1: obj1Mock,
  obj2: obj2Mock,
};

const main = proxyquire('../src/main', {
  './a': aMock,
  './klass': KlassMock,
  './no-default': noDefaultMock,
});

test('test', (t) => {
  t.truthy(main(2) === 24);
});
