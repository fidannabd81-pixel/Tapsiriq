let mehsulAdi="saat";
let mehsulQiymeti=400;
let endirimFaizi=20;
let stokdaVarmi=true;
let endirimliQiymet=mehsulQiymeti-(mehsulQiymeti*endirimFaizi/100);
console.log("Mehsul:" + mehsulAdi);
console.log("Endirimli Qiymet:" + endirimliQiymet +"AZN" );
console.log(mehsulQiymeti > 50 && stokdaVarmi);
