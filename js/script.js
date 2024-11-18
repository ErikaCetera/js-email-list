const allLiElem = document.querySelectorAll("li");
const btnElem = document.querySelector(".btn")
const conteinerList = document.querySelector(".d-none")

btnElem.addEventListener('click', function(event) {
    event.preventDefault();
for (let i = 0; i < allLiElem.length; i++) {
    let curItem = allLiElem[i];
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
        const result = resp.data.response;
        curItem.innerHTML = result;
    })
   conteinerList.classList.remove("d-none");


};

});