/* 

note if you don`t write a expiration date the item will be deleted after tab closed
note cookies with in selected path , that mean if you selected your cookie in  selected path only the specific page will work , and u can make general path = "/"

*/
// set item in cookie    document.cookie = 'name or key  = value'
document.cookie = 'name1=hamad w'



// set a expiration for the item after value || useing UTC time new Date(year,month,day).toUTCString()
// note if you don`t write a expiration date the item will be removed after tab closed
document.cookie = 'name2= salah ; expires=' + new Date(2022,6,22).toUTCString()
 

// delete cookie



// to print everything in cookies 
console.log(document.cookie);
console.log(new Date());


// library section url:   https://github.com/florian/cookie.js

cookie.set('key', 'value',12); // theard parameter for expiration (in day)
// also you can set multi values in one function by parsing it as a object 
cookie.set({
    key1: 'hi',
    key2: 'hi again',
    key3: 'hi again again'
},7) // also here you will defined the expiration for all values 

// get item from cookies by parsing the key in get method
console.log(cookie.get('key3'));

// also you can remove it by there key in remove method
cookie.remove('key2');

