const userSignUpForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const userName = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && userName && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, userName, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      console.log("Hello World!");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", userSignUpForm);

// For password limits modal
document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }
  document.location.reload;
  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
      document.location.reload();
    });
  });

  // Add a keyboard event to close all modals
  // document.addEventListener("keydown", (event) => {
  //   const e = event || window.event;

  //   if (e.keyCode === 27) {
  //     // Escape key
  //     closeAllModals();
  //   }
  // });
});
