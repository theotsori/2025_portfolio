// script.ts

document.addEventListener('DOMContentLoaded', () => {
    setupSmoothScrolling();
    setupStickyNavbar();
    setupTimeAndMessage();
    setupFooterLinkHover();
  });
  
  function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (e.target as HTMLAnchorElement).getAttribute('href')?.slice(1);
        const targetElement = document.getElementById(targetId!);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth',
          });
        }
      });
    });
  }
  
  function setupStickyNavbar() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    });
  }
  
  function setupTimeAndMessage() {
    const workplaceTimeElement = document.getElementById('workplace-time')!;
    const visitorTimeElement = document.getElementById('visitor-time')!;
    const contactMessageElement = document.getElementById('contact-message')!;
  
    const workplaceOffset = 3;
  
    const formatTime = (date: Date): string => {
      return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    };
  
    const getWorkplaceTime = (): Date => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      return new Date(utc + workplaceOffset * 3600000);
    };
  
    const updateTimeAndMessage = () => {
      const workplaceTime = getWorkplaceTime();
      const visitorTime = new Date();
  
      workplaceTimeElement.textContent = `Workplace Time: ${formatTime(workplaceTime)}`;
      visitorTimeElement.textContent = `Your Local Time: ${formatTime(visitorTime)}`;
  
      const workHour = workplaceTime.getHours();
      if (workHour >= 21 || workHour < 8) {
        contactMessageElement.textContent = "It's outside business hours. Please send a message instead of calling.";
      } else {
        contactMessageElement.textContent = "Feel free to call us during business hours!";
      }
    };
  
    updateTimeAndMessage();
    setInterval(updateTimeAndMessage, 60000);
  }
  
  function setupFooterLinkHover() {
    const links = document.querySelectorAll("footer a");
  
    links.forEach((link) => {
      const htmlLink = link as HTMLElement;
      htmlLink.addEventListener("mouseenter", () => {
        htmlLink.style.color = "#0073e6";
      });
      htmlLink.addEventListener("mouseleave", () => {
        htmlLink.style.color = "#333";
      });
    });
  }
  