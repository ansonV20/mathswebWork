const myInput = document.getElementById("chosenum");
const pass = document.getElementById("pass");
const gradeUnderLine = document.getElementById("userGrade");
let div = document.getElementById("send");
let main = document.getElementById("main");
let data = document.getElementById("data");

// let ansData = document.getElementById("data");
let display = 1;

main.style.display = "none";
div.style.display = "none";
data.style.display = "none";

let ms = 0;
let s = 0;
let m = 0;
let t = 0;
const displayS = document.getElementById("seconds");
const displayM = document.getElementById("minuts");

const userScore = document.getElementById("userScore");
const userQusetion = document.getElementById("userQusetion");
const userCorrect = document.getElementById("userCorrect");
const userTime = document.getElementById("userTime");
const grade = document.getElementById("grade");


function stepper(btn) {
    let id = btn.getAttribute("id")
    let min = myInput.getAttribute("min")
    let step = myInput.getAttribute("step")
    let val = parseInt(document.getElementById('chosenum').value);
    let newValue = 0;
    console.log(parseInt(val));
    if (id == "plus") {
        newValue = parseInt(val) + step * 1;
        console.log("+",newValue);
    } else {
        newValue = parseInt(val) + step * -1;
        console.log("-",newValue);
    }
    // let calcStep = (id == "mins") ? (step*1) :
    // (step * -1);
    // let newValue = parseInt(val) + calcStep;

    if (newValue >= min) {
        myInput.value = newValue;
        // myInput.setAttribute("value", newValue)
    } else if (newValue >= step*-1){
        myInput.value = 0;
    }
}

function myRand() {
    return Math.floor(Math.random() * 10)+ 1;
}

function createQuestion() {
    showData(0, 0)
    let anscheck = []

    //+ or -
    let que = document.getElementsByName('radio');

    // 獲取用戶輸入的數字
    let number = parseInt(document.getElementById('chosenum').value);
    console.log("num",number)

    show(1);

    if (number != 0) {
        if (t == 0){
            timer(1);
            t++;
        } else {
            timer(2);
        }

        // 獲取顯示隨機數字的容器
        let container = document.getElementById("question");
        container.innerHTML = ""; // 清空容器


        // 生成相應數量的題目
        if (que[0].checked == true) {
            // 生成相應數量的隨機數字,+
            for (let i = 1; i <= number; i++) {
                let num1 = myRand()
                let num2 = myRand()
                
                anscheck.push([num1, num2, "+"]);

                // 創建容器，用於包裝隨機數字和輸入框
                let numContainer = document.createElement("div");
                numContainer.className = "numbox";
                numContainer.id = "numbox"+i;
                let num1_1 = num1;
                let num2_1 = num2;
                let i2 = i;
                if (num1 < 10) {
                    num1_1 = "0" + num1;
                }

                if (num2 < 10) {
                    num2_1 = "0" + num2;
                }

                if (i < 10) {
                    i2 = "0" + i;
                }

                // 創建數字元素
                let num = document.createElement("span");
                num.className = "num";
                num.textContent = i2 + ": " + num1_1 + "+" + num2_1;
                num.id = "num"+i;
                numContainer.appendChild(num);
                
                let inside = document.createElement("span");
                inside.className = "inside";
                inside.id = "inside"+i;

                // 文字元素
                let txt = document.createElement("span");
                txt.className = "txt";
                txt.id = "txt"+i;
                txt.textContent = "";
                inside.appendChild(txt);

                // 答案元素
                let realAns = document.createElement("span");
                realAns.className = "realAns";
                realAns.id = "realAns"+i;
                realAns.textContent = "";
                inside.appendChild(realAns);


                numContainer.appendChild(inside);

                // 創建輸入框元素
                let input = document.createElement("input");
                // input.maxLength = "6";
                // input.size = "6";
                input.className = "txtbox";
                input.id = i;
                input.type = "number";
                input.pattern = "[0-9]";
                input.onkeydown = function() {return event.keyCode !== 69 };
                // input.onclick = changecolor();
                // i.addEventListener("mouseup", onMouseUp, false);
                input.placeholder = "=";
                inside.appendChild(input);

                // 將容器添加到輸出容器中
                container.appendChild(numContainer);
            }
        } else {
            // 生成相應數量的隨機數字,-
        for (let i = 1; i <= number; i++) {
            let num1 = myRand()
            let num2 = myRand()

            anscheck.push([num1, num2, "-"]);

            // 創建容器，用於包裝隨機數字和輸入框
            let numContainer = document.createElement("div");
            numContainer.className = "numbox";
            numContainer.id = "numbox"+i;
            let num1_1 = num1;
            let num2_1 = num2;
            let i2 = i;
            if (num1 < 10) {
                num1_1 = "0" + num1;
            }

            if (num2 < 10) {
                num2_1 = "0" + num2;
            }

            if (i < 10) {
                i2 = "0" + i;
            }

            // 創建數字元素
            let num = document.createElement("span");
            num.className = "num";
            num.id = "num"+i;
            num.textContent = i2 + ": " + num1_1 + "-" + num2_1;
            numContainer.appendChild(num);
            
            let inside = document.createElement("span");
            inside.className = "inside";
            inside.id = "inside"+i;

            // 文字元素
            let txt = document.createElement("span");
            txt.className = "txt";
            txt.id = "txt"+i;
            txt.textContent = "";
            inside.appendChild(txt);

            // 答案元素
            let realAns = document.createElement("span");
            realAns.className = "realAns";
            realAns.id = "realAns"+i;
            realAns.textContent = "";
            inside.appendChild(realAns);

            numContainer.appendChild(inside);

            // 創建輸入框元素
            let input = document.createElement("input");
            // input.maxLength = "6";
            // input.size = "6";
            input.className = "txtbox";
            input.id = i;
            input.type = "number";
            input.pattern = "[0-9]";
            input.onkeydown = function() {return event.keyCode !== 69 };
            input.placeholder = "=";
            inside.appendChild(input);

            // 將容器添加到輸出容器中
            container.appendChild(numContainer);
        }
        }

        // for (let i = 1; i <= anscheck.length; i++) {
        //     const i = document.getElementById(i);
        //     i.addEventListener("mouseup", onMouseUp, false);
        // }

        return ans = anscheck;
    } else {
        timer(3);

        // 獲取顯示隨機數字的容器
        let container = document.getElementById("question");
        container.innerHTML = ""; // 清空容器

        return ans = anscheck;
    }
}

