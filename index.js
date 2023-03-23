/*Object.prototype.sayHi = function() {
  console.log('Привет '+ this.name + '. Как дела?');
};
*/
let btnRetNews = document.querySelector('.news__block-nav__return');
let btnNextNews = document.querySelector('.news__block-nav__next');
const masNewsblock = document.querySelectorAll('.news_items-block')
const masNews= document.querySelectorAll('#news')


btnNextNews.addEventListener('click', function(){
	/*if(window.innerWidth > 700){
		for(let i = 0 ; i< masNews.length ; i++){
		let constNumb = masNews.length;
		 	if(masNews[i].classList[1] !== 'news_items-disabled'){
				masNews[i].classList.add('news_items-disabled');
				let e = i + 1;
				if(e === constNumb){
					let e = 0;
					let i = 0;
					masNews[e].classList.remove('news_items-disabled');
					break
				}
				masNews[e].classList.remove('news_items-disabled');
				break
			}
		}
	}	*/
	if(window.innerWidth < 700){
		masNewsblock.forEach(function(item){
			if(item !== 'news_items-block-disabled'){
				let e = 0;
				for(let i = 0 ; i < masNewsblock.length ; i++){
					let constNumb = masNewsblock.length;

					if(item === masNewsblock[i]){
						masNewsblock[i].classList.add('news_items-block-disabled');

						e++;
						/*if(e === constNumb){
							let e = 0;
							let i = 0;
							masNewsblock[e].classList.remove('news_items-block-disabled');
							break
						};*/
						masNewsblock[e].classList.remove('news_items-block-disabled');
						return e;
						
					}
				}
			}
		})

		/*for(let i = 0 ; i < masNewsblock.length ; i++){
			//let constNumb = masNewsblock.length;
		 	if(masNewsblock[i].classList[1] !== 'news_items-block-disabled' || masNewsblock[i].classList[2] !== 'news_items-block-disabled'  
		 		 || masNewsblock[i].classList[0] !== 'news_items-block-disabled'  || masNewsblock[i].classList[4] !== 'news_items-block-disabled'){
				masNewsblock[i].classList.add('news_items-block-disabled');
				let e = i + 1;
				if(e === constNumb){
					let e = 0;
					let i = 0;
					masNewsblock[e].classList.remove('news_items-block-disabled');
					break
				};
				console.log(masNewsblock[i].classList[1] !== 'news_items-block-disabled')

				masNewsblock[e].classList.remove('news_items-block-disabled');
				
			}
		}*/
	}
})


btnRetNews.addEventListener('click', function(){
	for(let i = 0 ; i< masNews.length ; i++){
		let constNumb = masNews.length;
	 	if(masNews[i].classList[1] !== 'news_items-disabled'){
			masNews[i].classList.add('news_items-disabled');
			let e = i - 1;
			if(e === -1){
				let e = masNews.length-1;
				let i = masNews.length-1;
				masNews[e].classList.remove('news_items-disabled');
				break
			}
			masNews[e].classList.remove('news_items-disabled');
			break
		}
	}
})


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

