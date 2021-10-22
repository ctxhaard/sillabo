
function lines( text ) {
  let result = []
  let prev = 0
  for(let i = 0; i < text.length; i++) {
    if (text[i] == '\n') {
        result.push( text.slice(prev, i))
        prev = i+1
    }
  }
  if (text.length > (prev+1)) result.push( text.slice(prev))
  return result
}

function words( line ) {
  let result = []
  let prev = 0
  for(let i = 0; i < line.length; ++i) {
    if([' ', ',', ';', '.'].indexOf( line[i] ) >= 0) {
      if(i > prev) result.push( line.slice(prev, i))
      prev = i+1
    } else if('\'' == line[i]) {
      if(i > prev) result.push( line.slice(prev, i+1))
      prev = i+1
    }
  }
  if (line.length > (prev+1)) result.push( line.slice(prev))
  return result
}

function syllables( word ) {
  
  return begin([], word )
}

const CONSONANTS = Object.freeze([
  'c', 'n', 't'
])

function begin( syllables, word ) {

  if (word.length == 1) {
    syllables.push( word )
    return syllables
  }

  if (CONSONANTS.includes( word.slice(0,1)))
    return consonant(syllables, word.slice(0,1), word.slice(1) )
  
  return vocal (syllables, word.slice(0,1), word.slice(1) )
}

function consonant(syllables, before, next ) {
  if (next.length == 0) {
    if (before.length > 0) {
      syllables.push( before )
    }
    return syllables
  }
  if (CONSONANTS.includes(next.slice(0,1))) {
    syllables.push( before )
    return begin(syllables, next)
  }
  return consonantVocal(syllables, before + next.slice(0,1), next.slice(1))
}

function vocal (syllables, before, next ) {
  if (next.length == 0) {
    if (before.length > 0) {
      syllables.push( before )
    }
    return syllables
  }

  if(CONSONANTS.includes(next.slice(0,1)))
    return vocalConsonant(syllables, before + next.slice(0,1), next.slice(1))
  else
    return begin(syllables, next)
}

function consonantVocal(syllables, before, next) {
  syllables.push(before)
  return begin(syllables, next)
}

function vocalConsonant(syllables, before, next) {
  syllables.push(before)
  return begin(syllables, next)
}

export {
  lines,
  words,
  syllables,
}
