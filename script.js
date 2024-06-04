const declineButton = document.getElementById("decline");
const acceptButton = document.getElementById("accept");
const cookieNotice = document.getElementById("cookie-notice");
const toggleThemeButton = document.getElementById("toggle-theme");

// Just to keep the div visible for testing
// document.cookie = "cookiesAccepted=false";

const isCookiesAccepted = document.cookie.includes("true");
if (isCookiesAccepted) {
  cookieNotice.style.display = "none";
} else {
  cookieNotice.style.display = "block";
}

if (document.cookie.includes("theme=dark")) {
  document.body.classList.toggle("dark");
}

declineButton.addEventListener("click", () => {
  console.log("Declined!");
});

acceptButton.addEventListener("click", () => {
  console.log("Accepted!");
});

acceptButton.addEventListener("click", () => {
  document.cookie = "cookiesAccepted=true";
});

const cookiesAccepted = document.cookie.includes("cookiesAccepted");
if (!cookiesAccepted) {
  cookieNotice.style.display = "block";
}

declineButton.addEventListener("click", () => {
  cookieNotice.style.display = "none";
  document.cookie = "cookiesAccepted=false";
});

acceptButton.addEventListener("click", () => {
  cookieNotice.style.display = "none";
  document.cookie = "cookiesAccepted=true";
});

toggleThemeButton.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.cookie = "theme=light";
    document.body.classList.toggle("dark");
  } else {
    document.cookie = "theme=dark";
    document.body.classList.toggle("dark");
  }
});
