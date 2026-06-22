if(!localStorage.getItem('user')){
    const user ={username:"admin", password:"1234"}
    localStorage.setItem("user",JSON.stringify(user))
}


let cart=[]

function addtocart(name,price){
    if(localStorage.getItem("isloggedin")!=="yes"){
        alert("please sign in first!!")
        return
    }

    let item=cart.find(p=>p.name===name)

    if(item){
        item.qty++;
    }
    else{
        cart.push({name:name,price:price,qty:1})
    }
    updateui();
}


function updateui(){
    const list=document.getElementById("cartitems")
    const total=document.getElementById("totalprice")


    list.innerHTML=""

    let sum=0


    cart.forEach(i=>{
        sum+=i.price*i.qty


        list.innerHTML+=`<li>${i.name}x ${i.qty}</li>`
    });


    total.innerHTML=sum.toLocaleString()

}



document.getElementById("loginform")?.addEventListener("submit",(e)=>{
    e.preventDefault()

    const typeduser=document.getElementById("username").value;
    const typedpass=document.getElementById("password").value;


    const saveddata= JSON.parse(localStorage.getItem("user"))



    if(typeduser===saveddata.username&& typedpass===saveddata.password){
        localStorage.setItem("isloggedin", "yes")
        alert("welcome")
        window.localStorage.href="index.html";
    }

    else{
        alert("password is wrong")
    }
});





// slider

(function() {
    const slides = document.getElementById('slides');
    const slidesCount = document.querySelectorAll('.slide').length; // 6 اسلاید
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('dotsContainer');
    
    let currentIndex = 0;

    // ایجاد دایره‌ها
    for (let i = 0; i < slidesCount; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.dataset.index = i;
        dot.addEventListener('click', function() {
            goToSlide(parseInt(this.dataset.index));
        });
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');
    
    // تابع به‌روزرسانی موقعیت اسلایدر و دایره فعال
    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // حذف کلاس active از همه دایره‌ها
        dots.forEach(dot => dot.classList.remove('active'));
        // اضافه کردن کلاس active به دایره متناظر
        if (dots[currentIndex]) {
            dots[currentIndex].classList.add('active');
        }
    }

    // رفتن به اسلاید مشخص
    function goToSlide(index) {
        if (index < 0) {
            currentIndex = slidesCount - 1;
        } else if (index >= slidesCount) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        updateSlider();
    }

    // رویداد دکمه بعدی
    nextBtn.addEventListener('click', function() {
        goToSlide(currentIndex + 1);
    });

    // رویداد دکمه قبلی
    prevBtn.addEventListener('click', function() {
        goToSlide(currentIndex - 1);
    });

    // نمایش اولین اسلاید به همراه دایره فعال
    updateSlider();

    // (اختیاری) تغییر خودکار اسلاید هر ۵ ثانیه
    let autoSlideInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 6000);

    // توقف اتوماتیک هنگام هاور روی اسلایدر (تجربه کاربری بهتر)
    const sliderContainer = document.querySelector('.custom-slider');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 6000);
    });
})();


//theme
(function() {
    const toggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    
    // بررسی تم ذخیره شده در localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.getElementById = 'themeText';
        
    }

    // رویداد کلیک برای تغییر تم
    toggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // تغییر آیکون و متن بر اساس حالت جدید
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.className = 'fas fa-sun';
           
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.className = 'fas fa-moon';
            
            localStorage.setItem('theme', 'light');
        }
    });
})();




