
import { syllables, lines, words } from '../sillabo'

test('splits "cane" into 1 line, 1 word and syllables ca-ne', () => {
  expect(syllables('cane')).toEqual(
    ['ca', 'ne']
  )
})

test('splits "boato" into syllables bo-a-to', () => {
  expect(syllables('boato')).toEqual(
    ['bo', 'a', 'to']
  )
})

test('splits "gatto into syllables gat-to', () => {
  expect( syllables('gatto')).toEqual(
    ['gat', 'to']
  )
})

test('splits "ritrovai" into ri-tro-va-i', () => {
  expect( syllables('ritrovai')).toEqual(
    ['ri', 'tro', 'va', 'i']
  )
})

test('splits a text into lines', () => {

  let text = `
Nel mezzo del cammin di nostra vita

mi ritrovai in una selva oscura
ché la retta via era smarrita.
Ahi, quanto a dir qual'era è cosa dura
esta selva selvaggia
e aspra e forte che il pensier rinnova la paura`
let l = lines( text )

  expect( l ).toEqual([
    '',
    'Nel mezzo del cammin di nostra vita',
    '',
    'mi ritrovai in una selva oscura',
    'ché la retta via era smarrita.',
    'Ahi, quanto a dir qual\'era è cosa dura',
    'esta selva selvaggia',
    'e aspra e forte che il pensier rinnova la paura'])

})

test('splits a line into words', () => {
  let line = 'Ahi, quanto a dir qual\'era è cosa dura'
  let w = words( line )

  expect( w ).toEqual([
    'Ahi', 'quanto', 'a', 'dir', 'qual\'', 'era', 'è', 'cosa', 'dura'
  ])
})
