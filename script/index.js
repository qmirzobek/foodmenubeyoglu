var foodList=[
    ['image.png',"Osh","25.000","4.8","15","1024","Lorem ipsum","not"],
    ['manti.png',"Osh","29.000","4.8","15","1024","Lorem ipsum","not"],
    ['sezar2.png',"Osh","25.000","4.8","15","1024","Lorem ipsum","cont"],
    ['pide1.png',"Osh","25.000","4.8","15","1024","Lorem ipsum","cont"],
    ['image.png',"Osh","25.000","4.8","15","1024","Lorem ipsum","not"],
    ['manti.png',"Osh","25.000","4.8","15","1024","Lorem ipsum","not"]

];






var i=0;
        var imgArray=foodList;
        var ImgSliderEl=document.querySelector('#ImgSlider');
        var z="";
        for(var i=0;i<imgArray.length;i++){
            z+='<div class="slImg im'+(i+1)+'" id="im'+(i+1)+'"><img src="assets/img/'+foodList[i][0]+'" alt="" onclick="showFood('+i+',-1)"></div>';
        }
        ImgSliderEl.innerHTML=z;
        // var f=setInterval(function(){
        //     ImgSliderEl.scrollTo()
        // },2000);
        var fPrevButtonEl=document.querySelector('.fPrevButton');
        var fNextButtonEl=document.querySelector('.fNextButton');
        var ImgSliderEl=document.querySelector('#ImgSlider');
        var im1El=document.querySelector('.im1');
        var im2EL=document.querySelector('.im2');
        fPrevButtonEl.addEventListener('click',()=>{
            // var fImgEl=document.querySelector('#fImg');
            i--;
            if(i<0){
                i=imgArray.length-1;
            }
            // fImgEl.innerHTML='<img src="assets/img/'+imgArray[i]+'" alt="">';
            im1El.innerHTML='<img src="assets/img/'+foodList[i][0]+'" alt="" onclick="showFood('+i+',-1)">';
        });
        fNextButtonEl.addEventListener('click',()=>{
            var fImgEl=document.querySelector('#fImg');
            i++;
            if(i>=imgArray.length){
                i=0;
            }
            im1El.innerHTML='<img src="assets/img/'+foodList[i][0]+'" alt="" onclick="showFood('+i+',-1)">';
        });






