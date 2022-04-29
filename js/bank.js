// working with deposit

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const currentDepo = parseFloat(
      document.getElementById("deposit").innerText
    );
    const inputDepo = parseFloat(
      document.getElementById("deposit-input").value
    );

    if (inputDepo <= 0) {
      window.alert("Enter Positive Amount");
    } else {
      document.getElementById("deposit-input").value = "";
      const totalDepo = currentDepo + inputDepo;

      document.getElementById("deposit").innerText = totalDepo;

      const currentBalance = parseFloat(
        document.getElementById("balance").innerText
      );
      document.getElementById("balance").innerText = currentBalance + inputDepo;
    }
  });

// working with withdraw and balance
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // current withdraw Balance

    const currentDraw = parseFloat(
      document.getElementById("withdraw").innerText
    );

    // currentBalance
    const currentBalance = parseFloat(
      document.getElementById("balance").innerText
    );
    // ----------------
    const inputDraw = parseFloat(
      document.getElementById("withdraw-input").value
    );
    if (inputDraw <= 0) {
      window.alert("Enter Positive Amount");
    } else {
      document.getElementById("withdraw-input").value = "";
      if (currentBalance >= inputDraw && currentBalance >= 0) {
        const totatDraw = currentDraw + inputDraw;
        document.getElementById("withdraw").innerText = totatDraw;

        const finalBalance = currentBalance - inputDraw;
        document.getElementById("balance").innerText = finalBalance;
      } else {
        window.alert("Not Enough Money!🥲Deposit First!!");
      }
    }
  });

// logout

document.getElementById("logout-button").addEventListener("click", function () {
  window.location.href = "index.html";
});
