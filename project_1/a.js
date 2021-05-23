import b from './b.js';

const a = {
  value: 'a',
  getB: () => b.value + ' from b.js'
};

export default a;
