var checkbox = document.querySelector("input[name=theme]");
var imgLight = document.getElementById('lightImage');

checkbox.addEventListener("change",function(){
    if (this.checked)
    {
        trans()
        document.documentElement.setAttribute("data-theme","dark");
        imgLight.src = "source/BackgroundImage/darkOne.png"
    }
    else {
        trans()
        document.documentElement.setAttribute("data-theme","light")
        imgLight.src = "source/BackgroundImage/LightOneWeb.png"
    }
} );

let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(()=>{
        document.documentElement.classList.remove("transition");
    },1000);
};