// function changecolor() {
//     // let userOnclick = document.getElementById("num"+1);
//     // let c = document.getElementById(1);
//     // let isFocused = (document.activeElement === c);
//     // if (document.hasFocus()) {
//     //     userOnclick.style.color = "var(--blue)"
//     // } else {
//     //     userOnclick.style.color = "var(--black)"
//     // }
//     // // for (let i = 0; i < ans.length; i++) {
//     // //     let ac = document.getElementById("numbox"+(i+1))
//     // //}const activeTextarea = document.activeElement;
//     // const selection = activeTextarea.value.substring(
//     // activeTextarea.selectionStart,
//     // activeTextarea.selectionEnd,
//     // );
//     const activeTextarea = document.activeElement;

//     let outputElement = document.getElementById("num"+1);
//     // const outputElement = document.getElementById("output-element");
//     // const outputText = document.getElementById("output-text");
//     outputElement.style.color = "var(--blue)";
//     // outputText.innerHTML = selection;
// }






function checkAns() {
    let wrong = false;
    let ok = 0;
    console.log(ans);
    if (ans.length == 0){
        wrong = true;
    } else {
        wrong = false;
    }
    for (let i = 0; i < ans.length; i++) {
        let ac = document.getElementById("numbox"+(i+1));
        let userAns = parseInt(document.getElementById(i+1).value);
        if (Number.isInteger(userAns) ==  false) {
            document.getElementById('txt'+(i+1)).innerText = "Wrong Type";
            ac.style.border = "1px solid var(--blue)";
            ac.style.background = "linear-gradient(145deg, var(--greenwhite) 30%, var(--stellblue) 100%)";
            wrong = true;
            console.log("ha")
        } else {
            document.getElementById('txt'+(i+1)).innerText = "";
            ac.style.background = "var(--greenwhite)";
            ac.style.border = "1px solid var(--green)";
            // ac.style.background = "var(--greenwhite)";
            console.log("ok")
                }
    }

    for (let i = 0; i < ans.length && wrong == false; i++) {
        timer(0);
        let ac = document.getElementById("numbox"+(i+1));
        let userAns = parseInt(document.getElementById(i+1).value);
        let rans = document.getElementById("realAns"+(i+1));
        let ram = ans[i];
        console.log(ram)
        if (ram[2] == "+"){
            if(userAns ===  parseInt(ram[0]+ram[1])) {
                document.getElementById('txt'+(i+1)).innerText = "Correct, ans is";
                document.getElementById('realAns'+(i+1)).innerText = "->";
                rans.style.color = "var(--black)"
                ac.style.border = "1px solid var(--green)";
                ac.style.background = "linear-gradient(145deg, var(--greenwhite) 30%, var(--colorgray) 100%)";
                ok++;
                console.log("Correct")
            } else {
                document.getElementById('txt'+(i+1)).innerText = "Incorrect, ans is";
                document.getElementById('realAns'+(i+1)).innerText = ram[0]+ram[1];
                rans.style.color = "var(--green)"
                rans.style.fontWeight = "700";
                ac.style.border = "1px solid var(--salmon)";
                ac.style.background = "linear-gradient(145deg, var(--greenwhite) 30%, var(--red) 100%)";
                console.log("Incorrect")
            }
        } else {
            if(userAns ===  parseInt(ram[0]-ram[1])) {
                document.getElementById('txt'+(i+1)).innerText = "Correct, ans is";
                document.getElementById('realAns'+(i+1)).innerText = "->";
                rans.style.color = "var(--black)"
                ac.style.border = "1px solid var(--green)";
                ac.style.background = "linear-gradient(145deg, var(--greenwhite) 30%, var(--colorgray) 100%)";
                ok++;
                console.log("Correct")
            } else {
                document.getElementById('txt'+(i+1)).innerText = "Incorrect, ans is";
                document.getElementById('realAns'+(i+1)).innerText = ram[0]-ram[1];
                rans.style.color = "var(--green)"
                rans.style.fontWeight = "700";
                ac.style.border = "1px solid var(--salmon)";
                ac.style.background = "linear-gradient(145deg, var(--greenwhite) 30%, var(--red) 100%)";
                console.log("Incorrect")
            }
        }
        document.getElementById(i+1).disabled = true;
        show(0);
        
    }
    if (wrong == false) {
        showData(1, ok);
    } else {
        showData(0, 0)
    }
    
}

