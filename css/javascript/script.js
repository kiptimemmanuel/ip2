function fn (){
    let d = new Day ()

    let day = parseInt(document.getElementById("day").value);
    let month =parseInt(document.getElementById("month").value);
    let year= parseInt(document.getElementById("year").value)

    if (day < 0 || day > 31){
       document.getElementsByClassName("dayerror").innerHTML="enter correct date.";
       return false;
    }
    else if (day == ""){
        document.getElementsByClassName("dayerror").innerHTML="cannot leave space empty."
        return false
     }
     else{
         d.setday(day)
     }

     if (month <0 || month >12){
         document.getElementsByClassName("montherror").innerHTML="enter correct month"
         return false
     }
     else if (month= ""){
         document.getElementsByClassName("montherror").innerHTML="cannot leave it empty"
     }
     else {
         d.setmonth(month)

     }

     if (month<0){
         document.getElementsByClassName("yearerror").innerHTML= "enter correct year"
     }
     else if (month = ""){
         document.getElementsByClassName("yearerror").innerHTML= "cannot leave it empty"
     }
     else{
         d.setyear(year)
     }
     let day =d.getdate();
     let days =("sunday","monday","tuesday" ,"wednesday", "thursday" ,"friday" ,"saturday")
     let male =("Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame")
     let female= ("Akosua","Adwoa","Abenna","Akua","Yaa","Afua","Ama")

     function getAkanName(){
         let ismale =document.getElementById('male').checked;
         let isfemale =document.getElementById('female').checked;
         if(ismale==true && isfemale ==false){
             if (day==0){
                 console.log ("your akan name is" + male[0])
             }
             else if (day ==1){
                 console.log ("your akan name is " +male[1])
             }
             else if (day ==2){
                 console.log ("your akan name is " +male[2])
                }
             else if (day == 3){
                 console.log ("your akan name is " +male [3])
             }
             else if (day==4)[
                 console.log ("your akan name is " +male [4])
             ]
             else if (day ==5){
                 console.log("your akan name is " +male[5])
             }
             else if (day==6){
                 console.log("your akan name is " +male [6])
             }

         
            }
         else if (ismale==false && isfemale ==true)  {
            if (day==0){
                console.log ("your akan name is" + female[0])
            }
            else if (day ==1){
                console.log ("your akan name is " +female[1])
            }
            else if (day ==2){
                console.log ("your akan name is " +female[2])
               }
            else if (day == 3){
                console.log ("your akan name is " +female [3])
            }
            else if (day==4)[
                console.log ("your akan name is " +female [4])
            ]
            else if (day ==5){
                console.log("your akan name is " +female[5])
            }
            else if (day==6){
                console.log("your akan name is " +female [6])
            }
         } 
     } getAkan 
     


}