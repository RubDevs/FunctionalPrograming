const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

let description = document.getElementById('description')
let carbs = document.getElementById('carbs')
let protein = document.getElementById('protein')
let calories = document.getElementById('calories')
let totalCarbs = document.getElementById('totalCarbs')
let totalProtein = document.getElementById('totalProtein')
let totalCalories = document.getElementById('totalCalories')

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
    updateTotals()
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

const updateTotals = () => {
  let carbs = 0, protein = 0, calories = 0
  list.map((item) => {
    carbs += item.carbs,
    protein += item.protein,
    calories += item.calories
  })
  totalCarbs.textContent = carbs
  totalProtein.textContent = protein
  totalCalories.textContent = calories
}

const cleanForm = () => {
  description.value = ''
  carbs.value = ''
  protein.value = ''
  calories.value = ''
}

//function composition
const tag = (t) => {
  if(typeof t === 'string'){
    tagAttrs({tag: t})
  }else{
    tagAttrs(t)
  }
}

const tableRowTag = tag('tr')
const tableRow = items => compose(tableRowTag,tableCells)(items)

const tableCell = tag('td')
const tableCells = items => items.map(tableCell).join('')

const attrsToString = (obj = {}) => {
  const keys = Object.keys(obj)
  const attrs = []

  for(let i=0;i<keys.length;i++){
    let attr = keys[i]
    attrs.push(`${attr}="${obj[attr]}"`)
  }
  const string = attrs.join('')
  return string
}

const tagAttrs = obj => (content = "") =>
  `<${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`

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

