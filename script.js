let rating = null;

function setRating(value, event) {
  rating = value;

  if (document.querySelector("#ratings input.active") != null) {
    document.querySelector("#ratings input.active").classList.remove("active");
  }
  event.target.classList.add("active");
}

function showThankYou(event) {
  event.preventDefault();
  if (rating === null) {
    let heading = document.querySelector("h1");
    heading.innerHTML = `<small>Select a rating to submit 😢</small>`;
  } else {
    let display = document.querySelector("#main-display");
    display.innerHTML = `
    <div class="thank-you-display">

  <img src="images/illustration-thank-you.svg" alt="Thank you image">
  <div class="displayed-score-message">You selected <span id="selected-rating-score">${rating}</span> out of 5</div> 

  <h2>Thank you!</h2>

  <p class="thank-you-message">We appreciate you taking the time to give a rating.<br /> If you ever need more support, 
  don’t hesitate to <br /> get in touch!</p>
</div>
`;
  }
}

let submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", showThankYou);