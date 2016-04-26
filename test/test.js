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

const main = proxyquire('../src/main', {
  './a': aMock,
  './klass': KlassMock,
}).default;

test('test', (t) => {
  t.truthy(main(2) === 21);
});

// for mocha (test2)
// it('test', () => {
//   assert(main(2) === 21);
// });
