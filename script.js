// Function to hide screen 1 and show screen 2
function showScreen2() {
  // Hide screen 1
  document.getElementById('screen-1').style.display = 'none';
  
  // Show screen 2
  document.getElementById('screen-2').style.display = 'block';

  // Add the clicked effect for profile picture
  document.querySelector('.profile-pic').classList.add('clicked');
  document.querySelector('.center-box').classList.add('clicked');  // This applies the GIF effect
  document.querySelector('.top-text').classList.add('clicked');     // Change "Know More?" text to red
}

// Open the modal when "Skills" is clicked
function openModal() {
  document.getElementById('skills-modal').style.display = 'block';
  
  // Hide the "Skills" grid item
  document.querySelector('.grid-item:nth-child(1)').style.display = 'none';
}

// Close the modal when the close button is clicked
function closeModal() {
  document.getElementById('skills-modal').style.display = 'none';
  
  // Show the "Skills" grid item again
  document.querySelector('.grid-item:nth-child(1)').style.display = 'block';
}


// Add event listener to the "About me" grid item (1st one)
document.querySelector('.grid-item:nth-child(1)').addEventListener('click', () => {
  document.getElementById('screen-2').style.display = 'none';
  document.getElementById('screen-3').style.display = 'block';
});

// Add event listener to the "Skills" grid item (2nd one)
document.querySelector('.grid-item:nth-child(2)').addEventListener('click', showSkillsScreen);


function backToScreen2() {
  resetScreen2Layout();  // restore clickable grid
  document.getElementById('screen-1').style.display = 'none';
  document.getElementById('screen-3').style.display = 'none'; // about
  document.getElementById('screen-4').style.display = 'none'; // skills
  document.getElementById('screen-5').style.display = 'none'; // work
  document.getElementById('screen-6').style.display = 'none'; // Education
  document.getElementById('screen-7').style.display = 'none'; // Projects
  document.getElementById('screen-2').style.display = 'block'; // grid screen
}


// Show full-screen Skills info
function showSkillsScreen() {
  document.getElementById('screen-2').style.display = 'none';
  document.getElementById('screen-4').style.display = 'block';
}
// Show screen 5: Work Experience
document.querySelector('.grid-item:nth-child(3)').addEventListener('click', () => {
  document.getElementById('screen-2').style.display = 'none';
  document.getElementById('screen-5').style.display = 'block';
});


// Education screen - Show screen 6
document.querySelector('.grid-item:nth-child(4)').addEventListener('click', () => {
  document.getElementById('screen-2').style.display = 'none';
  document.getElementById('screen-6').style.display = 'block';
});

// Open Screen 7 when "Projects" grid item (5th one) is clicked
document.querySelector('.grid-item:nth-child(5)').addEventListener('click', () => {
  document.getElementById('screen-2').style.display = 'none';
  document.getElementById('screen-7').style.display = 'block';
});

function goToScreen2() {
  document.getElementById("screen-1").style.display = "none";
  document.getElementById("screen-2").style.display = "flex";
}

tsParticles.load("particles-js", {
  fullScreen: {
    enable: false
  },
  background: {
    color: {
      value: "#000000"
    }
  },
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: ["#ffffff", "#00ffcc", "#ffcc00", "#ff4c4c", "#3399ff", "#66ff66"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 1,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    move: {
      enable: true,
      speed: 2.5,
      direction: "bottom",
      outModes: {
        default: "out"
      }
    },
    links: {
      enable: false
    }
  },
  detectRetina: true
});

/*function showScreen(screenId) {
  // Hide all screens
  const screens = document.querySelectorAll("[id^='screen-']");
  screens.forEach(screen => screen.style.display = "none");

  // Reset Screen 2 if we're returning to it
  if (screenId === "screen-2") {
    resetScreen2Layout();
  }

  // Show the requested screen
  const target = document.getElementById(screenId);
  if (target) target.style.display = "block";
} */

  function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll("[id^='screen-']");
    screens.forEach(screen => screen.style.display = "none");
  
    // Show the requested screen with correct layout
    const target = document.getElementById(screenId);
    if (target) {
      if (screenId === "screen-1") {
        target.style.display = "flex"; // Flex for screen-1 layout
      } else {
        target.style.display = "block"; // Block for other screens
      }
    }
  
    // Optional: Rebuild screen-2 layout if needed
    if (screenId === "screen-2") {
      if (typeof resetScreen2Layout === "function") {
        resetScreen2Layout();
      }
    }
  }
  
