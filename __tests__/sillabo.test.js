
import { syllables } from '../sillabo'

test('splits "cane" into 1 line, 1 word and syllables ca-ne', () => {
  expect(syllables('cane')).toEqual([
    [
      {
        word: 'cane',
        syllables: ['ca', 'ne']
      }
    ]
  ])
})

test('splits "boato" into 1 line, 1 word and syllables bo-a-to', () => {
  expect(syllables('boato')).toEqual([
    [
      {
        word: 'boato',
        syllables: ['bo', 'a', 'to']
      }
    ]
  ])
})
