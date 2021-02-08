var para=0;
var result=0;
var symbol="";
var whether_euqal=0;
var show_result=0;
function cal_load(){
    
    screen=document.getElementById("screen");
    subscreen=document.getElementById("subscreen");
    btn_1=document.getElementById(1);
    btn_2=document.getElementById(2);
    btn_3=document.getElementById(3);
    btn_4=document.getElementById(4);
    btn_5=document.getElementById(5);
    btn_6=document.getElementById(6);
    btn_7=document.getElementById(7);
    btn_8=document.getElementById(8);
    btn_9=document.getElementById(9);
    btn_0=document.getElementById(0);
    //number button
    btn_add=document.getElementById("add");
    btn_minus=document.getElementById("minus");
    btn_divide=document.getElementById("divide");
    btn_multi=document.getElementById("multi");
    //+-*/
    btn_equalTo=document.getElementById("equalTo");
    //=
    

    btn_1.addEventListener("click",function(){type_in_num(this.innerHTML)});
    btn_2.addEventListener("click",function(){type_in_num(this.innerHTML)});
    btn_3.addEventListener("click",function(){type_in_num(this.innerHTML)});
    btn_4.addEventListener("click",function(){type_in_num(this.innerHTML)});
    btn_5.addEventListener("click",function(){type_in_num(this.innerHTML)});
    btn_6.addEventListener("click",function(){type_in_num(this.innerHTML)});
    btn_7.addEventListener("click",function(){type_in_num(this.innerHTML)});
    btn_8.addEventListener("click",function(){type_in_num(this.innerHTML)});
    btn_9.addEventListener("click",function(){type_in_num(this.innerHTML)});
    btn_0.addEventListener("click",function(){type_in_num(this.innerHTML)});
    btn_add.addEventListener("click",function(){press_calbtn(this.innerHTML)})
    btn_minus.addEventListener("click",function(){press_calbtn(this.innerHTML)})
    btn_multi.addEventListener("click",function(){press_calbtn(this.innerHTML)})
    btn_divide.addEventListener("click",function(){press_calbtn(this.innerHTML)})
    btn_equalTo.addEventListener("click",function(){press_equalTo()})
}

function type_in_num(num){
    show_result=0;
    if (screen.innerHTML==""){
        screen.innerHTML=num;
        screen.style.textAlign="left";
    }else{
        screen.innerHTML=screen.innerHTML+num;
    }
    check(screen.innerHTML);
    
}
//1,2,3,4,5,6,7,8,9,0
function press_calbtn(sym){
    if (screen.innerHTML!="" && subscreen.innerHTML==""){
        
        subscreen.innerHTML=screen.innerHTML+String(sym);
        result=screen.innerHTML;
        screen.innerHTML="";
        symbol=sym;
    }else if ((String(subscreen.innerHTML)
    .substring(subscreen.innerHTML.length-1,subscreen.innerHTML.length)=="+"||
    String(subscreen.innerHTML)
    .substring(subscreen.innerHTML.length-1,subscreen.innerHTML.length)=="-"||
    String(subscreen.innerHTML)
    .substring(subscreen.innerHTML.length-1,subscreen.innerHTML.length)=="*"||
    String(subscreen.innerHTML)
    .substring(subscreen.innerHTML.length-1,subscreen.innerHTML.length)=="/")&&screen.innerHTML!=0){
        
        subscreen.innerHTML="("+subscreen.innerHTML+screen.innerHTML+")"+String(sym);
        para=screen.innerHTML;
        screen.innerHTML="";
        if (String(symbol)=="+"){result=Number(result)+Number(para)}
        else if (String(symbol)=="-"){result=Number(result)-Number(para)}
        else if (String(symbol)=="*"){result=Number(result)*Number(para)}
        else if (String(symbol)=="/"){result=Number(result)/Number(para)}
        symbol=sym;
    }else if((String(subscreen.innerHTML)
    .substring(subscreen.innerHTML.length-1,subscreen.innerHTML.length)==")")){
        subscreen.innerHTML=subscreen.innerHTML+String(sym);
        symbol=sym;
    }
    check_subcreen_num();
    clean_after_equal();
}
function check(){
    if (String(screen.innerHTML).length>10){
        alert("10 bits restrictions.")
        screen.innerHTML=String(screen.innerHTML).substring(0,9);
    }
}
function check_subcreen_num(){
    if (subscreen.innerHTML.length>35){
        subscreen.innerHTML="Ans"+symbol;
    }
}

function press_equalTo(){
    para=screen.innerHTML;
    if (screen.innerHTML==""){alert("Pls give any number")}
    else if (show_result==0) {
        if (String(symbol)=="+"){result=Number(result)+Number(para);subscreen.innerHTML="("+subscreen.innerHTML+screen.innerHTML+")";}
        else if (String(symbol)=="-"){result=Number(result)-Number(para);subscreen.innerHTML="("+subscreen.innerHTML+screen.innerHTML+")";}
        else if (String(symbol)=="*"){result=Number(result)*Number(para);subscreen.innerHTML="("+subscreen.innerHTML+screen.innerHTML+")";}
        else if (String(symbol)=="/"){result=Number(result)/Number(para);subscreen.innerHTML="("+subscreen.innerHTML+screen.innerHTML+")";}
        //btn_equalTo.addEventListener("disabled",false);
        show_result=1;
    }else if (show_result==1){}
    screen.innerHTML=result;
    check_subcreen_num();
    
    whether_euqal=1;
}

function getLastChar(str){

}

function clean_after_equal(){
    if (whether_euqal=1){
        screen.innerHTML="";
    }
}