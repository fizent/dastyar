////////////////////////////////////////////////////////////////// all const
const btn_change_hide = document.querySelector(".btn-hide")
const input_to_do = document.querySelector(".input-new-task")
const icon_to_do = document.querySelector(".icon-input")
const height_box = document.querySelector(".height")
const span_to_do_html = document.querySelector(".span_to_do")
const box_input = document.querySelector(".box-add-newtask")
const box_input_orginall = document.querySelector(".input_orginall")
const btn_search = document.querySelector(".btn-search")
const search_input = document.querySelector(".search-in-google-input")
const btn_icon_login = document.querySelector(".btn_login")
const box_servise = document.querySelector(".box-servise")
const div_context = document.querySelector("#contextMenu")
const video_Advertising_div = document.querySelector(".video_Advertising")
const btn_timer = document.querySelector(".btn-time-temp")
const container_input_timer = document.querySelector(".container_input_timer")
const hour = document.querySelector("#input3")
const min = document.querySelector("#input2")
const sec = document.querySelector("#input1")
const start_btn_timer = document.querySelector(".start_time")




/////////////////////////////////////////////////////////////// for chang btn hide
function Change_btn_hide_over() {
    btn_change_hide.innerHTML = 'مخفی کردن'
    btn_change_hide.style.color = 'var(--color-h-gray)'
    btn_change_hide.style.fontWeight = 'var(--font-weight)'
    const image = document.createElement("img")
    image.src = './image/icons8-hide-30.png'
    image.className = 'icon-img-hide'
    btn_change_hide.append(image)
    height_box.style.filter = 'blur(5px)'
}

function Change_btn_hide_out() {
    btn_change_hide.innerHTML = ''
    const imageout = document.createElement("img")
    imageout.className = 'icon-img-hide'
    imageout.src = './image/icons8-hide-30.png'
    btn_change_hide.append(imageout)
    height_box.style.filter = "";
}

btn_change_hide.addEventListener("mouseover", Change_btn_hide_over)
btn_change_hide.addEventListener("mouseout", Change_btn_hide_out)



///////////////////////////////////////////////////////////////// for add to do

function Add_to_do() {
    const box_to_do = document.createElement("div")
    const image_icon_trash = document.createElement("img")
    let span_to_do = document.createElement("span")
    const input_value = input_to_do.value
    box_to_do.className = 'box-add-newtask'
    span_to_do.className = 'span_to_do'
    image_icon_trash.src = './image/icons8-trash-22.png'
    
    span_to_do.innerHTML = input_value

    image_icon_trash.addEventListener("click", function() {
        box_to_do.remove()
    })
    height_box.append(box_to_do)
    box_to_do.append(span_to_do)
    box_to_do.append(image_icon_trash)

    if(span_to_do.innerHTML == '') {
        input_to_do.placeholder = 'شما باید چیزی بنویسید'
        box_to_do.className = ''
        image_icon_trash.src = './image/icons8-error-22.png'


    }
}

//////////////////////////////////// way 2

function Keypress_input(event) {
    if(event.keyCode === 13) {
        
        const box_to_do = document.createElement("div")
        const image_icon_trash = document.createElement("img")
        let span_to_do = document.createElement("span")
        const input_value = input_to_do.value
        input_to_do.value = ''
        input_to_do.placeholder = 'نوشتن تسک جدید'
        box_to_do.className = 'box-add-newtask'
        span_to_do.className = 'span_to_do'  //// با classlist هم میشه 
        image_icon_trash.src = './image/icons8-trash-22.png'
        span_to_do.innerHTML = input_value

        image_icon_trash.addEventListener("click", function() {
            box_to_do.remove()  
        })
        
        height_box.append(box_to_do)
        box_to_do.append(span_to_do)
        box_to_do.append(image_icon_trash)

    if(span_to_do.innerHTML == '') {
        input_to_do.placeholder = 'شما باید چیزی بنویسید'
        box_to_do.className = ''
        image_icon_trash.src = './image/icons8-error-22.png'

    }
    
}



}



function Focuses_input() {
    icon_to_do.style.backgroundColor = 'rgb(39, 110, 247)';
    icon_to_do.style.borderRadius = '8px';
    icon_to_do.style.padding = '10px'
    Keypress_input()
    
}

function Blurs_input() {
    icon_to_do.style.backgroundColor = '';
    icon_to_do.style.borderRadius = '';
    icon_to_do.style.padding = ''

}

icon_to_do.addEventListener("click", Add_to_do)

input_to_do.addEventListener("keypress", Keypress_input)

input_to_do.addEventListener("focus", Focuses_input)

input_to_do.addEventListener("blur", Blurs_input)


//////////////////////////////////////////////////////////////// for search

function SearchEnter() {
    btn_search.innerHTML = 'جستجو کنید'
    btn_search.style.color = 'var(--color-h-gray)'
    btn_search.style.paddingTop  = 'var(--font-size-element-padding-small)'
    btn_search.style.paddingBottom = '5px'
    btn_search.style.fontWeight = 'var(--font-weight)'
}

function SearchOut() {
    btn_search.innerHTML = ''
    btn_search.style.padding = '3px 10px 0px 10px';
    const icon_search = document.createElement("img")
    icon_search.style.alignSelf = 'center'
    icon_search.src = './image/icons8-search.svg'
    btn_search.append(icon_search)
    
}
///////// way 1
function SearchUrl(event) {
    if(event.keyCode === 13) {
        event.preventDefault()
        const resultSearch = search_input.value
        const move_page_url = `https://www.google.com/search?q=${encodeURIComponent(resultSearch)}`
        window.location.href = move_page_url ////// انتقال
    }
}

