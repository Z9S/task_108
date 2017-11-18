window.onload = function() {
    document.getElementById("myBtn").onclick = function() {
        main();
    };
};

function main() {
    var sum = calc1() + calc2() + calc3() + calc4() + calc5();
    var res = document.getElementById("name").value + "本次测验的得分是" + sum.toString() + "分";
    alert(res);
}

function calc1() {
    var sum = 0;
    if (document.getElementById("que1").value === "统一建模语言")
        sum += 5;
    if (document.getElementById("que2").value === "封装性")
        sum += 5;
    if (document.getElementById("que3").value === "继承性")
        sum += 5;
    if (document.getElementById("que4").value === "多态性")
        sum += 5;
    return sum;
}

function calc2() {
    var sum = 0;
    var list = document.getElementsByName("name1");
    if (list[1].checked === true)
        sum += 10;
    var list2 = document.getElementsByName("name2");
    if (list2[0].checked === true)
        sum += 10;
    return sum;
}

function calc3() {
    var sum = 0;
    var list = document.getElementsByName("name3");
    if (list[0].checked === true && list[1].checked === true && list[2].checked === false && list[3].checked === true)
        sum += 10;
    var list2 = document.getElementsByName("name4");
    if (list2[0].checked === true && list2[1].checked === true && list2[2].checked === true && list2[3].checked === false)
        sum += 10;
    return sum;
}

function calc4() {
    var sum = 0;
    if (document.getElementsByName("name5")[1].checked === true)
        sum += 10;
    if (document.getElementsByName("name6")[0].checked === true)
        sum += 10;
    return sum;
}

function calc5() {
    var sum = 0;
    if (document.getElementById("textans").value === "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。")
        sum += 20;
    return sum;
}