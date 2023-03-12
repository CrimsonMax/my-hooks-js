// Query Selector
function qs(selector, parent = document) {
  return parent.querySelector(selector)
}

// Query Selector All
function qsAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)]
}

// Global Event Listener
function addGlobalEventListener(
  type,
  selector,
  callback,
  options,
  parent = document
) {
  parent.addEventListener(
    type,
    (event) => {
      if (event.target.matches(selector)) {
        callback(event)
      }
    },
    options
  )
}

// Create Element
function createElement(type, options = {}) {
  const element = document.createElement(type)

  Object.entries(options).forEach(([key, value]) => {
    if (key === 'class') {
      element.classList.add(value)
      return
    }

    if (key === 'dataset') {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue
      })
      return
    }

    if (key === 'text') {
      element.textContent = value
      return
    }

    element.setAttribute(key, value)
  })

  return element
}