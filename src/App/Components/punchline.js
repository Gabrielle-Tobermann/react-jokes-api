import jokeGenerator from '../../../images/jokeGenerator.png';

const showPunchline = (item) => {
  document.querySelector('#app').innerHTML = `<div class="card" style="width: 18rem;">
  <div class="card-body">
  <img src="${jokeGenerator}" class="card-img-top" alt="...">
    <h6 class="card-subtitle mb-2 text-muted"></h6>
    <p class="card-text">${item.setup}</p>
    <p class="card-text">${item.punchline}</p>
    <a href="#" class="card-link btn btn-dark" id="new-joke-button">GET A NEW JOKE</a>
  </div>
</div>`;
  console.warn(item);
};

export default showPunchline;
