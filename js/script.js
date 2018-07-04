var buy = document.querySelectorAll(".buy"), buyIndex, buyOn;
var basket = document.querySelector(".basket");
var save = document.querySelectorAll(".save"), saveIndex, saveOn;
var bookmark = document.querySelector(".bookmark");
var productAdded = document.querySelector(".product_added");
var productAddedClose = document.querySelector(".product_added_close_button");
var writeUs = document.querySelector(".write_us_button");
var writeUsBlock = document.querySelector(".write_us");
var writeUsClose = document.querySelector(".write_us_close");
var writeUsForm = writeUsBlock.querySelector("form");
var writeUsName = writeUsBlock.querySelector(".your_name");
var writeUsMail = writeUsBlock.querySelector(".your_email");
var writeUsText = writeUsBlock.querySelector(".your_message");
var map = document.querySelector(".contacts_maps");
var mapBlock = document.querySelector(".maps");
var mapClose = document.querySelector(".map_close");
for (buyIndex = 0; buyIndex < buy.length; buyIndex++) {
	buyOn = buy[buyIndex];
	buyOn.addEventListener("click", function (event) {
    	event.preventDefault();  
    	basket.classList.add("basket_buy");
    	productAdded.classList.remove("display_off");
    	productAdded.classList.add("display_on");
  });
};
for (saveIndex = 0; saveIndex < save.length; saveIndex++) {
	saveOn = save[saveIndex];
	saveOn.addEventListener("click", function (event) {
    	event.preventDefault();  
    	bookmark.classList.add("bookmark_add");
  });
};
productAddedClose.addEventListener("click", function (event) {
    event.preventDefault();  
    productAdded.classList.remove("display_on");
    productAdded.classList.add("display_off");
});
writeUs.addEventListener("click", function (event) {
	event.preventDefault();
	writeUsBlock.classList.remove("display_off");
	writeUsBlock.classList.add("modal_show");
});
writeUsClose.addEventListener("click", function (event) {
	event.preventDefault();
	writeUsBlock.classList.remove("modal_show");
	writeUsBlock.classList.add("display_off");
});
writeUsForm.addEventListener("submit", function (event) {
	if ( !writeUsName.value || !writeUsMail.value || !writeUsText.value) {
		event.preventDefault();
		console.log("Нужно ввести имя, почту и текст сообщения");
	} else {
      localStorage.setItem("Name", writeUsName.value);
      localStorage.setItem("Mail", writeUsMail.value);
      localStorage.setItem("Text", writeUsText.value);
    }
});
map.addEventListener("click", function (event) {
	event.preventDefault();
	mapBlock.classList.remove("display_off");
	mapBlock.classList.add("modal_show");
});
mapClose.addEventListener("click", function (event) {
	event.preventDefault();
	mapBlock.classList.remove("modal_show");
	mapBlock.classList.add("display_off");
});