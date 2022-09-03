const { buildResult } = require('./services.js');

//even result
test('add, even result', () => {
    expect(buildResult(5, 7, '+')).toEqual({ "color": "green", "number": 12 });
});

test('sub, even result', () => {
    expect(buildResult(13, 3, '-')).toEqual({ "color": "green", "number": 10 });
});

test('multiply, even result', () => {
    expect(buildResult(2, 2, '*')).toEqual({ "color": "green", "number": 4 });
});

test('div, even result', () => {
    expect(buildResult(14, 7, '/')).toEqual({ "color": "green", "number": 2 });
});

//odd result
test('add, odd result', () => {
    expect(buildResult(5, 6, '+')).toEqual({ "color": "red", "number": 11 });
});

test('sub, odd result', () => {
    expect(buildResult(13, 4, '-')).toEqual({ "color": "red", "number": 9 });
});

test('multiply, odd result', () => {
    expect(buildResult(1, 1, '*')).toEqual({ "color": "red", "number": 1 });
});

test('div, odd result', () => {
    expect(buildResult(14, 2, '/')).toEqual({ "color": "red", "number": 7 });
});


