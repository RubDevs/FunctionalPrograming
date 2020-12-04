const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

let description = document.getElementById('description')
let carbs = document.getElementById('carbs')
let protein = document.getElementById('protein')
let calories = document.getElementById('calories')

let list = []

const validateInputs = () => {
  description.value ? '' : description.classList.add('is-invalid')
  carbs.value ? '' : carbs.classList.add('is-invalid')
  protein.value ? '' : protein.classList.add('is-invalid')
  calories.value ? '' : calories.classList.add('is-invalid')

  if(description.value && calories.value && carbs.value && protein.value){
    addToList()
    console.log(list)
    cleanForm()
  }
}

const addToList = () => {
  const newElement = {
    description: description.value,
    carbs: parseInt(carbs.value),
    protein: parseInt(protein.value),
    calories: parseInt(calories.value)
  }

  list.push(newElement)
}

const cleanForm = () => {
  description.value = ''
  carbs.value = ''
  protein.value = ''
  calories.value = ''
}

description.addEventListener('keypress',()=>{
  description.classList.remove('is-invalid')
})

carbs.addEventListener('keypress',()=>{
  carbs.classList.remove('is-invalid')
})

protein.addEventListener('keypress',()=>{
  protein.classList.remove('is-invalid')
})

calories.addEventListener('keypress',()=>{
  calories.classList.remove('is-invalid')
})