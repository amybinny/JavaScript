let count = 0; // Initialize count to 0

//follower counter
function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count  
  checkCountValue(); // Check count value and display messages
}

//reset follower count
function resetCount() {
  count=0; // Increment the count by 1
  displayCount(); // Display the count 
  resetCountValue();//display reset message 
}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

function resetCountValue() {
  alert("Your Instagram followers is reset!");
}

