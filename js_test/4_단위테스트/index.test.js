const sut = require("./index");

// 파라미터 라이즈 테스트
test.each`
  source | expected
  ${"hello  world"} | ${"hello world"}
  ${"hello   world"} | ${"hello world"}
  ${"hello    world"} | ${"hello world"}
`(`sut transforms "$source" to "$expected"`, ({ source, expected }) => {
  const actual = sut(source)
  expect(actual).toBe(expected)
})

test('sut correctly works', () => {
  for (const source of ['hello  world', 'hello   world', 'hello    world']) {
    const actual = sut(source)
    expect(actual).toBe("hello world")
  }
})