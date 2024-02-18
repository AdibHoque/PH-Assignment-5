
const buttonIds = ["a1", "a2", "a3", "a4", "b1", "b2", "b3", "b4", "c1", "c2", "c3", "c4", "d1", "d2", "d3", "d4"]
let usedButtons = []
let discount = 0

function addTransaction(id) {
  const transaction = document.getElementById("transaction")

  const seat = document.createElement("h5")
  seat.innerText = id.charAt(0).toUpperCase() + id.slice(1)
  seat.classList.add("w-1/3")
  transaction.appendChild(seat)

  const _class = document.createElement("h5")
  _class.innerText = "‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ Economy"
  _class.classList.add("w-1/3", "text-center")
  transaction.appendChild(_class)

  const price = document.createElement("h5")
  price.innerText = "550"
  price.classList.add("w-1/3", "text-end")
  transaction.appendChild(price)
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
    console.log(id + "is clicked")
    const btn = document.getElementById(id)
    if (btn.classList.contains("bg-[#F7F8F8]") && usedButtons.length < 4) {
      btn.classList.replace("bg-[#F7F8F8]", "bg-primary")
      btn.children[0].classList.replace("text-[#03071280]", "text-white")
      addTransaction(id);
    }
    else if (usedButtons.length >= 4) alert("Black Marketing not allowed!\nYou cannot buy more than 4 tickets.")

  })
})

document.getElementById("couponapply").addEventListener("click", function () {
  console.log(usedButtons.length)
  const coupon = document.getElementById("coupon")
  const couponfield = document.getElementById("couponfield")
  const discountfield = document.getElementById("discountfield")
  const discountprice = document.getElementById("discountprice")
  const grandTotal = document.getElementById("grandtotal")

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