export default function sentenceCase(str: string) {
  if (typeof str === 'string') {
    return str
      .split(' ')
      .map((word) =>
        word
          .split('')
          .map((letter, idx) => (idx === 0 ? letter.toUpperCase() : letter))
          .join('')
      )
      .join(' ')
  }
}
