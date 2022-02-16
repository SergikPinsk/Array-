var newArrayy = ['Sergey', 'Olya', 'Mark'];
console.log(newArrayy);
newArrayy[2] = 'Pavel';
console.log(newArrayy);
newArrayy[3] = 'Mark'; 
console.log(newArrayy);
newArrayy.push('bro', 'stek');
console.log(newArrayy);
newArrayy.shift();
console.log(newArrayy);
newArrayy.pop();
console.log(newArrayy);



// Метод Splice

//Удаление элемента из массива
var arrSpl = ['Sergo','Olechka','Safi'];
arrSpl.splice(1,1);
console.log(arrSpl);

// Удаление элемента из массива и присваивание его другой переменной 
var arrSpl = ['Sergo','Olechka','Safi'];
var arrTwo = arrSpl.splice(1,1);
console.log(arrTwo);


// Замена элемента 
var arrThree = ['Sergo', 'Olya' ,'Safi'];
arrThree.splice(0,1,'Mark');
console.log(arrThree);


// Добавление элементов 
var arrFour = ['Sergo', 'Olya' ,'Safi'];
arrFour.splice(1,0,'Mary','Mark');
console.log(arrFour);


// Удаляем элемент 
var arrFife = ['Sergo', 'Olya' ,'Safi'];
arrFife.splice(-2,1)
console.log(arrFife);



// Метод SLICE

var arrOne = ['Sergo', 'Olya' ,'Safi'];
 var arrResult = arrOne.slice(1,2);
 console.log(arrResult);

 var arrResultTwo = arrOne.slice(-2,-1);
 console.log(arrResultTwo);


 // Копирую весь массив 
 var arrResultNew = arrOne.slice()
 console.log(arrResultNew);

 // Метод Concat
 var arrNewElement = arrOne.concat('Serhio');
 console.log(arrNewElement);



 //Поиск элемента в массиве 

//indexOf
 console.log(arrOne.indexOf('Sergo'));  // найдет 0 элемент 
 console.log(arrOne.indexOf('Bro')); //  покажет - 1 , так как элемент не найден
 console.log(arrOne.indexOf('Sergo',1)) // покажет - 1 , даже если и присутсвует искомый элемент в массиве , он будет искать только с перво позиции , а у нас это 0 позиция 
 

 //includes
 console.log(arrOne.includes('Sergo'));  // высветит true  так как этот элемент есть в массиве 
 console.log(arrOne.includes('Вася')); // высветит fase т.к таког элемента в массиве нету 
 console.log(arrOne.includes('Sergo',1)); // Тоже высветит false т.к  этот  элемент массива хоть и присутвует но программа будет искать с первого элемена а искомый у нас 0 элемент 



// сортировка массивов 
console.log(arrOne.sort());  // отсортировал массив по порядку алфавита 


 var arrNumber = [1,22,8];
 console.log(arrNumber.sort());


// // преобразование массивов 

 var result = arrOne.map(function(item,index,array) {
   return item[1];
 })
 console.log(arrOne);
 console.log(result);


// //Преобразование массивов метод split
 var str = 'Сергей , Олька, Сафия';
 var newStrArr = str.split(',');
 console.log(newStrArr);


 // Преобразование массива в строку 
 var arrJo = ['Sergo','Olya','Safi'];
 var strJo = arrJo.join(',');
 console.log(strJo);


 var newNewArr = [];
 var newwArr = {};
 console.log(typeof newNewArr);
 console.log(typeof newwArr);

 if (Array.isArray(newNewArr)) {
   console.log('Это массив ');
 } else {
   console.log('Это не массив !');
 }


 // Цикл For....Of
 var arrNewArr = ['Sergo','Olya','Safi'];
 for (newRay of arrNewArr) {
   console.log(newRay);
 }

var users = ['Ваня','Иштва'];
users.push('Катя');
console.log(users);
users.splice(1,1, 'Петя');
console.log(users);
var newResultArrOne = users.shift();
console.log(newResultArrOne);
users.splice(0,0, 'Маша', 'Паша');
console.log(users);
