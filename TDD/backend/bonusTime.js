"use strict"

function bonusTime(salary, bonus) {
  if (bonus) {
    salary *= 10
  }
  return `$${salary}`
}

module.exports = bonusTime
