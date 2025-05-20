// Client-side cloaking: Check if it’s a bot
const isBot = /bot|googlebot|crawler|spider|robot|crawling|facebookexternalhit|bingbot|yandex|baiduspider|twitterbot|discordbot/i.test(navigator.userAgent);
const headline = document.getElementById("headline");
const ctaLink = document.getElementById("cta-link");
const botMessage = document.getElementById("bot-message");

if (isBot) {
headline.textContent = "Welcome to Our Promotions Page";
ctaLink.classList.add("hidden");
botMessage.classList.remove("hidden");
} else {
ctaLink.href = "/redirect"; // Links to server-side redirect
}

// Countdown timer for hype
let time = 600; // 10 mins in seconds
const countdown = document.getElementById("countdown");
setInterval(() => {
let mins = Math.floor(time / 60);
let secs = time % 60;
countdown.textContent = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
time--;
if (time < 0) time = 600;
}, 1000);

document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.querySelectorAll('.testimonial');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  let currentIndex = 0;
  const intervalTime = 5000; // Rotate every 5 seconds

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  // Manual navigation
  nextButton.addEventListener('click', nextTestimonial);
  prevButton.addEventListener('click', prevTestimonial);

  // Auto-rotate
  let autoRotate = setInterval(nextTestimonial, intervalTime);

  // Pause on hover
  const carousel = document.querySelector('.testimonial-carousel');
  carousel.addEventListener('mouseenter', () => clearInterval(autoRotate));
  carousel.addEventListener('mouseleave', () => {
    autoRotate = setInterval(nextTestimonial, intervalTime);
  });

  // Show first testimonial
  showTestimonial(currentIndex);
});

 // Flying bot interactivity
 const flyingBot = document.querySelector('.flying-bot');
 flyingBot.addEventListener('mouseenter', () => {
     flyingBot.style.animationPlayState = 'paused';
 });
 flyingBot.addEventListener('mouseleave', () => {
     flyingBot.style.animationPlayState = 'running';
 });

