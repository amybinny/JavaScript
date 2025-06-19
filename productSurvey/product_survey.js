//function to capture all the input details and display them
function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('experinceText').value;

    //display alert message when sibmitted
    alert('Thank you for your valuable feedback')

    //Display user details on webpage
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperince').innerHTML = experience;

    //display which is hidden is made visible only after the user clicks on the submit button
    document.getElementById('userInfo').style.display = 'block';
}

//assigning constant to id submitBtn available in HTML
const submitButton=document.getElementById('submitBtn');

//executing submitFeedback on click of submitButton
submitButton.onclick = submitFeedback;

//Implement key press (here Enter) to submit feedback
document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
 });