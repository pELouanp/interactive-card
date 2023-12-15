// Sélection des éléments du DOM
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

// Gestion de la frappe pour le champ du mois
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

// Gestion de la frappe pour le champ de l'année
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

// Gestion de la frappe pour le champ CVC
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

// Gestion de la frappe pour le champ du nom
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

// Gestion de la frappe pour le champ du numéro de carte
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

// Fonction utilitaire : masquer le message d'erreur
const errorHidden = (vide) => {
  vide.textContent = "";
};

// Fonction utilitaire : supprimer la bordure rouge
const redHidden = (vide) => {
  vide.classList.remove("visibleBorder");
};

// Gestionnaire d'événement pour le clic sur le bouton de soumission
btn.addEventListener("click", (e) => {
  e.preventDefault();

  // Validation du champ du nom
  if (inputName.value.length < 4) {
    errorName.textContent = "Veuillez entrer plus de caractères";
    inputName.classList.add("visibleBorder");
    errorName.classList.add("visibleRed");
  } else {
    errorHidden(errorName);
    redHidden(inputName);
  }

  // Validation du champ du numéro de carte
  if (inputNumber.value.length < 19) {
    errorNumber.textContent = "Format incorrect, chiffres uniquement";
    inputNumber.classList.add("visibleBorder");
    errorNumber.classList.add("visibleRed");
  } else {
    errorHidden(errorNumber);
    redHidden(inputNumber);
  }

  // Validation du champ du mois
  if (
    inputMm.value.length < 1 ||
    inputMm.value == "0" ||
    inputMm.value == "00"
  ) {
    errorDate.textContent = "Veuillez entrer plus de caractères";
    inputMm.classList.add("visibleBorder");
  } else {
    redHidden(inputMm);
  }

  // Validation du champ de l'année
  if (inputYy.value.length < 2 || inputYy.value == "0" || inputYy.value < 23) {
    errorDate.textContent = "Veuillez entrer plus de caractères";
    inputYy.classList.add("visibleBorder");
    errorDate.classList.add("visibleRed");
  } else {
    errorDate.style.color = "#FFF";
    redHidden(inputYy);
  }

  // Validation du champ CVC
  if (inputCvc.value.length < 3) {
    errorCvc.textContent = "Veuillez entrer plus de caractères";
    inputCvc.classList.add("visibleBorder");
    errorCvc.classList.add("visibleRed");
  } else {
    errorHidden(errorCvc);
    redHidden(inputCvc);
  }

  // Si toutes les conditions sont remplies, affichage des détails de la carte
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
