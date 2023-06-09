// International Number Formatter
const NUMBER_FORMATTER = new Intl.NumberFormat(undefined) // string = world zone, undefined = by system

function formatNumber(number) {
  return NUMBER_FORMATTER.format(number)
}

// Currency Formatter
const CURRENCY_FORMATTER = new Intl.NumberFormat(
  undefined,
  {
    currency: 'USD',
    style: 'currency',
  }
)

function formatCurrency(number) {
  return CURRENCY_FORMATTER.format(number)
}

// Compact Number
const COMPACT_NUMBER_FORMATTER = new Intl.NumberFormat(
  undefined,
  {
    notation: 'compact'
  }
)

function formatCompactNumber(number) {
  return COMPACT_NUMBER_FORMATTER.format(number)
}

// Time to words
const DIVISIONS = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
]

const RELATIVE_DATE_FORMATTER = new Intl.RelativeTimeFormat(
  undefined,
  {
    numeric: "auto",
  }
)

function formatRelativeDate(toDate, fromDate = new Date()) {
  let duration = (toDate - fromDate) / 1000

  for (let i = 0; i <= DIVISIONS.length; i++) {
    const division = DIVISIONS[i]

    if (Math.abs(duration) < division.amount) {
      return RELATIVE_DATE_FORMATTER.format(Math.round(duration), division.name)
    }
    
    duration /= division.amount
  }
}