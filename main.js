var tahmin1=prompt('1. Zar Tahmini:' ,1);
var tahmin2=prompt('2. Zar tahmini:',1);

var tamsayi1=parseInt(tahmin1);
var tamsayi2=parseInt(tahmin2);
document.write('1. Tahmini zar:'+tahmin1+'<br>');
document.write('2. Tahmini zar:'+tahmin2+'<br>');

totalSayi=tamsayi1+tamsayi2;
document.write('Total Tahmininiz:'+totalSayi+'<br>');

var zar1=Math.random();
var zar2=Math.random();

if(zar1<1){
    zar1=(zar1+1)*6;
    zar2=(zar2+1)*6;
    zar1=Math.floor(zar1);
    zar2=Math.floor(zar2);
    if(zar1>6){
        zar1=zar1%6;
    }
    if(zar2>6){
        zar2=zar2%6;
    }
    document.write('1. zar:'+zar1+'<br>');
    document.write('2. zar:'+zar2+'<br>');
    zarTotal=zar1+zar2;
    document.write('Total Zar:'+zarTotal+'<br>');
}
AradakiFark=totalSayi-zarTotal;
if(totalSayi==zarTotal){
    document.write('Tebrikler total sayıyı bildiniz.');
}
else{
    document.write('Aradaki fark:'+AradakiFark);
}
