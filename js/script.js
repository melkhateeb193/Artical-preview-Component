const btnToggle = document.getElementById('btn');
const popup = document.getElementById('popUp');

btnToggle.addEventListener('click', () => {
    popup.classList.toggle('d-none');
  });
