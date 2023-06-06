import { quote } from '~/index.ts'

describe('index', () => {
  it('phrase', () => {
    expect.assertions(2)

    expect(quote).toBeTypeOf('string')
    expect(quote.length).toBeGreaterThan(0)
  })
})