function show(num) {
    if (num == 1) {
        main.style.display = "";
        div.style.display = "";
    } else {
        div.style.display = "none";
    }
}

function showData(num, ok) {
    if (num == 1) {
        data.style.display = "";

        let SS = 0;
        let MM = 0;

        if (m < 10){
            MM = "0"+ m;
        } else {
            MM = m;
        }

        if (s < 10){
            SS = "0"+ s;
        } else {
            SS = s;
        }

        let scorenum = Math.floor(ok/ans.length*100);

        userScore.innerHTML = scorenum;
        userQusetion.innerHTML = ans.length;
        userCorrect.innerHTML = ok;
        userTime.innerHTML = MM + ":" + SS;

        let gradetime = MM*60 + SS;
        let userGrade = scorenum - gradetime/ans.length;

        if (scorenum >= 50) {
            userScore.style.color = "var(--green)";
        } else {
            userScore.style.color = "var(--red)";
        }


        if (userGrade <= 0) {
            grade.innerHTML = "U";
            gradeUnderLine.style.textDecoration = "underline var(--red) 5px";
        } else if (userGrade < 20) {
            grade.innerHTML = "F";
            gradeUnderLine.style.textDecoration = "underline var(--red) 5px";
        } else if (userGrade < 40) {
            grade.innerHTML = "E";
            gradeUnderLine.style.textDecoration = "underline var(--red) 5px";
        } else if (userGrade < 60) {
            grade.innerHTML = "D";
            gradeUnderLine.style.textDecoration = "underline var(--salmon) 5px";
        } else if (userGrade < 80) {
            grade.innerHTML = "C";
            gradeUnderLine.style.textDecoration = "underline var(--darkblue) 5px";
        } else if (userGrade < 90) {
            grade.innerHTML = "B";
            gradeUnderLine.style.textDecoration = "underline var(--green) 5px";
        } else if (userGrade < 95) {
            grade.innerHTML = "A";
            gradeUnderLine.style.textDecoration = "underline var(--green) 5px";
        } else {
            grade.innerHTML = "A+";
            gradeUnderLine.style.textDecoration = "underline var(--green) 5px";
        }

    } else {
        data.style.display = "none";
    }
}

// function change(num) {
//     if (num == 0) {

//     }
// }

function timer(num) {
    if (num == 1) {
        interval = setInterval(stopwatch,10);
    } else if (num == 2) {
        clearInterval(interval);
        ms = 0;
        s = 0;
        m = 0;
        displayS.innerHTML = "00";
        timer(1)
    } else if (num == 3) {
        interval = setInterval(stopwatch,10);
        clearInterval(interval);
        ms = 0;
        s = 0;
        m = 0;
        displayS.innerHTML = "00";
    } else {
        clearInterval(interval);
    }
    

}

const stopwatch = () => {
    ms++;
    if (ms > 99){
        s++;
        ms = 0;
    }

    if (s < 10){
        displayS.innerHTML = "0"+`${s}`;
    } else {
        displayS.innerHTML = `${s}`;
    }

    if (s >= 60) {
        m++;
        s = 0;
    }
    
    if (m < 10){
        displayM.innerHTML = "0"+`${m}`;
    } else {
        displayM.innerHTML = `${m}`;
    }

}

// setInterval(changecolor, 300)