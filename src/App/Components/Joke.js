import jokeGenerator from '../../../images/jokeGenerator.png';

const showSetup = (item) => {
  document.querySelector('#app').innerHTML = `<div class="card" style="width: 18rem;">
  <div class="card-body d-flex flex-column">
  <img src="${jokeGenerator}" class="card-img-top" alt="...">
    <h6 class="card-subtitle mb-2 text-muted"></h6>
    <p class="card-text">${item.setup}</p>
    <p class="card-text" id="punchline" style="display: none;">${item.punchline}</p>
    <div id="button-container" class="mt-auto">
      <a href="#" class="card-link btn btn-dark" id="punchline-button">GET PUNCHLINE</a>
    </div>
  </div>
</div>`;
};

export default showSetup;
