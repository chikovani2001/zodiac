let ready = document.querySelector('#ready')
ready.onclick = function() {
    chekFunc();
    chekFuncYear();
}

function chekFunc(){
    let variable = document.querySelector('#month').value
    let vari = document.querySelector('#idd').value
    let numberi = document.querySelector('#numberi').value
    if(variable == "იანვარი" & numberi   == 25){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText = `შენი ზოდიაქოს ნიშანი ${vari} არის - მერწყულიი, 25 იანვარს დაბადებული ადამიანის(თუ მისი სახელი ლიზია), მეორე ნახევარი დაბადებულია 25 თებერვალს - ფრაზე ეკუთვნის ცნობილ ასტროლოგ მიხეილ ცაგარელსს!`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "იანვარი" & numberi >= 20  | variable == "თებერვალი" & numberi <= 17){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - მერწყული`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
        console.log("შენი ზოდიაქოს ნიშანი არის - მერწყული")
    }else if(variable == "თებერვალი" & numberi >= 18 | variable == "მარტი" & numberi <= 19){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - თევზები`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "მარტი" & numberi  >= 20 | variable == "აპრილი" & numberi <= 19){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - ვერძი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "მარტი" & numberi  >= 20 | variable == "აპრილი" & numberi <= 20){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - კურო`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "მაისი" & numberi  >= 21 | variable == "ივნისი" & numberi <= 20){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - ტყუპები`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "ივნისი" & numberi  >= 21 | variable == "ივლისი" & numberi <= 22){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - კირჩხიბი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "ივლისი" & numberi  >= 23 | variable == "აგვისტო" & numberi <= 22){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - ლომი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "აგვისტო" & numberi  >= 23 | variable == "სექტემბერი" & numberi <= 22){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - ქალწული`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "სექტემბერი" & numberi  >= 23 | variable == "ოქტომბერი" & numberi <= 22){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - სასწორი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "ოქტომბერი" & numberi   >= 23 | variable == "ნოემბერი" & numberi <= 21){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - მორიელი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "ნოემბერი" & numberi   >= 22 | variable == "დეკემბერი" & numberi <= 21){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - მშვილდოსანი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "დეკემბერი" & numberi >= 22 | variable == "იანვარი" & numberi <= 19){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - თხის რქა`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }
}

function chekFuncYear(){
    let year = document.querySelector('#year').value
    if((year - 2000) % 12 == 0 ){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText = `ხოლო შენი ზოდიაქო ჩინური კალენდრით არის : დრაკონი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if((year - 2000) % 12 == 1 ){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText = `ხოლო შენი ზოდიაქო ჩინური კალენდრით არის : გველი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if((year - 2000) % 12 == 2 ){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText = `ხოლო შენი ზოდიაქო ჩინური კალენდრით არის : ცხენი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if((year - 2000) % 12 == 3 ){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText = `ხოლო შენი ზოდიაქო ჩინური კალენდრით არის : ცხვარი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if((year - 2000) % 12 == 4 ){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText = `ხოლო შენი ზოდიაქო ჩინური კალენდრით არის : მაიმუნი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if((year - 2000) % 12 == 5 ){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText = `ხოლო შენი ზოდიაქო ჩინური კალენდრით არის : მამალი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if((year - 2000) % 12 == 6 ){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText = `ხოლო შენი ზოდიაქო ჩინური კალენდრით არის : ძაღლი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if((year - 2000) % 12 == 7 ){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText = `ხოლო შენი ზოდიაქო ჩინური კალენდრით არის : ღორი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if((year - 2000) % 12 == 8 ){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText = `ხოლო შენი ზოდიაქო ჩინური კალენდრით არის : ვირთხა`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if((year - 2000) % 12 == 9 ){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText = `ხოლო შენი ზოდიაქო ჩინური კალენდრით არის : ხარი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if((year - 2000) % 12 == 19 ){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText = `ხოლო შენი ზოდიაქო ჩინური კალენდრით არის : ვეფხვი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if((year - 2000) % 12 == 11 ){
        const elem = document.createElement('p');
        elem.style.color = 'blue';
        elem.style.fontSize = '15px';
        elem.innerText = `ხოლო შენი ზოდიაქო ჩინური კალენდრით არის : კურდღელი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }
}