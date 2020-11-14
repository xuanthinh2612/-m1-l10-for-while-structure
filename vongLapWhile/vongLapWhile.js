let tong = 0;
let inputnumber= parseInt(prompt('Nhập vào số -1 để kết thúc hoặc không bao giờ?'))

while (inputnumber!= -1) {
    tong = tong+inputnumber;
    alert(tong)
    inputnumber=parseInt(prompt('Nhập vào số -1 để kết thúc hoặc không bao giờ?'))
}