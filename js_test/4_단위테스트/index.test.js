const { faker } = require('@faker-js/faker');
const sut = require('./index');

// 파라미터 라이즈 테스트
test.each`
  source | expected
  ${'hello  world'} | ${'hello world'}
  ${'hello   world'} | ${'hello world'}
  ${'hello    world'} | ${'hello world'}
  ${'hello     world'} | ${'hello world'}
  ${'hello      world'} | ${'hello world'}
  ${'hello       world'} | ${'hello world'}
  ${'hello        world'} | ${'hello world'}
`(`sut transforms "$source" to "$expected"`, ({ source, expected }) => {
  const actual = sut(source);
  expect(actual).toBe(expected);
});

test.each`
  source | expected
  ${'hello\tworld'} | ${'hello world'}
  ${'hello\t world'} | ${'hello world'}
`('sut transforms "$source" that contains tab charactor to "$expected"', ({ source, expected }) => {
  const actual = sut(source);
  expect(actual).toBe(expected);
});

test.each`
  source | bannedWords | expected
  ${'hello mockist'} | ${['mockist', 'purist']} | ${'hello *******'}
  ${'hello purist'} | ${['mockist', 'purist']} | ${'hello ******'}
  `('sut transforms "$source" to $"expected"',
  ({ source, bannedWords, expected }) => {
    const actual = sut(source, { bannedWords });
    expect(actual).toBe(expected);
});


describe('given bannerd word', () => {
  const bannedWord = faker.lorem.word();
  const source = 'hello ' + bannedWord;
  const expected = 'hello ' + '*'.repeat(bannedWord.length);

  test(`${bannedWord} when invoke sut then it returns`, () => {
    const actual = sut(source, { 'bannedWords': [bannedWord] });
    expect(actual).toBe(expected);
  });
});