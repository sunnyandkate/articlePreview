let share = document.querySelector('.share');
let shareBefore = document.querySelector('.shareBefore');
let social = document.querySelector('.social');
let person = document.querySelector('.person');



//show social box and hide person box only on mobile view(less than 600px width)

shareBefore.addEventListener('click', function(){
	
	
	
	
	if(window.innerWidth < 880){
	social.style.display = 'block',
	person.style.display = 'none';
	
	}else{
	
//toggle tooltip social box on desktop view
	
		if(social.style.display === 'none'){
		
		shareBefore.style.backgroundColor = 'hsl(217, 19%, 35%)';
		social.style.display = 'block';
		}else {
			
			social.style.display = 'none';
			shareBefore.style.backgroundColor = 'hsl(210, 46%, 95%)';
			
		}
	}
	
	
});

share.addEventListener('click', function(){
	
	
	social.style.display = 'none',
	person.style.display = 'block';
	
	
});





