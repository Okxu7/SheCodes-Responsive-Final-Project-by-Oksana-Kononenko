/* <form>
  <input type="text" id="email" />
    </form>
<script>

function signUp(event) {
  event.preventDefault();
  let input = document.querySelector("#email");
  console.log(input.value);
}
let form = document.querySelector("form");
form.addEventListener("submit", signUp);
</script>} */

function sendMail(event) {
  event.preventDefault();
  let input = document.querySelector("#email");
  let input2 = document.querySelector("#message");
  console.log(input.value);
  console.log(input2.value);

  const serviceID = "service_q9xso4n";
  const templateID = "template_6wtcbiq";

  var params = {
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send(serviceID, templateID, params).then(function (response) {
    console.log("SUCCESS!", response.status, response.text);
  });

  alert("Success!");
}

let form = document.querySelector("form");
form.addEventListener("submit", sendMail);
