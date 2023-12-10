let password = document.getElementById("password");
let hideh5 = document.querySelector("h5");
let hidepassword = password.attributes.type;





hideh5.onclick = ()=>{
  if (hidepassword.value != "text") {
     hidepassword.value = "text";
     hideh5.innerHTML = "Hide password"
  }
  else{
     hidepassword.value = "password"
     hideh5.innerHTML = "Show password"
  }
}