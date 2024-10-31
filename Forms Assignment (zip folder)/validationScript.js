let form = document.getElementById('myForm')
let input = document.querySelector('input')
form.addEventListener('submit', function (e){
  let inputregex = /^[a-zA-z0-9 ]+$/
  console.log(input.value)
  let check = inputregex.test(input.value)
if (!check) {
  window.alert("Input is not alphanumeric, Try again :3:3")
  e.preventDefault()
} else {
  window.alert("YAYAYYAYAYY you did it :3:3")
}
})