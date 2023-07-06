  let arr = [1,2,3,1 ,1]
  let arr1 = [1,2,3]

  function arrpush(arr, arr1){

    if( arr.length !== arr1.length){
      return arr.concat(arr1) 
      
    }

    for(i = 0; i <arr1.length; i++){
      if(arr[i]!==arr1[i] ){
        return arr.concat(arr1)
  
      }
    }
    return arr
  }

  console.log(arrpush(arr, arr1))




















// array = [1,2,3,4,6,8]
//   if (array.length === 0) {
//   return 0;
//   }
  
//   let result = 0;
//   let count = 0
//   for (i=0; i<array.length; i++) {
//     if(array[i] % 2 == 0 ){
//       result +=array[i];
//       count ++;
//     }
//   }
//   console.log(result/count); 






// function fibonacci(num) {
// 	let num1 = 0;
// 	let num2 = 1;
// 	let sum;
// 	let i = 0;
// 	for (i = 0; i < num; i++) {
// 		sum = num1 + num2;
// 		num1 = num2;
// 		num2 = sum;
// 	}
// 	return num2;
// }

// console.log("Fibonacci(5): " + fibonacci(5));
// console.log("Fibonacci(8): " + fibonacci(8));

  
  





// function func(str){
//   let count = ''
//   for(i=0; i< str; i++){
//     if (str[i] == 'a' || str[i] == 'o' || str[i] == 'i'){
//       count += '#'
//     }else{
//       count += str[i]
//     }
//   }
//   console.log(count);
// }

// let arr = [1,3,5,3,1]
// func(arr)






// function ellik(x){
//   for(i = 0; i < x; i++){
//     if( i % 3 == 0 && i % 5 ==0){
//       console.log(i);
//     }
//   }
// }

// ellik(80)















// arr = []
// function calc (x, y){
//   arr.push(x + y) 
//   arr.push(x - y) 
//   arr.push(x / y) 
//   arr.push(x * y) 
// }
// calc(2,4)
// console.log(arr);

// function func(str) {

//   let count=""
   

  //  for(let i = 0; i < str.length; i++){

//        if(str[i] == 'a' ){
//          count = count + "2"
         
//        }else if(str[i] == 'b'){
         
//          count = count + "1"

//        }else{
//          count += str[i]
//        }
//    }
//    return count
//  }





// let str="Salomb"
// console.log(func( str))




// function square_figure_with_space(n){
//   for(i=1;i<=n;i++){
//       let result = ""
//       for(j=1;j<=n;j++){
//           if(i==1 || i==n ||  j==1 || j==n){
//               result += "*"
//           }else{
//               result += " "
//           }
//       }
//       console.log(result)
//   }
// }

// square_figure_with_space(10)






// function printTriangle(height) {
//   for (let i = 1; i <= height; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//       row += '* ';
//     }
//     console.log(row);
//   }
// }

// // ishlatilishi 
// printTriangle(5);


// let a =1;
// do{
//   console.log("hello");
//   a--
// }while(a>=0);

// let str = "salom"
// let count = ""
// for (i = 0; i < str.length; i++ ){
//   if(str[i] == "a" || 
//     str[i]== "o" || 
//     str[i] == "i" ||
//     str[i]=="e" || 
//     str[i]=="u" || 
//     str[i] == "o'"){

//     count += "#"

//   }else{
//     count += str[i]
//   }
// }
// console.log(count);












// let x = ""

// for (i=1; i <=5; i++){
//   x = x + " *"
//   console.log(x);
// }















// let str=  "salom"


// let count = ""

//     for(let i =0; i < str.length; i++){
//         if(str[i] == 'a' || str[i] == 'i' || str[i] == 'u' || str[i] == 'o' || str[i] == 'o`'){
//             count = count + "#"
//         }else{
//             count = count + str[i]
//         }
//     }

//     console.log(count);


// let arr = ["salom", "anor", "olma", "xayr", "archa"]

// console.log(arr[0][arr.length-1]);

// for (i = str.length-1; i >= 0; i--){
//   str1 += str[i]
// }
// console.log(str1);






    // let arr1 = [];

    // let arr = ["salom", "anor", "olma", "xayr", "archa"]


    // console.log(arr.length-1);




    // for(let i = 0; i < arr.length; i++) {

    //     if( arr[i][0] == "a" ){
    //         arr1.push(arr[i])
    //     }
        

    // }
    // console.log(arr1);









