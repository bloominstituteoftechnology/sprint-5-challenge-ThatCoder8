async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
//   // 👇 WORK WORK BELOW THIS LINE 👇

try {

const l = await axios.get(`http://localhost:3003/api/learners`)
const m = await axios. get (`http://localhost:3003/api/mentors`)

document.querySelector('.info').textContent = "No learner is selected"

const learnersorwhatever = l.data
const mtwo = m.data
console.log(learnersorwhatever)
console.log(mtwo) 

const lwithm = learnersorwhatever.map(ls => {
  const mIds = ls.mentors;

  const mforl = mIds.map(mId => {
    return mtwo.find(mentor => mentor.id === mId)
  })


  return {
    ...ls, 
    mentors: mforl,
  }
})

// console.log(lwithm)

const parentDiv = document.querySelector('.cards') 

lwithm.forEach(learner => {
  const cardElement = createCard(learner)
  parentDiv.appendChild(cardElement)
});

// eslint-disable-next-line no-inner-declarations
function createCard (lwithm) {
  const cards = document.createElement('div')
  cards.classList.add(`card`)
  const h3 = document.createElement('h3')
  const email = document.createElement('div')
  const h4 = document.createElement('h4')
  h4.classList.add('closed')
  const ul = document.createElement('ul')

  lwithm.mentors.forEach(mentor => { 
  const li = document.createElement('li')
  li.textContent = `${mentor.firstName} ${mentor.lastName}`
  ul.appendChild(li)
} )

 console.log(cards)

  email.textContent = `${lwithm.email}`
  h3.textContent = `${lwithm.fullName}, ID ${lwithm.id}`
  h4.textContent = 'Mentors'
  
  cards.appendChild(h3) 
  cards.appendChild(email)
  cards.appendChild(h4)
  cards.appendChild(ul)

  cards.addEventListener('click', ()=> {
    if (cards.classList.contains('selected')) {
      cards.classList.remove('selected');
    } else {
      cards.classList.add('selected');
    }

  })

return cards


}


} catch(error) {
console.error(`Error fetching data: `, error.message )
} 

// document.querySelector('.card-selected').addEventListener('click', evt => {})

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY 2023`}
 
//   // 👆 WORK WORK ABOVE THIS LINE 👆


// // ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()

sprintChallenge5()