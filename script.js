// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

// -------------- Simple modal logic ---------------
const modal      = document.getElementById('project-modal');
const modalBody  = document.getElementById('modal-body');
const closeBtn   = modal.querySelector('.close');

// Define your project data once:
const projectDetails = {
  weather: `
    <h2>Weather App</h2>
    <div class="carousel">
      <div class="slides active"><img src="Images/weather_1.png" alt="Weather screenshot 1" /></div>
      <div class="slides"><img src="Images/weather_2.png" alt="Weather screenshot 2" /></div>
      <div class="slides"><img src="Images/weather_3.png" alt="Weather screenshot 3" /></div>
      <a class="prev">&#10094;</a>
      <a class="next">&#10095;</a>
    </div>
    <p>Real-time weather using OpenWeatherMap API and geolocation.</p>
    <ul>
      <li><strong>Tech:</strong> HTML, CSS, JavaScript</li>
      <li><a href="https://github.com/RakshaTiwari921/WeatherApp" target="_blank">GitHub Repo</a></li>
      <li><a href="https://weatherapprakshatiwari.netlify.app/" target="_blank">Live Demo</a></li>
    </ul>
  `,
  todo: `
    <h2>To-Do List App</h2>
    <div class="carousel">
      <div class="slides active"><img src="Images/todo_1.png" alt="To-Do List Screenshot 1" /></div>
      <div class="slides"><img src="Images/todo_2.png" alt="To-Do List Screenshot 2" /></div>
      <div class="slides"><img src="Images/todo_3.png" alt="To-Do List Screenshot 3" /></div>
      <a class="prev">&#10094;</a>
      <a class="next">&#10095;</a>
    </div>
    <p>A clean and functional To-Do app with task addition, deletion, and persistent storage via localStorage.</p>
    <ul>
      <li><strong>Tech:</strong> HTML, CSS, JavaScript</li>
      <li><a href="https://github.com/RakshaTiwari921/ToDoListApp" target="_blank">GitHub Repo</a></li>
      <li><a href="https://todolistapprakshatiwari.netlify.app/" target="_blank">Live Demo</a></li>
    </ul>
  `,
  agecalc: `
    <h2>Age Calculator</h2>
    <div class="carousel">
      <div class="slides active"><img src="Images/agecalculator_1.png" alt="Age Calculator Screenshot 1" /></div>
      <div class="slides"><img src="Images/agecalculator_2.png" alt="Age Calculator Screenshot 2" /></div>
      <div class="slides"><img src="Images/agecalculator_3.png" alt="Age Calculator Screenshot 3" /></div>
      <a class="prev">&#10094;</a>
      <a class="next">&#10095;</a>
    </div>
    <p>Enter your birthdate and find out your exact age in years, months, and days.</p>
    <ul>
      <li><strong>Tech:</strong> HTML, CSS, JavaScript</li>
      <li><a href="https://github.com/RakshaTiwari921/AgeCalculatorApp" target="_blank">GitHub Repo</a></li>
      <li><a href="https://agecalculatorapprakshatiwari.netlify.app/" target="_blank">Live Demo</a></li>
    </ul>
  `,
  taskmanager: `
    <h2>Task Manager</h2>
    <div class="carousel">
      <div class="slides active"><img src="Images/TaskManager_1.png" alt="Task Manager Screenshot 1" /></div>
      <div class="slides"><img src="Images/TaskManager_2.png" alt="Task Manager Screenshot 2" /></div>
      <div class="slides"><img src="Images/TaskManager_3.png" alt="Task Manager Screenshot 3" /></div>
      <div class="slides"><img src="Images/TaskManager_4.png" alt="Task Manager Screenshot 4" /></div>
      <a class="prev">&#10094;</a>
      <a class="next">&#10095;</a>
    </div>
    <p>Enter your birthdate and find out your exact age in years, months, and days.</p>
    <ul>
      <li><strong>Tech:</strong> HTML, CSS, JavaScript</li>
      <li><a href="https://github.com/RakshaTiwari921/TaskManager" target="_blank">GitHub Repo</a></li>
      <li><a href="https://taskmanagerrakshatiwari.netlify.app/" target="_blank">Live Demo</a></li>
    </ul>
  `,
  movieapp: `
    <h2>Movie App</h2>
    <div class="carousel">
      <div class="slides active"><img src="Images/MovieApp_1.jpeg" alt="Movie App Screenshot 1" /></div>
      <div class="slides"><img src="Images/MovieApp_2.jpeg" alt="Movie App Screenshot 2" /></div>
      <div class="slides"><img src="Images/MovieApp_3.jpeg" alt="Movie App Screenshot 3" /></div>
      <a class="prev">&#10094;</a>
      <a class="next">&#10095;</a>
    </div>
    <p>Enter your birthdate and find out your exact age in years, months, and days.</p>
    <ul>
      <li><strong>Tech:</strong> HTML, CSS, JavaScript</li>
      <li><a href="https://github.com/RakshaTiwari921/MovieApp" target="_blank">GitHub Repo</a></li>
      <li><a href="https://movieapprakshatiwari.netlify.app/" target="_blank">Live Demo</a></li>
    </ul>
  `,
  firebaseauth: `
    <h2>Firebase Authentication App</h2>
    <div class="carousel">
      <div class="slides active"><img src="Images/Auth_1.png" alt="firebaseauth Screenshot 1" /></div>
      <div class="slides"><img src="Images/Auth_2.png" alt="firebaseauth Screenshot 2" /></div>
      <div class="slides"><img src="Images/Auth_3.png" alt="firebaseauth Screenshot 3" /></div>
      <div class="slides"><img src="Images/Auth_4.png" alt="firebaseauth Screenshot 3" /></div>
      <a class="prev">&#10094;</a>
      <a class="next">&#10095;</a>
    </div>
    <p>Enter your birthdate and find out your exact age in years, months, and days.</p>
    <ul>
      <li><strong>Tech:</strong> HTML, CSS, JavaScript</li>
      <li><a href="https://github.com/RakshaTiwari921/ReactFirebaseAuthApp" target="_blank">GitHub Repo</a></li>
      <li><a href="https://reactfirebaseauthapprakshatiwari.netlify.app/" target="_blank">Live Demo</a></li>
    </ul>
  `
};


// Open modal on click
document.querySelectorAll('.boxes .box').forEach(card=>{
  card.addEventListener('click',()=>{
    const id = card.dataset.modal;           // "weather", "movie", …
    modalBody.innerHTML = projectDetails[id] || '<p>Details coming soon.</p>';

    setupCarousel(); 

    modal.style.display = 'flex';
    modal.classList.add('show');
    document.body.style.overflow='hidden';   // prevent background scroll
  });
});

// Close handlers
closeBtn.addEventListener('click',closeModal);
modal.addEventListener('click',e=>{
  if(e.target===modal) closeModal();         // click outside card
});
function closeModal(){
  modal.style.display='none';
  document.body.style.overflow='';
}

function setupCarousel() {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach((carousel) => {
    let index = 0;
    const slides = carousel.querySelectorAll('.slides');
    const prev = carousel.querySelector('.prev');
    const next = carousel.querySelector('.next');

    function showSlide(n) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === n) slide.classList.add('active');
      });
    }

    prev.onclick = () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    };

    next.onclick = () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    };

    showSlide(index);
  });
}

