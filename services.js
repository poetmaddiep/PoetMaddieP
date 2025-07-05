let index = 0;
const quotes = document.querySelectorAll('.testimonial-grid blockquote');

function showNextQuote() {
  quotes.forEach(q => q.classList.remove('active'));
  quotes[index].classList.add('active');
  index = (index + 1) % quotes.length;
}

document.addEventListener('DOMContentLoaded', () => {
  showNextQuote();
  setInterval(showNextQuote, 5000);
});
