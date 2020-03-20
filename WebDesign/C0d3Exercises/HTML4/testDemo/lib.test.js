const lib = require('./lib');

describe('hash table', () => {
  it('should hash hello and world', () => {
    const obj1 = lib.tokenize('hello world');
    expect(obj1).toEqual({HELLO: 1, WORLD: 1});
  });

  it('Should hash values', () => {
    const obj2 = lib.tokenize('I like (Korean)');
    expect(obj2).toEqual({LIKE: 1, '(KOREAN)': 1});
  });

  it('return empty object', () => {
    const obj3 = lib.tokenize('');
    expect(obj3).toEqual({});
  });

  it('return empty object', () => {
    const obj4 = lib.tokenize('00');
    expect(obj4).toEqual({});
  });
});

describe('should push all arrays', () => {
  it('should do nothing', () => {
    const data = {};
    const solution = lib.pushAll(data, [9, 8, 7]);
    const result = {};
    expect(solution).toEqual(result);
  });

  it('should push array', () => {
    const data = {blah: [['hello']]};
    const solution = lib.pushAll(data, [9, 8, 7]);
    const result = {blah: [['hello'], [9, 8, 7]]};
    expect(solution).toEqual(result);
  });

  it('should push array', () => {
    const data = {blah: []};
    const solution = lib.pushAll(data, [9, 8, 7]);
    const result = {blah: [[9, 8, 7]]};
    expect(solution).toEqual(result);
  });

  it('should push array', () => {
    const data = {blah: [['hello']], key2: []};
    const solution = lib.pushAll(data, [9, 8, 7]);
    const result = {
      blah: [['hello'], [9, 8, 7]],
      key2: [[9, 8, 7]],
    };
    expect(solution).toEqual(result);
  });
});

describe('Get largest key', () => {
  it('should return null', () => {
    const result = lib.getMostLikely({});
    expect(result).toEqual(null);
  });
  it('should return meat', () => {
    const result = lib.getMostLikely({
      meat: 0.987,
      veggie: 0.187,
      store: 0.287,
    });
    expect(result).toEqual('meat');
  });
  it('should return store', () => {
    const result = lib.getMostLikely({
      meat: 0.287,
      veggie: 0.187,
      store: 0.987,
    });
    expect(result).toEqual('store')
  });
  it ('should return vince', () => {
    const result = lib.getMostLikely({
      vince: 25,
      savage: 21,
      earl: 18
    })
    expect(result).toEqual('vince')
  })
});
