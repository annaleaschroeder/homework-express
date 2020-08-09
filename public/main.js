console.log('I am runnung')
//Submit Name
const inputName = document.querySelector('[data-js=inputName]')
const buttonSubmit = document.querySelector('[data-js=buttonSubmit]')
const targetNameList = document.querySelector('[data-js="studentList"]')
const inputId = document.querySelector('[data-js=inputId]')
const buttonShowEnergy = document.querySelector('[data-js="buttonShowEnergy"]')

buttonSubmit.addEventListener('click', () => {
  fetch('http://localhost:4002/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: inputName.value }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data.request.name))
})
//Show and update list of students
const buttonShowStudents = document.querySelector(
  '[data-js=buttonShowStudents]'
)
const studentList = document.querySelector('[data-js="studentList"]')
buttonShowStudents.addEventListener('click', () => {
  fetch('http://localhost:4002/students')
    .then((res) => res.json())
    .then((data) => {
      targetNameList.innerHTML = ''
      data.students.forEach((student) => {
        const el = document.createElement('li')
        el.innerText = student.name + '\n' + student.id
        targetNameList.appendChild(el)
      })
    })
})
//Identify by ID
const buttonsEnergyPercentage = document.querySelectorAll('.btn-percent')
buttonsEnergyPercentage.forEach((buttonEnergy) => {
  buttonEnergy.addEventListener('click', () => {
    const id = inputId.value
    const energylevel = buttonEnergy.dataset.js
    fetch('http://localhost:4002/energy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, energylevel }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  })
})

// Submit individual energy-level
buttonShowEnergy.addEventListener('click', () => {
  console.log('inputId')
})

// Evaluate and Show averagy and indiv enetgy-level
const energyList = document.querySelector('[data-js="energyList"]')
