/*


 */
// let a = 1;
// let c='',d='';
// while (a<=10) {
//     c = c + '<tr>';
//     let b = 1;
//     while(b<=10) {
//         d='<td>'+a*b+'</td>'
//         c=c+d;
//         b++;
//     }
//     c=c+'</tr>';
//     a++;
// }
// document.write('<table border="1" cellspacing="0">'+c+'</table>');
// ====================cách 3================================
// let a=1;
// document.write('<table border="1" cellspacing="0">');
// while (a<=10){
//     document.write('<tr>');
//     let b=1;
//     while (b<=10) {
//         document.write('<td>'+a*b+'</td>');
//         b++;
//     }
//     document.write('</tr>');
//     a++
// }
// document.write('</table>');
// ===============cách 2===================
let a = 1;
let c=10;
let b;
document.write('<table border="1" cellspacing="0">');
while (a<=10) {
    document.write('<tr>');
    b=0;
    while (b<c) {
        +document.write('<td>' +(a+b)+ '</td>');
        b = b + a;
    }
    document.write('</tr>');
    a++;
    c=c+10;
}
document.write('<table>');
/**===========================cách 1====================================
 * let a;
 let b;
 document.write('<table border="1" cellspacing="0">');
 for (a=1;a<=10;a++) {
    document.write('<tr>');
        for(b=1;b<=10;b++) {
        document.write('<td>'+a*b+'</td>');
        }
        document.write('</tr>');
    }
 document.write('</table>');
 */