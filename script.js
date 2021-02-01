const form = document.querySelector('#form')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const output = document.querySelector('#output')
const emailError = document.querySelector('#email-error')

const users = []



class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  // id = Date.now().toString();
  id = Math.floor(Math.random() * 5000).toString();
}

const createUser = (firstName, lastName, email) => {

  const user  = new User(firstName, lastName, email);
  users.push(user)
  
  output.innerHTML += newUser(user)
  console.log(users)
}


const newUser = (user) => {
  const template = `
  <div class="user animate">
    <h3>${user.firstName} ${user.lastName}</h3>
    <p>${user.email}</p>
  </div>
  `
  return template;

}


const validateEmail = email => {
  if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email.value)) {
    console.log('looks giid')
    email.classList.remove('is-invalid')
    email.classList.add('is-valid')
    emailError.innerText = '';
    return true;
  }else {
    console.log('looks bad')
    email.classList.add('is-invalid')
    email.classList.remove('is-valid')
    emailError.innerText = 'Please enter a valid Email Adress'  
    return false;
  }
  
}


// en DYNAMISK valideringsfunktion riktad mot names input, mycket trevligare
const validateNames = (id) => {
  const input = document.querySelector(id);
  const error = document.querySelector(id+'-error');

  if(input.value === '') {
    error.innerText = 'Name cannot be empty'
    input.classList.add('is-invalid')
    input.focus()
    // vore trevligt om man kunde ha focus på första input ifall fler, men hittar ej rätt lösning..
    return false;
  }else if(input.value.length < 2) {
    error.innerText = 'Please write atleast 2 characters'
    input.classList.add('is-invalid')
    return false;
  }else {
    error.innerText = '';
    input.classList.remove('is-invalid')
    input.classList.add('is-valid')
    return true;
  }
}


form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(validateNames('#firstName') && validateNames('#lastName') && validateEmail(email)) {
    console.log('success')
    createUser(firstName.value, lastName.value, email.value)

    form.reset()
  } 

})

// else if(users.contains(email.value))
