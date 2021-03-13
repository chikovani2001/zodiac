let ready = document.querySelector('#ready')
ready.onclick = function() {
    chekFunc();
}

function chekFunc(){
    let variable = document.querySelector('#month').value
    let vari = document.querySelector('#idd').value
    let numberi = document.querySelector('#numberi').value
    if(variable == "იანვარი" & numberi   == 25){
        const elem = document.createElement('p');
        elem.style.color = 'black';
        elem.style.fontSize = '12px';
        elem.innerText = `შენი ზოდიაქოს ნიშანი ${vari} არის - მერწყულიი, 25 იანვარს დაბადებული ადამიანის(თუ მისი სახელი ლიზია), მეორე ნახევარი დაბადებულია 25 თებერვალს - ფრაზე ეკუთვნის ცნობილ ასტროლოგ მიხეილ ცაგარელსს!`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "იანვარი" & numberi >= 20  | variable == "თებერვალი" & numberi <= 17){
        const elem = document.createElement('p');
        elem.style.color = 'black';
        elem.style.fontSize = '12px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - მერწყული`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
        console.log("შენი ზოდიაქოს ნიშანი არის - მერწყული")
    }else if(variable == "თებერვალი" & numberi >= 18 | variable == "მარტი" & numberi <= 19){
        const elem = document.createElement('p');
        elem.style.color = 'black';
        elem.style.fontSize = '12px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - თევზები`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "მარტი" & numberi  >= 20 | variable == "აპრილი" & numberi <= 19){
        const elem = document.createElement('p');
        elem.style.color = 'black';
        elem.style.fontSize = '12px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - ვერძი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "მარტი" & numberi  >= 20 | variable == "აპრილი" & numberi <= 20){
        const elem = document.createElement('p');
        elem.style.color = 'black';
        elem.style.fontSize = '12px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - კურო`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "მაისი" & numberi  >= 21 | variable == "ივნისი" & numberi <= 20){
        const elem = document.createElement('p');
        elem.style.color = 'black';
        elem.style.fontSize = '12px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - ტყუპები`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "ივნისი" & numberi  >= 21 | variable == "ივლისი" & numberi <= 22){
        const elem = document.createElement('p');
        elem.style.color = 'black';
        elem.style.fontSize = '12px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - კირჩხიბი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "ივლისი" & numberi  >= 23 | variable == "აგვისტო" & numberi <= 22){
        const elem = document.createElement('p');
        elem.style.color = 'black';
        elem.style.fontSize = '12px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - ლომი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "აგვისტო" & numberi  >= 23 | variable == "სექტემბერი" & numberi <= 22){
        const elem = document.createElement('p');
        elem.style.color = 'black';
        elem.style.fontSize = '12px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - ქალწული`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "სექტემბერი" & numberi  >= 23 | variable == "ოქტომბერი" & numberi <= 22){
        const elem = document.createElement('p');
        elem.style.color = 'black';
        elem.style.fontSize = '12px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - სასწორი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "ოქტომბერი" & numberi   >= 23 | variable == "ნოემბერი" & numberi <= 21){
        const elem = document.createElement('p');
        elem.style.color = 'black';
        elem.style.fontSize = '12px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - მორიელი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "ნოემბერი" & numberi   >= 22 | variable == "დეკემბერი" & numberi <= 21){
        const elem = document.createElement('p');
        elem.style.color = 'black';
        elem.style.fontSize = '12px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - მშვილდოსანი`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }else if(variable == "დეკემბერი" & numberi >= 22 | variable == "იანვარი" & numberi <= 19){
        const elem = document.createElement('p');
        elem.style.color = 'black';
        elem.style.fontSize = '12px';
        elem.innerText =  `შენი ზოდიაქოს ნიშანი ${vari} არის - თხის რქა`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);
    }
}

