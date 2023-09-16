 let day=new Date().getDay();
 console.log(day);
 if(new Date().getHours()>=0 && new Date().getHours()<6 ){
    document.body.style.backgroundColor='black'
    alert(`Geceniz xeyire`)
 }

else if(new Date().getHours()>=6 && new Date().getHours()<12 ){
    document.body.style.backgroundColor='white'
    alert(`Sabahiniz xeyir`)
}

else if(new Date().getHours()>=12 && new Date().getHours()<18 ){
    document.body.style.backgroundColor='yellow'
    alert(`Gunortaniz xeyir`)
}
else if(new Date().getHours()>=18 && new Date().getHours()<24 ){
    document.body.style.backgroundColor='grey'
    alert(`Axsaminiz xeyir`)
}

