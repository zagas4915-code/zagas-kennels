function sendMail(){
    let parms = {
      name : document.getElementById("Full-name").value,
      email : document.getElementById("Email-address").value,
      subject : document.getElementById("Subject").value,
      message : document.getElementById("Message").value,
      class : document.getElementById("class").value,
    }

    emailjs.send("service_n4tof3j","template_64lqi5s",parms).then(alert("Emai Sent!!"))
}

function Mail(){
    let parms = {
      name : document.getElementById("Fullname").value,
      email : document.getElementById("Emailaddress").value,
      subject : document.getElementById("SUbject").value,
      message : document.getElementById("MEssage").value,
    }

    emailjs.send("service_n4tof3j","template_64lqi5s",parms).then(alert("Emai Sent!!"))
}