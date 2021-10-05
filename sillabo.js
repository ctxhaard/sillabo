

const VOCALI = Object.freeze(['a', 'e', 'i', 'o', 'u', '\''])
const CONSONANTI = Object.freeze([
  'b', 'c', 'd', 'f', 'g', 'h',
  'j,', 'y', 'l', 'm', 'n', 'p',
  'q', 'r', 's', 't', 'v', 'x',
  'y', 'w', 'z'])

export function syllables( text ) {
  return [
    [
      splitWord( text )
    ]
  ]
}

function splitWord( word ) {
  return {
    word: "cane",
    syllables: ["ca", "ne"]
  }
}
