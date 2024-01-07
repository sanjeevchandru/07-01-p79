document.write("43.to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit."+"<br>");
function test43(x,y,z){
    if(x%10==y%10 || y%10==z%10 || z%10==x%10){
        return true;
    }
    return false;
}
document.write("The numbers are :20,20,43  ,Ans :"+test43(20,20,43)+"<br>");
document.write("The numbers are :,23,22,20  ,Ans :"+test43(23,22,20)+"<br>")
document.write("The numbers are :33,33,33  ,Ans :"+test43(33,33,33)+"<br><br>");