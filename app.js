
let btns  = document.querySelectorAll(".btn")

// console.log(btns)
let inp = document.querySelector(".inp")

let cal = false;

for( btn of btns){
    btn.addEventListener("click", (e)=>{
        // console.log(e.target.innerText)
        if(e.target.innerText != "DEL" && e.target.innerText != "=" && e.target.innerText != "RESET"){

            // console.log(e.target.innerText)
            if(cal == false){

                inp.innerText =  inp.innerText + e.target.innerText
            }
            else{
                inp.innerText = e.target.innerText
                cal = false;
            }
        }

        if(e.target.innerText == "DEL"){
            let val =  inp.innerText.toString()

            let l = val.length - 1
            // console.log(l)
            inp.innerText =  val.slice(0,l)
        }

        if(e.target.innerText == "RESET"){
            inp.innerText = "0"
            cal = true;
        }    

        if(e.target.innerText == "="){
            if(inp.innerText != ""){

                try{
                    let result = eval(inp.innerText);
                    
                    console.log(result);
    
                    inp.innerText = result;
                }
                catch(e){
                    console.log(e)
                }
            }
        }

    })
}           


document.addEventListener("keypress", (e)=>{
    
    let string = e.key
    let asc = string.charCodeAt(0)
    // console.log(asc);
    if(asc > 40 && asc < 62 && asc !=58 && asc !=59 && asc !=44 ){
        if(e.key != "="){
            inp.innerText =  inp.innerText + e.key
        }
        if(e.key == "="){
            if(inp.innerText != ""){
            try{
                let result = eval(inp.innerText);
                
                console.log(result);

                inp.innerText = result;
            }
            catch(e){
                console.log(e)
            }
           
            }
            }

    } 

    

    
})

document.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){

        if(inp.innerText != ""){

            let result = eval(inp.innerText);
            
            console.log(result);
            inp.innerText = result;
        }
    }
})

document.addEventListener("keydown", (e)=>{
    if(e.code == "Backspace"){
        let val =  inp.innerText.toString()

        let l = val.length - 1
        // console.log(l)
        inp.innerText =  val.slice(0,l)
    }
})