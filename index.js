let btnRetNews = document.querySelector('.news__block-nav__return');
let btnNextNews = document.querySelector('.news__block-nav__next');
const masNewsblock = document.querySelectorAll('.news_items-block')
const masNews= document.querySelectorAll('#news')


btnNextNews.addEventListener('click', function(){
	if(window.innerWidth > 1500){
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
	}	
	if(window.innerWidth < 1500){
		masNews[1].classList.remove('news_items-disabled');
		for(let i = 0 ; i < masNewsblock.length ; i++){	
		 	if(
		 		masNewsblock[i].classList[1] !== 'news_items-block-disabled' 
		 		&& masNewsblock[i].classList[2] !== 'news_items-block-disabled' 
		 		 && masNewsblock[i].classList[3] !== 'news_items-block-disabled'  
		 		 && masNewsblock[i].classList[4] !== 'news_items-block-disabled'
		 	){
				masNewsblock[i].classList.add('news_items-block-disabled');
				let e = i + 1;
				if(i == 5){
					let e = 0;
					i =0;
					masNewsblock[e].classList.remove('news_items-block-disabled');
					break
				};
				masNewsblock[e].classList.remove('news_items-block-disabled');
				break
			}
		}
	}
})


btnRetNews.addEventListener('click', function(){
	if(window.innerWidth > 1500){
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
	}
	if(window.innerWidth < 1500){
		masNews[1].classList.remove('news_items-disabled');
		for(let i = 0 ; i < masNewsblock.length ; i++){	
		 	if(
		 		masNewsblock[i].classList[1] !== 'news_items-block-disabled' 
		 		&& masNewsblock[i].classList[2] !== 'news_items-block-disabled' 
		 		 && masNewsblock[i].classList[3] !== 'news_items-block-disabled'  
		 		 && masNewsblock[i].classList[4] !== 'news_items-block-disabled'
		 	){
				masNewsblock[i].classList.add('news_items-block-disabled');
				let e = i - 1;
				if(i == 0){
					let e = 5;
					i =5;
					masNewsblock[e].classList.remove('news_items-block-disabled');
					break
				};
				masNewsblock[e].classList.remove('news_items-block-disabled');
				break
			}
		}
	}
})


let bannerFirst = document.querySelector(".banner_header__myself-first")
let bannerSecond = document.querySelector(".banner_header__myself-second")
let btnLeftBanner = document.querySelector("#banner-btn-left");
let btnRightBanner = document.querySelector("#banner-btn-right");
btnLeftBanner.addEventListener("click", function(){
	if(bannerSecond.style.display === "block"){
			bannerSecond.style.display="";
			bannerFirst.style.display="block";
			bannerFirst.style.animation = "1s move-banners-ret"	
		bannerSecond.style.animation = "1s move-banners"
	}else{
		bannerFirst.style.animation = "1s move-banners"
			bannerFirst.style.display="none";
			bannerSecond.style.display="block";
			bannerSecond.style.animation = "1s move-banners-ret"
	}
})

btnRightBanner.addEventListener("click", function(){
	if(bannerSecond.style.display === "block"){
			bannerSecond.style.display="";
			bannerFirst.style.display="";
			bannerFirst.style.animation = "1s move-banners-ret"	
		bannerSecond.style.animation = "1s move-banners"
	}else{
		bannerFirst.style.animation = "1s move-banners"
			bannerFirst.style.display="none";
			bannerSecond.style.display="block";
			bannerSecond.style.animation = "1s move-banners-ret"
	}
})

