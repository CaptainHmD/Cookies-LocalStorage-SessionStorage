/* 
note if you don`t write a expiration date the item will be removed after tab closed
note cookies with in selected path , that mean if you selected your path in selected page it will work there only , and u can make general path = "/"


*/
// set item in cookie    document.cookie = 'name or key  = value'
document.cookie = 'name1=hamad'



// set a expiration for the item after value || useing UTC time new Date(year,month,day).toUTCString()
// note if you don`t write a expiration date the item will be removed after tab closed
document.cookie = 'name2= salah ; expires=' + new Date(2022,6,22).toUTCString()
 

// delete cookie



// to print everything in cookies 
console.log(document.cookie);
console.log(new Date());

// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }
//   console.log(getCookie('name2'));

cookie.set('key', 'value');
