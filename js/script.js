const btnElem = document.querySelector(".btn");
const emailList = document.querySelector(".email-list");
const loadingElem = document.getElementById("loading");


let emails = [];
const printEmails = () => {
    emails.forEach((curmail) => {
        emailList.innerHTML += `<li class="list-group-item">${curmail}</li>`;
    });
};



const getEmails = () => {
    emails = [];
    emailList.innerHTML = "";
    loadingElem.style.display = "block";
    for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(resp => {
            const result = resp.data.response;
            emails.push(result);
            if (emails.length === 10) {
                loadingElem.style.display = "none";
                printEmails();
            };
        });



    };

}

btnElem.addEventListener("click", getEmails);