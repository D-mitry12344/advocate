/*Object.prototype.sayHi = function() {
  console.log('Привет '+ this.name + '. Как дела?');
};
*/

let bannerFirst = document.querySelector(".banner_header__myself-first")
let bannerSecond = document.querySelector(".banner_header__myself-second")
let btnLeftBanner = document.querySelector("#banner-btn-left");
let btnRightBanner = document.querySelector("#banner-btn-right");
btnLeftBanner.addEventListener("click", function(){
	if(bannerSecond.style.display === "block"){
		setTimeout(()=> {
			bannerSecond.style.display="";
			bannerFirst.style.display="block";
			bannerFirst.style.animation = "1s move-banners reverse"
		} ,500)
		
		bannerSecond.style.animation = "1s move-banners reverse"
	}else{
		
		bannerFirst.style.animation = "1s move-banners"
		setTimeout(()=> {
			bannerFirst.style.display="none";
			bannerSecond.style.display="block";
			bannerSecond.style.animation = "1s move-banners reverse"
		} ,500)
	}
})

btnRightBanner.addEventListener("click", function(){
	if(bannerSecond.style.display === "block"){
		setTimeout(()=> {
			bannerSecond.style.display="";
			bannerFirst.style.display="";
			bannerFirst.style.animation = "1s move-banners reverse"
		} ,600)
		
		bannerSecond.style.animation = "1s move-banners"
	}else{
		bannerFirst.style.animation = "1s move-banners"
		setTimeout(()=> {
			bannerFirst.style.display="none";
			bannerSecond.style.display="block";
			bannerSecond.style.animation = "1s move-banners reverse"
		} ,600)
	}
})

