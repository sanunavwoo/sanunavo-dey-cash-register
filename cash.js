var billAmmount= document.querySelector("#bill-ammount");

var cashGiven= document.querySelector("#cash-given");
var errorMessage= document.querySelector("#error-para");
var checkbtn= document.getElementById("check-btn");
var nextbtn= document.querySelector("#next");
var noOfNotes= document.querySelectorAll(".noOfNotes");
var remainingDiv= document.querySelector(".remaining-div");
var availableNotes= [2000, 500, 100, 50, 20, 10, 5, 1];

nextbtn.addEventListener("click", function validateBillAmmount(){
    errorMessage.style.display="none";
    
    var billAmmountValue= billAmmount.value;
    if(!(isNaN(billAmmountValue))){
        if(billAmmountValue>0){
            //Unhide the rest of the section
            remainingDiv.style.display="flex";

        }
        else{
            errorMessage.style.display= "block";
            showErrorMessage("Bill should be greater than 0. Everything has a price- John Wick's villain");
        }
    }
    else{
        errorMessage.style.display= "block";
        showErrorMessage("Bill Value should be a number")
    }    
        
});

checkbtn.addEventListener("click", ()=>{
    errorMessage.style.display="none";
    var billAmmountValue= billAmmount.value;
    var cashGivenValue= cashGiven.value;
    if(cashGivenValue<0){
        alert("Cash value can't be negative");
    }
    else if(billAmmountValue=="" || cashGivenValue==""){
        alert("Please fill up all fields");
    }
    else{
        var ammountToBeReturned= cashGivenValue-billAmmountValue;
        console.log(ammountToBeReturned);
        if(ammountToBeReturned>0){
            calculateChange(ammountToBeReturned);
        }
        else{
            //Bill is more than cash value. Invalid
            errorMessage.style.display= "block";
            showErrorMessage("Bill is more than the cash you have given. No Bargaining here!");
        }
    }
    // var ammountToBeReturned= cashGivenValue-billAmmountValue;
    // console.log(ammountToBeReturned);
    // if(ammountToBeReturned>0){
    //     calculateChange(ammountToBeReturned);
    // }
    // else{
    //     //Bill is more than cash value. Invalid
    //     errorMessage.style.display= "block";
    //     showErrorMessage("Bill is more than the cash you have given. No Bargaining here!");
    // }



  /*  if(billAmmountValue>0){
        if(ammountToBeReturned>0){
            calculateChange(ammountToBeReturned);
        }
        else{
            //Bill is more than cash value. Invalid
            errorMessage.style.display= "block";
            showErrorMessage("Bill is more than the cash you have given. No Bargaining here!");
        }
    }
    else{
        //Reject message-bill should be greater than 0
        errorMessage.style.display= "block";
        showErrorMessage("Bill should be greater than 0. Everything has a price- John Wick's villain");
    }
*/
}); 

function calculateChange(ammount){
    //Do Something
    for(let note=0; note<= availableNotes.length; note++){
        var denomination = Math.trunc(ammount/availableNotes[note]);
        //add thatin inner HTML
        noOfNotes[note].innerText= denomination;
        ammount= ammount%availableNotes[note];
    }

}

function showErrorMessage(e){
    errorMessage.innerHTML= e;
}
