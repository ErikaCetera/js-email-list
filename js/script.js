const allLiElem = document.querySelectorAll("li");



for (let i = 0; i < allLiElem.length; i++) {
    const curItem = allLiElem[i]
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
        const result = resp.data.response;
        curItem.innerHTML = result;
    })

};