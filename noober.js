window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
  // Create a variable for the rides data
  let rides = json

  // Loop through the products data
  for (let i=0; i<rides.length; i++) {

    // Create variables to store rides related information in memory
    let passengerDetail = rides[i].passengerDetails

    let puLocation = rides[i].pickupLocation

    let doLocation = rides[i].dropoffLocation

    let purple = rides[i].purpleRequested

    let numOfPassensers = rides[i].numberOfPassengers

    let serviceLevel
      if (purple === true) {
    serviceLevel = `Noober Purple`
      } else if (numOfPassensers > 3) {
    serviceLevel = `Noober XL`
      } else {
    serviceLevel = `Noober X`
     }[i]

    // Create a variable for the HTML element we're going to add to
    let htmlElement = document.querySelector(`.rides`)

    // Insert HTML into the products element, using the data from each product
    htmlElement.insertAdjacentHTML(`beforeend`, 
    `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class= "fas fa-car-side"></i>
      <span>${serviceLevel}</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerDetail.first} ${passengerDetail.last}</h2>
          <p class="font-bold text-gray-600">${passengerDetail.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${numOfPassensers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${puLocation.address}</p>
          <p>${puLocation.city}, ${puLocation.state} ${puLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${doLocation.address}</p>
          <p>${doLocation.city}, ${doLocation.state} ${doLocation.zip}</p>
        </div>
      </div>
    </div>
      </div>`);
  }
})