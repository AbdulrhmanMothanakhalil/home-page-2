


let countdowndate = new Date("AUG 10,2023 23:59:00").getTime();

let counter = setInterval(() => {
    let datenow = new Date().getTime();


    let datediff = countdowndate - datenow;


    let days = Math.floor(datediff / (1000 * 60 * 60 * 24));


    let hours = Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutes = Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((datediff % (1000 * 60)) / 1000);

    

 

    //show days text in html page

    document.querySelector("#days").innerHTML= days;
    document.querySelector("#hours").innerHTML= hours < 10 ? `0${hours}`:hours;
    document.querySelector("#minutes").innerHTML= minutes < 10 ? `0${minutes}`:minutes;
    document.querySelector("#seconds").innerHTML= seconds < 10 ? `0${seconds}`:seconds ;

  




},1000)





function getvalue(){
    let input = document.querySelector("#input");




}






    

// Get a reference to the button element
const button = document.getElementById('#btn10');

// Attach an event listener to the button
button?.addEventListener('click', () => {
  // Make the API request
  fetch('https://dashboard.pano-snap.com/api/project/read.php')
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      // Process the API response data
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
});

