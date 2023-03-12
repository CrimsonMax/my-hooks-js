// Delayed Promise
function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

// Random Number
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Save Data for Reuse
function memo(callback) {
  const cache = new Map

  return (...args) => {
    const key = JSON.stringify(args)

    if (cache.has(key)) return cache.get(key)

    const result = callback(...args)

    cache.set(key, result)

    return result
  }
}