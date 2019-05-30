// variables
let loanAmt = document.querySelector("#loan")
let interestAmt = document.querySelector("#interest")
let yearsToPay = document.querySelector("#years")
let monthToPay = document.querySelector("#monthPay");
let totalPay = document.querySelector("#totalPay");
let interestPaid = document.querySelector("#interestPaid");
let calculateBtn = document.querySelector("#calculate");
let resultDiv = document.querySelector("#result");
let loader = document.querySelector(".loader");

//helper functions
let totalMonths = years =>12*years;
let payGrowth = (rate, months) => Math.pow(1 + rate, months);
let totalPayment =  (principal, rate, year) => payGrowth(rate,year)* principal;

calculateBtn.addEventListener("click", repaymentCalculation)

//callBack
function repaymentCalculation(event){
  event.preventDefault();
  let principal = +loanAmt.value;
  let interestRate = +interestAmt.value/100/12;
  let mnthAvailable = totalMonths(+yearsToPay.value);

  let x = payGrowth(interestRate, mnthAvailable);
  let installment = principal*x*interestRate/(x-1);
  let totalAmtDue = installment* mnthAvailable;
  let totalInterest = totalAmtDue - principal;

  monthToPay.value = installment.toFixed(2);
  totalPay.value = totalAmtDue.toFixed(2);
  interestPaid.value = totalInterest.toFixed(2);
  loader.classList.remove("d-none");
  setTimeout(showResult, 3000);
}

function showResult(){
  loader.classList.add("d-none");
  resultDiv.classList.remove("d-none");
}