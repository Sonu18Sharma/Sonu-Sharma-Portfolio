// humburger
function toggleMenu() {
    var mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
        
    } else {
        mobileMenu.style.display = 'flex';
    }
}

// nav-connect-to-content
// document.addEventListener("DOMContentLoaded", function() {
//   const navLinks = document.querySelectorAll('nav .menu a, .mobile-menu a');

//   navLinks.forEach(link => {
//       link.addEventListener('click', function(event) {
//           event.preventDefault();

//           const targetId = this.getAttribute('href').substring(1);
//           const targetSection = document.getElementById(targetId);

//           window.scrollTo({
//               top: targetSection.offsetTop - 50, // Adjust -50 to offset fixed nav height
//               behavior: 'smooth'
//           });
//       });
//   });
// });


// skill
document.addEventListener('DOMContentLoaded', function() {
    const skillLevels = document.querySelectorAll('.skill__level');
    
    skillLevels.forEach(skill => {
      const level = skill.getAttribute('data-skill-level');
      skill.style.width = 0;
      setTimeout(() => {
        skill.style.transition = 'width 2s';
        skill.style.width = level;
      }, 200); 
    });
  });



// contact-section
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
  
    document.getElementById('popup').style.display = 'block';
    

    document.getElementById('contactForm').reset();
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});

  
