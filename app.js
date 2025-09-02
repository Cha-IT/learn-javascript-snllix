let name = "Sofiia"

document.write("Hello" +  " " + name + "<br>")

let tall = 1

let tall1 = 9

let tall2 = 7

summ = tall1 + tall2
summ1 = tall1 - tall2
summ2 = tall1 / tall2
summ3 = tall1 * tall2

document.write(tall1 + "+" + tall2 + "=" + summ + "<br>")
document.write(tall1 + "-" + tall2 + "=" + summ1 + "<br>")
document.write(tall1 + "/" + tall2 + "=" + summ2 + "<br>")
document.write(tall1 + "*" + tall2 + "=" + summ3 + "<br>")


let alder = prompt()

if(alder < 18){
    document.write("Du får ikke kjøpe øl" + "<br>")
}
else{
    document.write("Du får kjøpe øl")
}

