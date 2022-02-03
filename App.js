var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";

//replace()

// console.log(s.replace("dummy", "hello"));
// // console.log(s.replace("uuuuu", "hello"));

// var str = s.replace("dummy", "hello")
// console.log(s);
// console.log(str);

// console.log(s.replace(/e/g, "--")); //regex tümünü değiştir.

//search()

// console.log(s.search("text"));

// console.log(s.search("Text"));
// console.log(s.search(/Text/i));

// console.log(s.indexOf("text", 30));

//slice()

// console.log(s.slice(0, 5));
// console.log(s.slice(6));

// console.log(s.slice(12,-10));

// console.log(s.slice(-31, -10)); //her zaman sağa doğru çalışır.ters çalışmaz.
// console.log(s.slice(-31, 76));
// console.log(s.slice(54, 76));
// console.log(s.slice(-31, 10)); //boş string verir. Ters çalışmaz.

//split() methodu

// console.log(s.split(" ")); //boşluklar arasına virgül koyar.
// console.log(s.split("")); // her harf arasına virgül koyar.
// console.log(s.split());

// substr() methodu

// console.log(s.substr(22, 10));

//substring methodu

// console.log(s.substring(22,33));
// console.log(s.substring(33,22));
// console.log(s.substring(33,-22));


// //toLowerCase toUpperCase Methodu

// var pangram = "pijamalı hasta yağız şoföre çabucak güvendi"

// // console.log(pangram.toUpperCase('tr-TR'));//i ve ç harfleri sıkıntılı

// var Pangram = pangram.toLocaleUpperCase("tr-TR");
// console.log(Pangram.toLocaleLowerCase);


//trim methodu

// var s = "               <-Welcome \t to Clarus\tway->     "
// console.log(s.trim());
// console.log(s.trimLeft());
// console.log(s.trimRight());
