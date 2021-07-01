const boxes = document.querySelectorAll(".box");
const boxes1 = document.querySelectorAll(".box1");
const boxes2 = document.querySelectorAll(".box2");

const checkBoxes = () =>{
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add("show");
        }else{
            box.classList.remove("show");
        }
    })
}

checkBoxes();

window.addEventListener("scroll", checkBoxes)


// animate bottom to top
const checkBoxes1 = () =>{
    const triggerBottom = (window.innerHeight / 4) * 4;

    boxes1.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add("show");
        }else{
            box.classList.remove("show");
        }
    })
}

checkBoxes1();

window.addEventListener("scroll", checkBoxes1)

