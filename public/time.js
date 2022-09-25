let start;
let end;
let results = [];
let text = document.getElementById("btn-test").addEventListener("click", toggle);

function toggle(){
    let text = document.getElementById("btn-test").innerHTML;
    
    if (text === "Start"){
        document.getElementById("btn-test").innerHTML = "Stop";
        document.getElementById("btn-test").style.backgroundColor = "red";
        start = Date.now();
        
    }else{
            end = Date.now();
        document.getElementById("btn-test").innerHTML = "Start";
        document.getElementById("btn-test").style.backgroundColor = "#08f100";
            let finish = (end - start) / 1000;
                if (Math.round(finish) === 60){
                    document.getElementById("fail").innerHTML = "NAILED IT!!!"
                }else{
                    document.getElementById("fail").innerHTML = "Try again!"
                    //alert("Sorry mate: " + finish.toFixed(2) + " seconds, is not a minute");
                }
            console.log(finish.toFixed(2));
            document.getElementById("result").innerHTML = "Your result: " + finish.toFixed(2) + " seconds";
            results.push(finish.toFixed(2));
            document.getElementById("results").innerHTML = results.join(" " + " | ");
            
}

}