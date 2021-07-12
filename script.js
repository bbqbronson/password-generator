document.getElementById('generate').addEventListener('click', () => {
  var length = prompt("What do you want the length of charactes to be (8-128 characters)")
  let lowercase = confirm("Do you want lowercases?")
  let varLowercase = lowercase ? 'Yes' : 'No'
  let uppercase = confirm("Do you want uppercases?")
  let varUppercase = uppercase ? 'Yes' : 'No'
  let numeric = confirm("Do you want numerics?")
  let varNumeric = numeric ? 'Yes' : 'No'
  let special = confirm("Do you want special characters?")
  let varSpecial = special ? 'Yes' : 'No'
  
  const lowerAlpha = "abcdefghijklmnopqrstuvwxyz"
  const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789";
  const symbols = "!@#$%^&*_-+=";

  let characters = ""

  if(varLowercase === 'Yes'){
    characters += lowerAlpha
  }
  if(varUppercase === 'Yes'){
    characters += upperAlpha
  }
  if(varNumeric === 'Yes'){
    characters =+ numbers
  }
  if(varSpecial === 'Yes'){
    characters += symbols
  }

  let password = ""
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  alert(password)
})
