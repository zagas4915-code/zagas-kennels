function message(){
    let parms = {
      first_name : document.getElementById("First-name").value,
      last_name : document.getElementById("Last-name").value,
      my_service : document.getElementById("My-service").value,
      phone_number : document.getElementById("phone").value,
      date : document.getElementById("date").value,
      email : document.getElementById("email").value,
      message : document.getElementById("Message").value,
    }

    emailjs.send("service_n4tof3j","template_u0kr2yj",parms).then(alert("Emai Sent!!"))
}