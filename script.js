
const buttonIds = ["a1", "a2", "a3", "a4", "b1", "b2", "b3", "b4", "c1", "c2", "c3", "c4", "d1", "d2", "d3", "d4"]
let usedButtons = []
let discount = 0
const coupon = document.getElementById("coupon")
const couponfield = document.getElementById("couponfield")
const couponapply = document.getElementById("couponapply")
const discountfield = document.getElementById("discountfield")
const discountprice = document.getElementById("discountprice")
const grandTotal = document.getElementById("grandtotal")
const numba = document.getElementById("number")
const next = document.getElementById("next")

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
    next.setAttribute("disabled")
  }
})
