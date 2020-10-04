import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import jokeFacade from "./jokeFacade"
import userFacade from "./userFacade"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
function makeListItems() {
  const jokes = jokeFacade.getJokes();
  let jokeLis = jokes.map(joke => `<li>${joke}</li>`).join("\n")
  document.getElementById("jokes").innerHTML = jokeLis;
}
function findJokeById() {
  const id = document.getElementById("jokeIdInput").value
  const joke = jokeFacade.getJokeById(id);
  document.getElementById("singleJoke").innerHTML = joke;
}
function addJoke() {
  const joke = document.getElementById("jokeAddNew").value
  const newjoke = jokeFacade.addJoke(joke);
  document.getElementById("jokeAdded").innerHTML = "Joke added";
  makeListItems()
}
makeListItems()
document.getElementById("jokeIdBtn").addEventListener("click", findJokeById)
document.getElementById("jokeAddBtn").addEventListener("click", addJoke)

/* JS For Exercise-2 below */
 function fetchJoke() {
 const link = "https://studypoints.info/jokes/api/jokes/period/hour";
 fetch(link)
   .then(response => response.json()) //alternativt hent text i stedet for json
   .then(data => document.getElementById("ex2res").innerHTML = JSON.stringify(data,null,2)); //Et forsøg på at skrive det pænt
 }
 document.getElementById("ex2fetch").addEventListener("click", fetchJoke)

/* JS For Exercise-3 below */
function loadUsers() {
userFacade.getUsers()
.then(users => {
  const userRows = users.map(user => `
  <tr>
  <td>${user.id}</td>
  <td>${user.age}</td>
  <td>${user.name}</td>
  <td>${user.gender}</td>
  <td>${user.email}</td>
  </tr>
  `)
  const userRowsAsString = userRows.join("")
  document.getElementById("allUserRows").innerHTML = userRowsAsString;
})
}
loadUsers()

//add user
function addUserFromInput() {
  const newUser = {
    age: document.getElementById("addUser_age").value,
    name: document.getElementById("addUser_name").value,
    gender: document.getElementById("addUser_gender").value,
    email: document.getElementById("addUser_email").value
  }
  userFacade.addUser(newUser)
    .then(user => console.log(user))
    .catch(err =>{
         if(err.status){
           err.fullError.then(e=> console.log(e.detail))
         }
         else{console.log("Network error"); }
      })
      loadUsers()
}
document.getElementById("addUser_btn").addEventListener("click", addUserFromInput)

//edit user
function editUserFromInput() {
  const newUser = {
    age: document.getElementById("editUser_age").value,
    name: document.getElementById("editUser_name").value,
    gender: document.getElementById("editUser_gender").value,
    email: document.getElementById("editUser_email").value
  }
  userFacade.editUser(newUser, document.getElementById("editUser_id").value)
  .then(user => console.log(user))
  .catch(err =>{
    if(err.status){
      err.fullError.then(e=> console.log(e.detail))
    }
    else{console.log("Network error"); }
  })
 loadUsers()
}
document.getElementById("editUser_btn").addEventListener("click", editUserFromInput)

//Find user
function findUserById() {
  const userId = document.getElementById("findUser").value
  userFacade.getUser(userId)
  .then(user => {
      document.getElementById("findUser_p").innerHTML = JSON.stringify(user)
  })
  .catch(err =>{
    if(err.status){
      err.fullError.then(e=> console.log(e.detail))
    }
    else{console.log("Network error"); }
  })
}
document.getElementById("findUser_btn").addEventListener("click", findUserById)

//Delete user
function deleteUserById() {
  const userId = document.getElementById("deleteUser").value
  userFacade.deleteUser(userId)
  .then(user => {
    document.getElementById("deleteUser_p").innerHTML = `User ${userId} succesfully deleted`
  })
  .catch(err =>{
    if(err.status){
      err.fullError.then(e=> console.log(e.detail))
    }
    else{console.log("Network error"); }
  })
  loadUsers()
}
document.getElementById("deleteUser_btn").addEventListener("click", deleteUserById)

/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");