search_input.addEventListener("focus", SearchEnter);
search_input.addEventListener("blur", SearchOut);
search_input.addEventListener("keypress", SearchUrl);


////////////////////////////////////////////////////// menu js


/////////////////////////////////// مشکل دار هست چون کپی انجام نمیده اعمال روی چیزی 
/////////// نیاز به setTimeout()

// let copy = document.querySelector(".copy")
// let paste = document.querySelector(".paste")
// let cut = document.querySelector(".cut")

// function CopyElement(event) {
//     div_yes_do_it = document.createElement("div")
//     p_yes_do_it = document.createElement("p")
//     div_yes_do_it.style.backgroundColor = 'green'
//      div_yes_do_it.style.zIndex = '11'
//     p_yes_do_it.innerText = 'انجام شد'
//     div_yes_do_it.append(p_yes_do_it)
//     body_task.append(div_yes_do_it)
//     event.preventDefault()
//     console.log("copy");

// }

// function PasteElement(event) {
//     div_yes_do_it = document.createElement("div")
//     p_yes_do_it = document.createElement("p")
//     div_yes_do_it.style.backgroundColor = 'green'
//      div_yes_do_it.style.zIndex = '11'
//     p_yes_do_it.innerText = 'انجام شد'
//     div_yes_do_it.append(p_yes_do_it)
//     body_task.append(div_yes_do_it)
//     event.preventDefault()
//     console.log("copy");


// }
// function CutElement(event) {
//     div_yes_do_it = document.createElement("div")
//     p_yes_do_it = document.createElement("p")
//     div_yes_do_it.style.backgroundColor = 'green'
//      div_yes_do_it.style.zIndex = '11'
//     p_yes_do_it.innerText = 'انجام شد'
//     div_yes_do_it.append(p_yes_do_it)
//     body_task.append(div_yes_do_it)
//     event.preventDefault()
//     console.log("copy");


// }



function Context_my(event) {
    event.preventDefault();
    div_context.style.display = 'flex'
    div_context.style.left = event.pageX + 'px'
    div_context.style.top = event.pageY + 'px'
    div_context.style.zIndex = '9'


}

function clickNone() {
    div_context.style.display = 'none'
}

function keydowns(event) {
    if(event.keyCode === 27) {
        event.preventDefault()
        div_context.style.display = 'none'
    }
}

document.body.addEventListener("contextmenu", Context_my)
document.body.addEventListener("click", clickNone)
document.body.addEventListener("keydown", keydowns)
// input_to_do.addEventListener("copy", CopyElement)
// input_to_do.addEventListener("cut", CutElement)
// input_to_do.addEventListener("paste", PasteElement)


///////////////////////////////////////////////////////////////// for digital oclock


function Update_time() {
    let date = new Date()
    const hour_clock = document.getElementById("hour_o'oclock")
    const minute_clock = document.getElementById("minute_o'oclock")
    
    hour_clock.innerHTML = date.getHours()
    minute_clock.innerHTML = date.getMinutes()
    
}

setInterval(Update_time, 1000)

///////////////////////////////////////////////////////////////// week


///////////////////////////////////// روش بهینه و عالی و دقیق
// ابتدا کتابخانه moment-jalaali را نصب کنید
// npm install moment-jalaali

// const moment = require('moment-jalaali');
// moment.loadPersian({usePersianDigits: true});

// // نمایش تاریخ فعلی به صورت شمسی
// console.log(moment().format('YYYY/MM/DD')); // مثلاً 1403/03/25



const weekday = ["جمعه", "پنجشنبه", "چهارشنبه", "سه شنبه", "دوشنبه", "یکشنبه", "شنبه"];
const d = new Date()
const day = document.getElementById("day")
const day_week = weekday[d.getDay()]
const months = [
    "دی", "بهمن", "اسفند",
    "فروردین", "اردیبهشت", "خرداد",
    "تیر", "مرداد", "شهریور",
    "مهر", "آبان", "آذر"
  ];
  
  let month = months[d.getMonth()];  
  day.innerHTML = day_week + " " + month + " " + "ماه ";
////////////////////////////////////////////////////////////////  for timer 




function Timer_display_container() {
    const Advertising = document.querySelector(".Advertising")
    const div_videe = document.querySelector(".div_video")
    Advertising.classList.add("display_hidden")
    div_videe.classList.add("display_hidden")
    container_input_timer.classList.remove("display_hidden")


}


////////////////////// درست با هوش مصنوعی

function Start_time() {
        let hourValue = +hour.value;
        let minValue = +min.value;
        let secValue = +sec.value;
        start_btn_timer.innerText = 'شروع  شده'

        let timer = setInterval(function() {
            if(secValue > 0) {
                secValue --
            }else if(minValue > 0) {
                secValue = 59
                minValue -- 
            } else if(hourValue > 0) {
                secValue = 59
                minValue = 59
                hourValue --
            } else {
                clearInterval(timer)
            }

            ///////////// به روز رسانی نمایش زمان در صفه
            ///// with ai 
            hour.value = hourValue.toString().padStart(2, '0') ///////// تبدیل اعداد به دو رقم 
            min.value = minValue.toString().padStart(2, '0') ///// اعداد مثل 11 که 11 اما اعداد 5 میشه 05
            sec.value = secValue.toString().padStart(2, '0')

        }, 1000)


}


btn_timer.addEventListener("click", Timer_display_container)
start_btn_timer.addEventListener("click", Start_time)


////////////////////////////////////////////////////////////