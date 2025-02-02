const solution = require('./solution.js');

describe('ths is test template code', () => {
  it('입력값이 [93, 30, 55], [1, 30, 5] 일 때 기대값은 [2, 1] 이어야 합니다.', () => {
    expect(solution([93, 30, 55], [1, 30, 5])).toStrictEqual([2, 1]);
  });
  it('입력값이 [95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1] 일 때 기대값은 [1, 3, 2] 이어야 합니다.', () => {
    expect(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])).toStrictEqual([1, 3, 2]);
  });
});
