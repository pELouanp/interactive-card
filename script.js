const errorName = document.querySelector(".errorName");
const errorNumber = document.querySelector(".errorNumber");
const errorDate = document.querySelector(".errorDate");
const errorCvc = document.querySelector(".errorCvc");
const inputName = document.querySelector(".name");
const inputNumber = document.querySelector(".number");
const inputMm = document.querySelector(".mm");
const inputYy = document.querySelector(".yy");
const inputCvc = document.querySelector(".cvc");
const cardName = document.querySelector(".cardName");
const cardNumber = document.querySelector(".cardNumber");
const cardDate = document.querySelector(".cardDate");
const cvcCard = document.querySelector(".cvcCard");

const after = document.querySelector(".after");
const form = document.querySelector("form");
const btn = document.querySelector("button");

inputMm.addEventListener("keydown", (event) => {
  const number = event.key;

  const formatNb = (inputNb) => {
    if (number > 48 || number < 57) {
      inputNb.maxLength = 2;
      if (inputMm.value.length == 2) {
        inputYy.focus();
      }
    } else {
      inputNb.maxLength = 0;
    }
  };
  formatNb(inputMm);
});

inputYy.addEventListener("keydown", (event) => {
  const number = event.key;

  const formatNb = (inputNb) => {
    if (number > 48 || number < 57) {
      inputNb.maxLength = 2;
      if (inputYy.value.length == 2) {
        inputCvc.focus();
      }
    } else {
      inputNb.maxLength = 0;
    }
  };
  formatNb(inputYy);
});

inputCvc.addEventListener("keydown", (event) => {
  const number = event.key;

  const formatNb = (inputNb) => {
    if (number > 48 || number < 57) {
      inputNb.maxLength = 3;
    } else {
      inputNb.maxLength = 0;
    }
  };
  formatNb(inputCvc);
});

inputName.addEventListener("keydown", (event) => {
  const letter = event.key;

  const formatNb = (inputNb) => {
    if (
      letter !== "0" &&
      letter !== "1" &&
      letter !== "2" &&
      letter !== "3" &&
      letter !== "4" &&
      letter !== "5" &&
      letter !== "6" &&
      letter !== "7" &&
      letter !== "8" &&
      letter !== "9"
    ) {
      inputNb.maxLength = 19;
    } else {
      inputNb.maxLength = 0;
    }
  };
  formatNb(inputName);
});

inputNumber.addEventListener("keydown", (event) => {
  const number = event.key;

  const formatNb = (inputNb) => {
    if (number > 48 || number < 57) {
      inputNb.maxLength = 19;
    } else {
      inputNb.maxLength = 0;
    }
  };
  formatNb(inputNumber);

  if (
    inputNumber.value.length == 4 ||
    inputNumber.value.length == 9 ||
    inputNumber.value.length == 14
  ) {
    inputNumber.value += " ";
  }
});

const errorHidden = (vide) => {
  vide.textContent = "";
};
const redHidden = (vide) => {
  vide.classList.remove("visibleBorder");
};

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputName.value.length < 4) {
    errorName.textContent = "Please enter more caracters";
    inputName.classList.add("visibleBorder");
    errorName.classList.add("visibleRed");
  } else {
    errorHidden(errorName);
    redHidden(inputName);
  }

  if (inputNumber.value.length < 19) {
    errorNumber.textContent = "Wrong format, numbers only";
    inputNumber.classList.add("visibleBorder");
    errorNumber.classList.add("visibleRed");
  } else {
    errorHidden(errorNumber);
    redHidden(inputNumber);
  }

  if (
    inputMm.value.length < 1 ||
    inputMm.value == "0" ||
    inputMm.value == "00"
  ) {
    errorDate.textContent = "Please enter more caracters";
    inputMm.classList.add("visibleBorder");
  } else {
    redHidden(inputMm);
  }

  if (inputYy.value.length < 2 || inputYy.value == "0" || inputYy.value < 23) {
    errorDate.textContent = "Please enter more caracters";
    inputYy.classList.add("visibleBorder");
    errorDate.classList.add("visibleRed");
  } else {
    errorDate.style.color = "#FFF";
    redHidden(inputYy);
  }

  if (inputCvc.value.length < 3) {
    errorCvc.textContent = "Please enter more caracters";
    inputCvc.classList.add("visibleBorder");
    errorCvc.classList.add("visibleRed");
  } else {
    errorHidden(errorCvc);
    redHidden(inputCvc);
  }
  if (
    inputName.value.length > 4 &&
    inputNumber.value.length == 19 &&
    inputMm.value.length >= 1 &&
    inputYy.value.length > 1 &&
    inputCvc.value.length > 2
  ) {
    cardName.textContent = inputName.value.toLocaleUpperCase();
    cardNumber.textContent = inputNumber.value;
    if (inputMm.value.length == 1) {
      cardDate.textContent = `0${inputMm.value}/${inputYy.value}`;
    } else {
      cardDate.textContent = `${inputMm.value}/${inputYy.value}`;
    }
    cvcCard.textContent = inputCvc.value;
    form.style.display = "none";
    after.style.display = "block";
  }
});
