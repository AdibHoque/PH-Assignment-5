let buttonIds = [];

for (let i = 'a'.charCodeAt(0); i <= 'j'.charCodeAt(0); i++) {
  for (let j = 1; j <= 4; j++) {
    buttonIds.push(String.fromCharCode(i) + j);
  }
}
const seatIds = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
let usedButtons = []
let discount = 0
const seatsContainer = document.getElementById("seats-container")
const coupon = document.getElementById("coupon")
const couponfield = document.getElementById("couponfield")
const couponapply = document.getElementById("couponapply")
const discountfield = document.getElementById("discountfield")
const discountprice = document.getElementById("discountprice")
const grandTotal = document.getElementById("grandtotal")
const numba = document.getElementById("number")
const next = document.getElementById("next")
placeSeats()
function placeSeats() {
  seatIds.forEach(letter => {
    seatsContainer.innerHTML += `<div
    class="px-6 py-2 max-w-5 flex justify-center items-center col-span-1 max-sm:col-span-2"
  >
    <h3 class="text-[#03071280] text-lg font-inter font-medium">
      ${letter}
    </h3>
  </div>

  <div
    id="${letter.toLowerCase()}1"
    class="btn bg-[#F7F8F8] rounded-xl px-6 py-2 max-w-20 max-[400px]:px-3 flex justify-center col-span-2"
  >
    <h3 class="text-[#03071280] text-lg font-inter font-medium">
      ${letter}1
    </h3>
  </div>
  <div
    id="${letter.toLowerCase()}2"
    class="btn bg-[#F7F8F8] rounded-xl px-6 py-2 max-w-20 max-[400px]:px-3 flex justify-center col-span-2"
  >
    <h3 class="text-[#03071280] text-lg font-inter font-medium">
      ${letter}2
    </h3>
  </div>
  <div class="w-full h-full col-span-1"></div>
  <div
    id="${letter.toLowerCase()}3"
    class="btn bg-[#F7F8F8] rounded-xl px-6 py-2 max-w-20 max-[400px]:px-3 flex justify-center col-span-2"
  >
    <h3 class="text-[#03071280] text-lg font-inter font-medium">
      ${letter}3
    </h3>
  </div>
  <div
    id="${letter.toLowerCase()}4"
    class="btn bg-[#F7F8F8] rounded-xl px-6 py-2 max-w-20 max-[400px]:px-3 flex justify-center col-span-2"
  >
    <h3 class="text-[#03071280] text-lg font-inter font-medium">
      ${letter}4
    </h3>
  </div>`
  })
}

function addTransaction(id) {
  const transaction = document.getElementById("transaction")
  const newDiv = document.createElement("div")
  newDiv.classList.add("flex", "justify-between")

  const seat = document.createElement("h5")
  seat.innerText = id.charAt(0).toUpperCase() + id.slice(1) + "‎ ‎‎ ‎‎ ‎ ‎ ‎ ‎ ‎ "
  newDiv.appendChild(seat)

  const _class = document.createElement("h5")
  _class.innerText = "Economy"
  _class.classList.add("text-center")
  newDiv.appendChild(_class)

  const price = document.createElement("h5")
  price.innerText = "550"
  newDiv.appendChild(price)

  transaction.appendChild(newDiv)
  usedButtons.push("id")
  numberChanges()
}

function numberChanges() {
  const seatsLeft = document.getElementById("seats")
  const seatsBought = document.getElementById("seatbought")
  const totalPrice = document.getElementById("totalprice")
  const grandTotal = document.getElementById("grandtotal")


  seatsLeft.innerText = parseInt(seatsLeft.innerText) - 1
  seatsBought.innerText = parseInt(seatsBought.innerText) + 1
  totalPrice.innerText = 550 * usedButtons.length
  grandTotal.innerText = 550 * usedButtons.length
}

buttonIds.forEach(id => {
  document.getElementById(id).addEventListener("click", function () {

    const btn = document.getElementById(id)
    if (btn.classList.contains("bg-[#F7F8F8]") && usedButtons.length < 4) {
      btn.classList.replace("bg-[#F7F8F8]", "bg-primary")
      btn.children[0].classList.replace("text-[#03071280]", "text-white")
      if (usedButtons.length == 3) couponapply.removeAttribute("disabled")
      if (numba.value) next.removeAttribute("disabled")
      addTransaction(id);
    }
    else if (usedButtons.length >= 4) alert("Black Marketing not allowed!\nYou cannot buy more than 4 tickets.")

  })
})

couponapply.addEventListener("click", function () {
  if (!coupon.value) {
    return alert("Kindly Provide a Coupon Code.")
  }
  if (!(usedButtons.length == 4)) {
    return alert("You need to buy 4 tickets for discount.")
  }
  if (!(coupon.value == "NEW15") && !(coupon.value == "Couple 20")) {
    return alert("Invalid Coupon.\nKindly provide a valid one for discount.")
  }

  if (coupon.value && coupon.value == "NEW15" || coupon.value == "Couple 20") {
    discount = ((550 * usedButtons.length) / 100) * (coupon.value == "NEW15" ? 15 : 20)
    discountprice.innerText = discount
    grandTotal.innerText = (550 * usedButtons.length) - discount
    couponfield.classList.add("hidden")
    discountfield.classList.remove("hidden")
  }

})

numba.addEventListener("input", function () {
  if (usedButtons.length > 0 && numba.value) {
    next.removeAttribute("disabled")
  }
  else {
    next.setAttribute("disabled", true)
  }
})
{/*  */ }