// let a = 8 
// let b  = 10 
// let c = 0
// console.log(a);
// console.log(b);

//  c = b

//  b = a
 
//  a = c

//  console.log(a);
//  console.log(b);

// let speed = 100

// const max_speed = 70

// const km_point = 5

// const max_point= 12

// if (max_speed +km_point > speed){
//   console.log("OK");
//   return
// }else {
//    let point = (speed - max_speed) / km_point 
//    if(point > max_point){
//      console.log("Guvohnoma olib quyiladi");
//      return
//     }
//     console.log(Math.floor(point));
// }



// let x = 35

// if (x > 50 && x<60){
//     console.log("d grade")
// } else if (x>70 && x<80){
//     console.log("b grade")
// } else if (x>60 && x<70){
//     console.log ("c grade")
// } else if (x>80 && x<90){
//     console.log ("a grade")
// } else if (x>40 && x<50){
//     console.log ("e grade")
// } else if (x>0 && x<40){
//     console.log("student has failed")
// } else if (x>90 && x<100){
//     console.log ("s grade")
// }






// let a = 15


// if(a %3 == 0&& a %5 ==0 ){
//     console.log("fizzbuzz")
// } 
// else if(a% 3 == 0 ){
//     console.log("fizz")

// }
// else if(a % 5 == 0){
//     console.log("buzz")
// }


// let x = 3
// let y = 5

// op = "add"

// if (op == "add"){
//     console.log(`javob : ${x + y}`)
// }

// let name = "Davlat"
// let marks = 85
// console.log(typeof marks)
// console.log(typeof name)

// if(marks >= 90 && marks <= 100){
//     console.log(`${name} you have ${marks} received A grade`)
//   }
//   else if(marks >= 80 && marks < 90){
//     console.log(`${name} you have received A grade`)
//   }
//   else if(marks >= 70 && marks < 80){
//     console.log(`${name} you have received B grade`)
//   }
//   else if(marks >= 60 && marks < 70){
//     console.log(`${name} you have received C grade`)
//   }
//   else if(marks >= 50 && marks < 60){
//     console.log(`${name} you have received D grade`)
//   }
//   else if(marks >= 40 && marks < 50){
//     console.log(`${name} you have received E grade`)
//   }
//   else if(marks >= 0 && marks <40){
//     console.log(`${name} you have Failed`)
//   }
//   else{
//     console.log(`Invalid marks of ${marks}`)
//   }



  // let x = 10 
  // let y = 5 
  // let operation = "qoshish"
//   "ayirish", "bolish", "kopaytirish", "qoldiqli bo`lish"


  // if (operation == "qoshish"){
  //   console.log(x+y);
  // }else if (operation == "ayirish"){
  //   console.log(x-y);
  // }


  // let password = 1234 

  // switch(password){
  //   case 1234:
  //      console.log("kirish mumkin");
  //      break;
  //   case 1005:
  //     console.log("xush kelibsz director"); 
  //     break;
  //   case 2005:
  //       console.log("xush kelibsz admin"); 
  //       break;  
  //   default :
  //     console.log("kirish mumkin emas");
  // }


  // let arr = [1, 2, 3, 4 ,5];

  // if (arr.length > 0) {
  //   console.log("ok");
  // }


  // let person = {
  //   name:    'Jane',
  //   age:     37,
  //   hobbies: ['photography', 'genealogy'],
  // };

  // if (person.hobbies.length > 0){
  //   person.hobbies.pop()
  // }else{
  //   person.hobbies.push("driver")
  // }

  // console.log(person.hobbies);

  // let library = [ 
  //   {
  //       title:  'The Road Ahead',
  //       author: 'Bill Gates',
  //       libraryID: 1254
  //   },
  //   {
  //       title: 'Walter Isaacson',
  //       author: 'Steve Jobs',
  //       libraryID: 4264
  //   },
  //   {
  //       title: 'Mockingjay: The Final Book of The Hunger Games',
  //       author: 'Suzanne Collins',
  //       libraryID: 3245
  //   }];


  //   console.log(library[1].author);