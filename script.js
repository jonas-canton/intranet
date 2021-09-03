const myRequest = new Request('systems.json');

fetch(myRequest)
  .then(response => response.json())
  .then(data => {
    for (const system of data.systems) {
      createCard(system);
    }
  })
  .catch(console.error);

function createCard(system) {
  const card = document.querySelector('section.card.model');

  const cloneCard = card.cloneNode(true);
  cloneCard.classList.remove('model');

  cloneCard.querySelector('.card-title').innerText = system.title;
  cloneCard.querySelector('.card-description').innerText = system.description;
  cloneCard.querySelector('.card-button').href = system.url;
  cloneCard.querySelector('.card-icon img').src = system.logo;

  const section = document.querySelector('.cards');
  section.appendChild(cloneCard);
}