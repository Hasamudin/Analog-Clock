const deg =6;
const hour = document.querySelector(".hour")
const min = document.querySelector(".min")
const sec = document.querySelector(".sec")

const setClock=()=>{
	let day=new Date()
	let hours = day.getHours() * 30;
	let minutes = day.getMinutes() *deg;
	let secunds = day.getSeconds() *deg;
	
	hour.style.transform = `rotateZ(${hours + minutes / 12}deg)`;
	min.style.transform = `rotateZ(${minutes}deg)`;
	sec.style.transform = `rotateZ(${secunds}deg)`;
	
}
setClock()
setInterval(setClock, 1000)

const switchTheme = (event) => {
    const switchBtn = event.target;
    if(switchBtn.textContent.toLowerCase() === "light") {
        switchBtn.textContent = "Dark";
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        switchBtn.textContent = "Light";
        document.documentElement.setAttribute("data-theme", "light");
    }
}
let switchmotBtn = document.querySelector(".switch-btn")
switchmotBtn.addEventListener("click", switchTheme)

let currentthem = "dark"
if(currentthem){
	document.documentElement.setAttribute("data-theme", currentthem)
}