var foodSecList=[
    [
        ['Salatlar','sezar2.png','#fff','#12df93','left','cont'],
        ['image.png',"BEY OGLU Salat","36.000","4.8","15","365","Lorem ipsum","cont"],
        ['image.png',"Tulum","41.000","4.8","15","1024","Lorem ipsum","not"],
        ['manti.png',"Mevsim","38.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"n salat","25.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Smak","34.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Mujskoy kapriz","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Amerikacha salat","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Yaponcha salat","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Sezar","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Frasuzcha salat","34.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Salat poko","38.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Chi kayte","29.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Jajik","26.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Myasli dolma","34.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Suzma","23.000","4.8","15","1024","Lorem ipsum"]
    ],
    [
        ['Ikkinchi ovqat','mangal-set-1.png','#fca321','#333','right','not'],
        ['image.png',"BEY OGLU Salat","36.000","4.8","15","365","Lorem ipsum","not"],
        ['image.png',"Tulum","41.000","4.8","15","1024","Lorem ipsum"],
        ['manti.png',"Mevsim","38.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"n salat","25.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Smak","34.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Mujskoy kapriz","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Amerikacha salat","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Yaponcha salat","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Sezar","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Frasuzcha salat","34.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Salat poko","38.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Chi kayte","29.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Jajik","26.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Myasli dolma","34.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Suzma","23.000","4.8","15","1024","Lorem ipsum","not"]
    ],
    [
        ['Salatlar','image.png','#fff','#333','left','not'],
        ['image.png',"BEY OGLU Salat","36.000","4.8","15","365","Lorem ipsum","not"],
        ['image.png',"Tulum","41.000","4.8","15","1024","Lorem ipsum"],
        ['manti.png',"Mevsim","38.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"n salat","25.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Smak","34.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Mujskoy kapriz","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Amerikacha salat","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Yaponcha salat","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Sezar","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Frasuzcha salat","34.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Salat poko","38.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Chi kayte","29.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Jajik","26.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Myasli dolma","34.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Suzma","23.000","4.8","15","1024","Lorem ipsum","not"]
    ],
    [
        ['Pide','pide1.png','#000','rgb(255 160 0)','right','cont'],
        ['image.png',"Myasnoy pide","58.000","4.8","15","365","Lorem ipsum","not"],
        ['image.png',"Frarshli pide","41.000","4.8","15","1024","Lorem ipsum"],
        ['manti.png',"Pishloqli pide","38.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Smeshnoy pide","58.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"BEY OGLU kapali pide","34.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Qovurmali kasarli pide","63.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Laxmadjun","28.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Yaponcha salat","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Sezar","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Frasuzcha salat","34.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Salat poko","38.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Chi kayte","29.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Jajik","26.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Myasli dolma","34.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Suzma","23.000","4.8","15","1024","Lorem ipsum","not"],
    ],
    [
        ['Ikkinchi ovqatlar','image.png','#fff','#333','right','not'],
        ['image.png',"BEY OGLU Salat","36.000","4.8","15","365","Lorem ipsum","not"],
        ['image.png',"Tulum","41.000","4.8","15","1024","Lorem ipsum"],
        ['manti.png',"Mevsim","38.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"n salat","25.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Smak","34.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Mujskoy kapriz","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Amerikacha salat","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Yaponcha salat","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Sezar","45.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Frasuzcha salat","34.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Salat poko","38.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Chi kayte","29.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Jajik","26.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Myasli dolma","34.000","4.8","15","1024","Lorem ipsum","not"],
        ['image.png',"Suzma","23.000","4.8","15","1024","Lorem ipsum","not"]
    ],
];

var categories=document.querySelector('#categories');
var z='<button class="indie-flower-regular" onclick="showMid()">All</button>';
// console.log(foodSecList.length);
for(var i=0;i<foodSecList.length;i++){
    // console.log(foodSecList);
    z+='<button class="indie-flower-regular" onclick="showFoodSection('+i+')"><span>'+foodSecList[i][0][0]+'</span></button>';
    // console.log(foodSecList);
}
// console.log(z);
categories.innerHTML=z;




var categories=document.querySelector('#secList');
var z='';
// console.log(foodSecList.length);
for(var i=0;i<foodSecList.length;i++){
    // console.log(foodSecList);
    if(foodSecList[i][0][4]==="right"){   
        z+='<div class="sectionCard right" style="background-color:'+foodSecList[i][0][3]+';" onclick="showFoodSection('+i+')"><div class="borName" style="color:'+foodSecList[i][0][2]+';">'+foodSecList[i][0][0]+'</div><div class="borImg '+foodSecList[i][0][5]+'"><img src="assets/img/'+foodSecList[i][0][1]+'" alt="'+foodSecList[i][0][0]+'"></div></div>';
    }else{
        z+='<div class="sectionCard left" style="background-color:'+foodSecList[i][0][3]+';" onclick="showFoodSection('+i+')"><div class="borImg '+foodSecList[i][0][5]+'"><img src="assets/img/'+foodSecList[i][0][1]+'" alt=""></div><div class="borName" style="color:'+foodSecList[i][0][2]+';">'+foodSecList[i][0][0]+'</div></div>';
    }
    // z+='<button class="indie-flower-regular" onclick="showFoodSection('+i+')">'+foodSecList[i][0][0]+'</button>';
    // console.log(foodSecList);
}
// console.log(z);
categories.innerHTML=z;







var iFoodList=document.querySelector('#iFoodList');
// console.log(iFoodList);
var x=foodList.length;
var z='';
for(var i=0;i<x;i++){
    z+='<div class="foodCard"><div class="foodImg '+foodList[i][7]+'" onclick="showFood('+i+',-1)"><img src="assets/img/'+foodList[i][0]+'" alt="'+foodList[i][1]+'"></div><div class="foodName">'+foodList[i][1]+'</div></div>';
}
// console.log(z);
iFoodList.innerHTML=z;

function showFoodSection(x){
    var catName=document.querySelector('#catName');
    // console.log(catName);
    catName.innerHTML=foodSecList[x][0][0];
    var sectionList=document.querySelector('.midFoodList');
    sectionList.scrollTop=2;
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
    var foodname=foodListA[x][1]
    sFoodName.innerHTML=foodname;
    console.log(foodListA[x][1]);
    
    if((foodname).length>7){
        console.log('long');
        sFoodName.classList.add('long');
        sFoodPrice.classList.add('long');
    }
    sFoodPrice.innerHTML=foodListA[x][2];
    sFoodRate.innerHTML='<i class="ri-star-line" style="color:#ffc000;"></i> '+foodListA[x][3];
    sFoodTime.innerHTML='<i class="ri-time-line" style="color:#04a4ff;"></i> '+foodListA[x][4];
    sFoodEnergyM.innerHTML='<i class="ri-fire-line" style="color:#fca321;"></i> '+foodListA[x][5];
    sFoodInfoDescription.innerHTML=foodListA[x][6];
    showUFI();
}
var ImgSliderEl=document.querySelector('#ImgSlider');
// var im1El=document.querySelector('.im1');
// var im2EL=document.querySelector('.im2');
// var im3EL=document.querySelector('.im3');
var i=0;
var j=1;
var x=setInterval(function(){
    var im1El=document.querySelector('#im1');
    var im2EL=document.querySelector('.im2');
    i++;
    j++;
    if((j+1)>foodList.length){
            j=0;
        }
        if((i+1)>foodList.length){
            i=0;
        }
        im1El.innerHTML='<img src="assets/img/'+foodList[i][0]+'" alt="" onclick="showFood('+i+',-1)">';
        document.querySelector('.im2').innerHTML='<img src="assets/img/'+foodList[j][0]+'" alt="" onclick="showFood('+j+',-1)">';
},3500);
