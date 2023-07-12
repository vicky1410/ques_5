const accnum = document.getElementById("accnum");
accnum.addEventListener("input", function () {
  return accnum.value;
});
let balan = document.getElementById("balance");

let balance = 400;

function detail_show() {
  let name = document.getElementById("name");
  const acnum = document.getElementById("acnum");

  name.innerHTML = "Name : Vignesh J";
  acnum.innerHTML = "Account Number : " + accnum.value;
  balan.innerHTML = "Balance : " + balance;
}

function wid_Am() {
  let wid = document.getElementById("wid").value;

  if (wid < balance) {
    balance = balance - wid;
    detail_show();
    document.getElementById("wl").innerHTML =
      "Widthdrawl Amount : " + wid + " Balance Amount : " + balance;
    balan.innerHTML = "Balance : " + balance;
    return balance;
  } else {
    document.getElementById("wl").innerHTML = "Amount is insufficient";
  }
}
function dep_Am() {
  //   let balance = 400;
  let dep = document.getElementById("dep").value;

  balance = parseInt(balance) + parseInt(dep);

  document.getElementById("d").innerHTML =
    "Widthdrawl Amount : " + dep + " Balance Amount : " + balance;
  balan.innerHTML = "Balance : " + balance;
  return balance;
}
