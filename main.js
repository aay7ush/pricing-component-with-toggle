const toggleBtn = document.getElementById("toggle")
const cost1 = document.getElementById("cost-1")
const cost2 = document.getElementById("cost-2")
const cost3 = document.getElementById("cost-3")

const annuallyCosts = [199.99, 249.99, 399.99]
const monthlyCosts = [19.99, 24.99, 39.99]

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("after:left-1")
  toggleBtn.classList.toggle("after:left-7")

  if (toggleBtn.classList.contains("after:left-1")) {
    cost1.innerText = annuallyCosts[0]
    cost2.innerText = annuallyCosts[1]
    cost3.innerText = annuallyCosts[2]
  } else {
    cost1.innerText = monthlyCosts[0]
    cost2.innerText = monthlyCosts[1]
    cost3.innerText = monthlyCosts[2]
  }
})
