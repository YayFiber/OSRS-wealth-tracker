const numberCleaner = (number) => {
  if (number === 0) {
    return number
  }
  if (number.includes('b')) {
    return number.split('').filter(letter => letter !== 'b').join('') * 1000000000
  } else if (number.includes('m')) {
    return number.split('').filter(letter => letter !== 'm').join('') * 1000000
  } else if (number.includes('k')) {
    return number.split('').filter(letter => letter !== 'k').join('') * 1000
  } else {
    return number
  }
}

export default numberCleaner