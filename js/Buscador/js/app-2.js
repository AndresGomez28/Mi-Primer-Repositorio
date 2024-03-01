document.addEventListener("DOMContentLoaded", () =>{
    showPlates();
});

const inputData = document.querySelector('.data');
inputData.addEventListener("input", getApi);

function getApi(){
    const search = inputData.value;
    let api = ` www.themealdb.com/api/json/v1/1/filter.php?c=${search}`;

    fetch(api)
    .then((response) =>{
        return response.json();
    })
    .then((plateData) =>{
        console.log(plateData);
        showPlates(plateData.Search);
    });
};

function showPlates(plateData){
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = "";

    plateData.forEach((plate) => {
        const cardHtml = document.querySelector('div');
        cardHtml.innerHTML += `
        <div class="card">
            <img src="${plate}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${plate}</h5>
            </div>
        </div>
        `;
        cardContainer.appendChild(cardHtml);
    });
};
