var foodList=[
    ['image.png',"Osh","25.000","4.8","15","1024","Lorem ipsum"],
    ['manti.png',"Osh","29.000","4.8","15","1024","Lorem ipsum"],
    ['image.png',"Osh","25.000","4.8","15","1024","Lorem ipsum"],
    ['image.png',"Osh","25.000","4.8","15","1024","Lorem ipsum"],
    ['manti.png',"Osh","25.000","4.8","15","1024","Lorem ipsum"],
    ['image.png',"Osh","25.000","4.8","15","1024","Lorem ipsum"],

];
var foodSecList=[
    [
        ['Salatlar'],
        ['image.png',"Osh","25.000","4.8","15","1024","Lorem ipsum"],
        ['image.png',"Osh","25.000","4.8","15","1024","Lorem ipsum"],
        ['manti.png',"Osh","25.000","4.8","15","1024","Lorem ipsum"],
        ['image.png',"Osh","25.000","4.8","15","1024","Lorem ipsum"],
        ['image.png',"Osh","25.000","4.8","15","1024","Lorem ipsum"],
        ['image.png',"Osh","25.000","4.8","15","1024","Lorem ipsum"]
    ]
];
var iFoodList=document.querySelector('#iFoodList');
// console.log(iFoodList);
var x=foodList.length;
var z='';
for(var i=0;i<x;i++){
    z+='<div class="foodCard"><div class="foodImg" onclick="showFood('+i+',-1)"><img src="assets/img/'+foodList[i][0]+'" alt="'+foodList[i][1]+'"></div><div class="foodName">'+foodList[i][1]+'</div></div>';
}
// console.log(z);
iFoodList.innerHTML=z;

function showFoodSection(x){
    var foodListEl=document.querySelector('#foodListEl');
    var z='';
    for(let i=1; i<foodSecList[x].length; i++){
        z+='<div class="foodCard" onclick="showFood('+i+','+x+')"><div class="foodImg"><img src="assets/img/'+foodSecList[x][i][0]+'" alt="'+foodSecList[x][i][1]+'"></div><div class="foodName">'+foodSecList[x][i][1]+'</div></div>';
    }
    // console.log(z);
    foodListEl.innerHTML=z;
    showMidFL();
}


function showFood(x,y){
    if(y==-1){
        var foodListA=foodList;

    }else{
        var foodListA=foodSecList[y];
    }
    var sFoodImg=document.querySelector('#sFoodImg');
    var sFoodName=document.querySelector('#sFoodName');
    var sFoodPrice=document.querySelector('#sFoodPrice');
    var sFoodRate=document.querySelector('#sFoodRate');
    var sFoodTime=document.querySelector('#sFoodTime');
    var sFoodEnergyM=document.querySelector('#sFoodEnergyM');
    var sFoodInfoDescription=document.querySelector('#sFoodInfoDescription');
    sFoodImg.innerHTML='<img src="assets/img/'+foodListA[x][0]+'" alt="">';
    sFoodName.innerHTML=foodListA[x][1];
    sFoodPrice.innerHTML=foodListA[x][2];
    sFoodRate.innerHTML=foodListA[x][3];
    sFoodTime.innerHTML=foodListA[x][4];
    sFoodEnergyM.innerHTML=foodListA[x][5];
    sFoodInfoDescription.innerHTML=foodListA[x][6];
    showUFI();

}
var ImgSliderEl=document.querySelector('#ImgSlider');
var im1El=document.querySelector('.im1');
var im2EL=document.querySelector('.im2');
// var im3EL=document.querySelector('.im3');
var i=0;
var j=1;
var x=setInterval(function(){
    var im1El=document.querySelector('.im1');
    var im2EL=document.querySelector('.im2');
    i++;
    j++;
    if((j+1)>foodList.length){
            j=0;
        }
        if((i+1)>foodList.length){
            i=0;
        }
        im1El.innerHTML='<img src="assets/img/'+foodList[i][0]+'" alt="">';
        document.querySelector('.im2').innerHTML='<img src="assets/img/'+foodList[j][0]+'" alt="">';
},2000);
