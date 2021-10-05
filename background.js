function main(){
    try {
        var divs = document.getElementsByTagName("div")
        var shown_number;
        var hidden_number;
        for (const item of divs) {
            if (item.style.color=='rgb(255, 222, 0)'){
                number = parseInt(item.innerText.split('.').join(""));
                if (item.style.display == "none"){
                    hidden_number = number;
                }
                else{
                    shown_number = number;
                }
            }
        }

        if (hidden_number>shown_number){
            //Click mas
            document.getElementById("buttonFaster").click();

        }
        else{
            //Click menos
            document.getElementById("buttonSlower").click();
        }

    }
    catch (error) {
        console.error(error);
    }
}



setInterval(function(){ main(); }, 3000);




