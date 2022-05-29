document.getElementById("registration").addEventListener("submit",function(event){
    event.preventDefault();

    let errors = {};
    let forms = event.target;

    // let username = document.querySelector("[name = "username" ]").value;
    let username = document.getElementById("username").value;


    if( username.length < 4 || username == " "){
        errors.username = "Username can not be empty and must be more then 4 character";
    }
    let password = document.querySelector("[name = 'password']").value;
    let password2 = document.querySelector("[name = 'password2']").value;


      if(password != password2 || password == "") {

        errors.password  = "Password can't be empty";
        errors.password2 = "Passwords do't match";
     }



     let agree = document.querySelector("[name = 'agree']").checked;
     
     
        if(!agree){
         errors.agree = " you must egree our condition";
     }


     let ckeckedage = false;
     forms.querySelectorAll("[name = 'age']").forEach(element => {
         if(element.checked){
            ckeckedage = true;
         }
     });

     if(ckeckedage == false){
         errors.age = "pleace select your age";
     }
     
     console.log(errors);


     forms.querySelectorAll(".error-text").forEach(item=>{
         item.innerHTML = " ";
     });


     for( let item in errors){
         console.log(item);
        let errorSpan = document.getElementById("error_" + item);
        if(errorSpan){
            errorSpan.textContent = errors[item];
        }

     }
     if(Object.keys(errors).length == 0){
         forms.submit();
     }

});

let passwordshow = document.getElementById("password2");
let toggleicon = document.getElementById("toggleicon");
showhidepassword = () => {
   if (passwordshow.type == "password"){
    passwordshow.setAttribute("type","text");
    toggleicon.classList.add("fa-eye-slash")
   } else{
    toggleicon.classList.remove("fa-eye-slash");
    passwordshow.setAttribute("type","password");

   }
}
toggleicon.addEventListener("click", showhidepassword );

function validation(){
    let emailfield = document.getElementById("emailmy").value;
    let emailSpan = document.getElementById("emailText");
    let emailvalidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(emailfield.match(emailvalidation)){
        emailSpan.innerHTML = "your email are corect";
        emailSpan.style.color = "green";
    } else {
        emailSpan.innerHTML = "your email are not corect";
        emailSpan.style.color = "red";
    }

}