// First Element
function firstElement(array, n = 1) {
  if (n === 1) return array[0]

  return array.filter((_, index) => index < n)
}

// Last Element
function lastElement(array, n = 1) {
  if (n === 1) return array[array.length - 1]

  return array.filter((_, index) => array.length - index <= n)
}

// Random Element
function randomElement(array) {
  return array[randomBetween(0, array.length - 1)]
}

// Objects By Key
function byKey(array, key) {
  return array.map((elem) => elem[key])
}

// Objects Group By Key
function groupBy(array, key) {
  return array.reduce((group, element) => {
    const keyValue = element[key]

    return {
      ...group,
      [keyValue]: [...(group[keyValue] ?? []), element],
    }
  })
}