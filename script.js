var squares=document.getElementsByTagName("td");
var player1=0;
var player2=0;
function clearSquares(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML="";
  }
  turn=true;
  count=1;
}
for (var i = 0; i < squares.length; i++) {
  var turn=true;
  var count=1;
  squares[i].addEventListener("click",myFunction);
}
function myFunction() {
    if(count%2!=0 && this.innerHTML=="" && turn==true){
      this.innerHTML = "X";
      count+=1;
    }
    else if(count%2==0 && this.innerHTML=="" && turn==true){
      this.innerHTML="O";
      count+=1;
    }
    console.log(count);
    if(winner()!=-1 && winner()!=""){
      if(winner()=="X"){
        alert("X is winner");
        player1+=1;
        assign();
      }
      else{
        alert("O is winner");
        player2+=1;
        assign();
      }
      turn=false;
    }
    if(draw()==1){
      alert("Draw");
    }
}
function winner(){
  f1=document.getElementById('00').textContent;
  f2=document.getElementById('01').textContent;
  f3=document.getElementById('02').textContent;
  f4=document.getElementById('10').textContent;
  f5=document.getElementById('11').textContent;
  f6=document.getElementById('12').textContent;
  f7=document.getElementById('20').textContent;
  f8=document.getElementById('21').textContent;
  f9=document.getElementById('22').textContent;
  if(f1==f2 && f2==f3 && f1==f3){return f3;}
  if(f4==f5&& f5==f6 && f4==f6){return f6;}
  if(f7==f8 && f2==f9 && f7==f9){return f9;}
  if(f1==f4 && f4==f7 && f1==f7){return f7;}
  if(f2==f5 && f5==f8 && f2==f8){return f8;}
  if(f3==f6 && f6==f9 && f3==f9){return f9;}
  if(f1==f5 && f5==f9 && f1==f9){return f9;}
  if(f3==f5 && f5==f7 && f3==f7){return f7;}
  return -1;
}
function draw(){
  if(count==10 && turn==true){return 1;}
  return -1;
}
function assign(){
  document.getElementById("one").innerHTML=player1;
  document.getElementById("two").innerHTML=player2;
}
