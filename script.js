// Career Recommendation Logic
function getRecommendations() {
  const previous = document.getElementById("previous").value.trim().toLowerCase();
  const interest = document.getElementById("interest").value.trim().toLowerCase();
  const output = document.getElementById("output");
  const extraButtons = document.getElementById("extraButtons");

  if (!previous || !interest) {
    output.innerHTML = "⚠️ Please fill out both fields!";
    extraButtons.classList.add("hidden");
    return;
  }

  let recommendations = "";

  if (interest.includes("marketing")) {
    recommendations = `
      <ul class="list-disc text-left mx-auto max-w-md">
        <li>Digital Marketing Specialist</li>
        <li>SEO Analyst</li>
        <li>Brand Manager</li>
      </ul>`;
  } else if (interest.includes("ai") || interest.includes("artificial intelligence")) {
    recommendations = `
      <ul class="list-disc text-left mx-auto max-w-md">
        <li>Machine Learning Engineer</li>
        <li>Data Scientist</li>
        <li>AI Researcher</li>
      </ul>`;
  } else if (interest.includes("finance")) {
    recommendations = `
      <ul class="list-disc text-left mx-auto max-w-md">
        <li>Financial Analyst</li>
        <li>Investment Banker</li>
        <li>Chartered Accountant</li>
      </ul>`;
  } else {
    recommendations = "No specific recommendations found. Try another interest!";
  }

  output.innerHTML = `
    ✅ Based on your <b>${previous}</b> background and your interest in <b>${interest}</b>, 
    here are some AI-powered career suggestions for you: <br><br>
    ${recommendations}
  `;

  extraButtons.classList.remove("hidden");
}

// Google Search Buttons
function showResult(type) {
  let query = "";
  const interest = document.getElementById("interest").value;

  if (type === "course") query = "best courses for " + interest;
  if (type === "platform") query = "best platforms to learn " + interest;
  if (type === "university") query = "best universities for " + interest;
  if (type === "career") query = "career options in " + interest;

  window.open("https://www.google.com/search?q=" + encodeURIComponent(query), "_blank");
}

// ------------------ AUTH SYSTEM ------------------

// Toggle Forms
function toggleForms(form) {
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("loginForm").classList.add("hidden");

  if (form === "signup") document.getElementById("signupForm").classList.remove("hidden");
  if (form === "login") document.getElementById("loginForm").classList.remove("hidden");
}

// Signup
function signup() {
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (!name || !email || !password) {
    alert("⚠️ Please fill all fields!");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ name, email, password }));
  alert("✅ Signup successful! Now login.");
  toggleForms("login");
}

// Login
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    document.getElementById("authSection").classList.add("hidden");
    document.getElementById("welcomeSection").classList.remove("hidden");
    document.getElementById("userName").innerText = user.name;
    alert("🎉 Login Successful!");
  } else {
    alert("❌ Invalid credentials!");
  }
}

// Logout
function logout() {
  document.getElementById("welcomeSection").classList.add("hidden");
  document.getElementById("authSection").classList.remove("hidden");
  toggleForms("login");
}

// ------------------ DROPDOWN TOGGLE ------------------
function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("hidden");
}
