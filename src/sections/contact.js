import { serviceID, templateID, userID } from '../secrets/emailjs'

function generateContact() {
  console.log("generating contact");
  let container = document.getElementById('contact-container');
  container.setAttribute('style', 'display: flex;');
  container.setAttribute('class', 'visible');
  let formContainer = document.getElementById('contact-form-container');
  let form = `<div id='contact-div'>
                <form class='cf' id='form'>
                  <div class='half left cf'>
                    <input type='text' id='input-name' placeholder='Name' name='sender_name'>
                    <input type='email' id='input-email' placeholder='Email address' name='sender_mail'>
                    <input type='text' id='input-subject' placeholder='Subject' name='subject'>
                  </div>
                  <div class='half right cf'>
                    <textarea name='message' type='text' id='input-message' placeholder='Message'></textarea>
                  </div>  
                  <input type='submit' value='Submit' id='input-submit'>
                </form>
              </div>`
  formContainer.innerHTML = form;

  const btn = document.getElementById('input-submit');
  const inputName = document.getElementById('input-name');
  const inputEmail = document.getElementById('input-email');
  const inputSubject = document.getElementById('input-subject');
  const inputMessage = document.getElementById('input-message');
  let fields = [inputName, inputEmail, inputSubject, inputMessage];
  

  document.getElementById('form')
   .addEventListener('submit', function(e) {
     e.preventDefault();

     btn.value = 'Sending...';

     emailjs.sendForm(serviceID, templateID, this, userID)
      .then(() => {
        btn.value = 'Send';
        alert('Sent!');
        for (let i in fields) {
          fields[i].value = '';
        }
      }, (err) => {
        btn.value = 'Send';
        alert(JSON.stringify(err));
      });
  });

}

export {
  generateContact,
}