console.log('I am runnung')
//Submit Name
const inputName = document.querySelector('[data-js=inputName]')
const buttonSubmit = document.querySelector('[data-js=buttonSubmit]')
buttonSubmit.addEventListener('click', () => {
  console.log(inputName.value)
})
//Show and update list of students
const buttonShowStudents = document.querySelector(
  '[data-js=buttonShowStudents]'
)
const studentList = document.querySelector('[data-js="studentList"]')
buttonShowStudents.addEventListener('click', () => {
  console.log('studentList')
})
//Identify by ID
const buttonsEnergyPercentage = document.querySelectorAll('.btn-percent')
buttonsEnergyPercentage.forEach((buttonEnergy) => {
  buttonEnergy.addEventListener('click', () => {
    console.log(buttonEnergy.dataset.js)
    console.log(inputId.value)
  })
})
const inputId = document.querySelector('[data-js=inputId]')
// Submit individual energy-level
const buttonShowEnergy = document.querySelector('[data-js="buttonShowEnergy"]')
buttonShowEnergy.addEventListener('click', () => {
  console.log('inputId')
})

// Evaluate and Show averagy and indiv enetgy-level
const energyList = document.querySelector('[data-js="energyList"]')
