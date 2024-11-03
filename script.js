const addItemBtn = document.getElementById("add-item");
const clear = document.getElementById("clear");
const ipAddressDiv = document.querySelector(".ip-address-div");
const addItemsP = document.getElementById("add-items");
const fetchIp = document.getElementById("fetch-ip");

addItemBtn.addEventListener("click", () => {
    addItemsP.style.display = "none";
    ipAddressDiv.style.display = "block";
    ipAddressDiv.innerHTML = `
           <form class = "ip-address-form" action="">
            <label for="">IP Adress</label>
            <input id = "input" type="text">
           </form>
           <button id="clear-btn">X</button>
    `; 

    const xButton = document.getElementById("clear-btn");
    console.log(xButton);

    xButton.addEventListener("click", () => {
        ipAddressDiv.style.display = "none";
        addItemsP.style.display = "block";
    })
})

fetchIp.addEventListener("click", () => {
    ipAddressDiv.innerHTML = `
    <div class="ip-address-country">
            <p class="country">United Kingdom</p>
            <p class="time">Europe/London</p>
            <button id="clear-btn-ip">X</button>
           </div>
    `;

    const xButtonIp = document.getElementById("clear-btn-ip");

    xButtonIp.addEventListener("click", () => {
        ipAddressDiv.style.display = "none";
        addItemsP.style.display = "block";
    })

})

clear.addEventListener("click", () => {
    addItemsP.style.display = "block";
    ipAddressDiv.style.display = "none";
})