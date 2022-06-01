str = "abbb34eftab0modabbbbb6";
var reg = /a(b)+(\d+)/i;
var arr = str.match(reg);
console.log(arr);