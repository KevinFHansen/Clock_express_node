let start;
let end;
let results = [];
let text = document.getElementById("btn-game").addEventListener("click", toggle);

function toggle(){
    let text = document.getElementById("btn-game").innerHTML;
    
    if (text === "Start"){
        document.getElementById("btn-game").innerHTML = "Stop";
        document.getElementById("btn-game").style.backgroundColor = "red";
        start = Date.now();
        
    }else{
        end = Date.now();
        document.getElementById("btn-game").innerHTML = "Start";
        document.getElementById("btn-game").style.backgroundColor = "#08f100";
        let finish = (end - start) / 1000;
            if (Math.round(finish) === 60){
                document.getElementById("status").innerHTML = "NAILED IT!!!"
            }else{
                document.getElementById("status").innerHTML = "Try again!"
            }
        console.log(finish.toFixed(2));
        document.getElementById("result").innerHTML = "Your result: " + finish.toFixed(2) + " seconds";
        results.push(finish.toFixed(2));
        document.getElementById("results").innerHTML = results.join(" " + " | ");
}

}