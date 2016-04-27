import test from 'ava';
// import assert from 'assert';
import proxyquire from 'proxyquire';

const aMock = {
  default: (x) => {
    return x * 5;
  },
};

class KlassMock_ {
  constructor() {
    this.x = 1;
  }
}

const KlassMock = {
  default: KlassMock_,
};

// ok
// const KlassMock = {
//   default() {
//     this.x = 1;
//   },
// };

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
}).default;

test('test', (t) => {
  t.truthy(main(2) === 24);
});

// for mocha (test2)
// it('test', () => {
//   assert(main(2) === 21);
// });
