
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

const VOCALS = Object.freeze(['a', 'à', 'e', 'è', 'é', 'i', 'ì', 'o', 'ò', 'u', 'ù'])
const CONSONANTS = Object.freeze([
  'b', 'c', 'd', 'f', 'g', 'h',
  'j', 'k', 'l', 'm', 'n', 'p',
  'q', 'r', 's', 't', 'v', 'x',
  'y', 'w', 'z'])

function begin( syl, word ) {

  if (word.length == 1) {
    syl.push( word )
    return syl
  }

  if (CONSONANTS.includes( word.slice(0,1)))
    return consonant(syl, word.slice(0,1), word.slice(1) )
  
  return vocal (syl, word.slice(0,1), word.slice(1) )
}

function consonant(syl, acc, next ) {
  if (next.length == 0) {
    if (acc.length > 0) {
      syl.push( acc )
    }
    return syl
  }
  if (CONSONANTS.includes(next.slice(0,1))) {
    return consonantConsonant(syl, acc+next.slice(0,1), next.slice(1))
  }
  return consonantVocal(syl, acc + next.slice(0,1), next.slice(1))
}

function vocal (syl, acc, next ) {
  if (next.length == 0) {
    if (acc.length > 0) {
      syl.push( acc )
    }
    return syl
  }

  if(VOCALS.includes(acc) && CONSONANTS.includes(next.slice(0,1))) {
    syl.push(acc)
    return begin(syl, next);
  }

  if(CONSONANTS.includes(next.slice(0,1)))
    return vocalConsonant(syl, acc + next.slice(0,1), next.slice(1))
  else
    return begin(syl, next)
}

function consonantVocal(syl, acc, next) {
  if (next.length == 0) {
    syl.push(acc)
    return syl
  }

  if( CONSONANTS.includes(next.slice(0,1)))
    return consonantVocalConsonant(syl, acc + next.slice(0,1), next.slice(1))

  syl.push(acc)
  return begin(syl, next)
}

function consonantConsonant(syl, acc, next) {
  if(next.length == 0) {
    syl.push(acc)
    return syl
  }
  syl.push( acc + next.slice(0,1))
  return begin(syl, next.slice(1))
}

function vocalConsonant(syl, acc, next) {
  syl.push(acc)
  return begin(syl, next)
}

function consonantVocalConsonant(syl, acc, next) {
  if(next.length == 0) {
    syl.push(acc)
    return syl
  }

  if (acc.slice(-1) === next.slice(0,1)) {
    syl.push(acc)
    return begin(syl, next)
  }

  syl.push(acc.slice(0,-1))
  return begin(syl, acc.slice(-1) + next)
}

export {
  lines,
  words,
  syllables,
}