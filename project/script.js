

// Fade-in animations on scroll
const faders=document.querySelectorAll('.fade-in, .slide-left, .slide-right');
const appearOnScroll=new IntersectionObserver(function(entries, observer){
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.2});
faders.forEach(fader=>appearOnScroll.observe(fader));

// Back to top
document.querySelector('.back-to-top').addEventListener('click', e=>{
  e.preventDefault();
  window.scrollTo({top:0, behavior:'smooth'});
});

// Contact form


// Sparkles effect
document.addEventListener('mousemove', (e) => {
  const sparklesCount = 5;
  for (let i = 0; i < sparklesCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = e.pageX + 'px';
    sparkle.style.top = e.pageY + 'px';
    const dx = (Math.random() - 0.5) * 60 + 'px';
    const dy = (Math.random() - 0.5) * 60 + 'px';
    sparkle.style.setProperty('--dx', dx);
    sparkle.style.setProperty('--dy', dy);
    const colors = ['#0ff', '#4ef', '#6ff', 'cyan'];
    sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 500);
  }
});


// project code 
 
  document.addEventListener("DOMContentLoaded", () => {
    const projects = [
      { imgAlt: "Portfolio Website", url: "https://your-portfolio-link.com" },
      { imgAlt: "E-commerce App", url: "https://your-ecommerce-demo.com" }
    ];

    projects.forEach(proj => {
      const img = document.querySelector(`img[alt="${proj.imgAlt}"]`);
      if (img) {
        img.style.cursor = "pointer";
        img.addEventListener("click", () => window.open(proj.url, "_blank"));
      }
    });
  });

// skills
  window.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");
    skills.forEach((skill, index) => {
      // stagger animation for nicer effect
      setTimeout(() => {
        skill.classList.add("loaded");
      }, index * 200); // 200ms delay between each bar
    });
  });

ddocument.querySelectorAll('nav').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    if (href.startsWith('#')) {
      // only smooth scroll for internal links
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 70;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    // external links (like PDFs) will open normally
  });
});

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

// js of mail

document.addEventListener("DOMContentLoaded", () => {
  const aboutName = localStorage.getItem("aboutName");
  const aboutDesc = localStorage.getItem("aboutDesc");
  const skills = localStorage.getItem("skillsList");
  const projects = localStorage.getItem("projectsData");
  const contactEmail = localStorage.getItem("contactEmail");
  const contactPhone = localStorage.getItem("contactPhone");

  if (aboutName) document.querySelector(".about-name").textContent = aboutName;
  if (aboutDesc) document.querySelector(".about-desc").textContent = aboutDesc;
  if (skills) document.querySelector(".skills-list").textContent = skills;
  if (projects) document.querySelector(".projects-list").textContent = projects;
  if (contactEmail) document.querySelector(".contact-email").textContent = contactEmail;
  if (contactPhone) document.querySelector(".contact-phone").textContent = contactPhone;
});


