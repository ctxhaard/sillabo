// from: 
// https://www.treccani.it/enciclopedia/divisione-in-sillabe_(La-grammatica-italiana)/

import { syllables } from '../sillabo'

test(`una vocale iniziale seguita da consonante
 semplice forma una sillaba`, () => {
  expect(syllables('Udine')).toEqual(['U', 'di', 'ne'])
  expect(syllables('amido')).toEqual(['a', 'mi', 'do'])
})

test(`le vocali che formano iato vanno divise, mentre 
i dittonghi e i trittonghi formano un’unica sillaba`, () => {

  expect(syllables('mia')).toEqual(['mi', 'a'])
  expect(syllables('leone')).toEqual(['le', 'o', 'ne'])
  expect(syllables('pianura')).toEqual(['pia', 'nu', 'ra'])
  expect(syllables('aiuola')).toEqual(['a', 'iuo', 'la'])
})

