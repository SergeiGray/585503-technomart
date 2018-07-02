var buy = document.querySelectorAll(".buy"), buyIndex, buyOn;
var basket = document.querySelector(".basket");
var save = document.querySelectorAll(".save"), saveIndex, saveOn;
var bookmark = document.querySelector(".bookmark");
var productAdded = document.querySelector(".product_added");
var productAddedClose = document.querySelector(".product_added_close_button");
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