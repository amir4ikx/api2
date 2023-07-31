let doc = document
let burgermenu = doc.querySelector(".burgermenu")
let pullOut = doc.querySelector(".pull-out")
let pullOutWrap = doc.querySelector(".pull-out-wrap")
let heroBtn = doc.querySelector(".hero__btn")
let heroModalClose = doc.querySelector(".hero__modal-close")
let heroModalWrap = doc.querySelector(".hero__modal-wrap")
let heroModalInput = doc.querySelector(".hero__modal-input")
let heroModalBtn = doc.querySelector(".hero__modal-btn")
let cookie = doc.querySelector(".cookie")
let cookieBtn = doc.querySelector(".cookie-btn")
let contactModal = doc.querySelector(".contacts__pop-up")
let contactClose = doc.querySelector(".contacts__modal-close")
let contactLink = doc.querySelector("#contacts")


contactLink.onclick = (e) => {
    e.preventDefault()
    contactModal.classList.add("contacts-active")
    doc.body.style.overflow = "hidden"
}

contactClose.onclick = () => {
    contactModal.classList.remove("contacts-active")
    doc.body.style.overflow = ""
}

burgermenu.onclick = () => {
    burgermenu.classList.toggle("burgermenu-active")
    pullOutWrap.classList.toggle("pull-out-active")
}

heroBtn.onclick = () => {
    heroModalWrap.classList.add("modal-active")
    doc.body.style.overflow = "hidden"
    window.scrollTo(0, 0)
}
heroModalClose.onclick = () => {
    heroModalWrap.classList.remove("modal-active")
    doc.body.style.overflow = ""
}

function fn(a, b) {
    arr[a].firstElementChild.src = `./img/catalog/${b}.png`
    arr[a].children[2].setAttribute("id", b)
    arr[a].children[3].setAttribute("id", b)
}

let catalogMainCards = doc.querySelectorAll(".catalog__main-card")
let arr = Array.from(catalogMainCards)
fn(0, "pelmeni")
fn(1, "pelmeni")
fn(2, "pelmeni")
fn(3, "pelmeni")

fn(4, "manti")
fn(5, "manti")
fn(6, "manti")
fn(7, "manti")

fn(8, "khinkali")
fn(9, "khinkali")
fn(10, "khinkali")
fn(11, "khinkali")

fn(12, "vareniki")
fn(13, "vareniki")
fn(14, "vareniki")
fn(15, "vareniki")

fn(16, "vareniki")
fn(17, "pelmeni")
fn(18, "manti")
fn(19, "khinkali")

function fn2(a, b) {
    arr[a].children[1].textContent = b
}
fn2(0, "Пельмени глубокой заморозки")
fn2(1, "Пельмени глубокой заморозки")
fn2(2, "Пельмени глубокой заморозки")
fn2(3, "Пельмени глубокой заморозки")

fn2(4, "Изысканные манты")
fn2(5, "Изысканные манты")
fn2(6, "Изысканные манты")
fn2(7, "Изысканные манты")

fn2(8, "Сочные хинкали")
fn2(9, "Сочные хинкали")
fn2(10, "Сочные хинкали")
fn2(11, "Сочные хинкали")

fn2(12, "Отварные варенники")
fn2(13, "Отварные варенники")
fn2(14, "Отварные варенники")
fn2(15, "Отварные варенники")

fn2(16, "Отварные варенники")
fn2(17, "Пельмени глубокой заморозки")
fn2(18, "Изысканные манты")
fn2(19, "Сочные хинкали")

let pelmeni = doc.querySelectorAll("#pelmeni")
let khinkali = doc.querySelectorAll("#khinkali")
let vareniki = doc.querySelectorAll("#vareniki")
let manti = doc.querySelectorAll("#manti")
let catalogPopUp = doc.querySelector(".catalog__pop-up")

function fn3(a, b, c, d, e, f, g, h, j, k) {
    a.forEach(item => {
        item.onclick = () => {
            catalogPopUp.children[1].children[0].textContent = b
            catalogPopUp.children[0].src = `./img/catalog/${c}.png`
            catalogPopUp.children[1].children[3].children[0].textContent = d
            catalogPopUp.children[1].children[4].children[0].textContent = e
            catalogPopUp.children[1].children[5].children[0].textContent = f
            catalogPopUp.children[1].children[6].children[0].textContent = g
            catalogPopUp.children[1].children[7].children[0].textContent = h
            catalogPopUp.children[1].children[8].children[0].textContent = j
            catalogPopUp.children[1].children[9].children[0].textContent = k
            catalogPopUp.children[0].style.alignSelf = "center"
            window.scrollTo(0, 0)
            doc.body.style.overflow = "hidden"
            setTimeout(() => {
                catalogPopUp.classList.add("catalog__pop-up-active")
            }, 300)
        }
    })
}

let catalogPopUpClose = doc.querySelector(".catalog__pop-up-close")
catalogPopUpClose.onclick = () => {
    catalogPopUp.classList.remove("catalog__pop-up-active")
    doc.body.style.overflow = ""
}


fn3(pelmeni, "Пельмени глубокой заморозки", "pelmeni", "мука пшеничные высший сорт, яйца куриные, вода питьевая, пшеничная клетчатка.", "мясо птицы мех. обвалки, белок соевый гидратированный, говядина, лук репчатый свежий, соль поваренная пищевая, чеснок свежий, перец черный молотый.", "белки – не менее 10,0г, жир – не более 20,0г , углеводы – не более 26,0г", "на 100 гр. – не более 319,0 ккал.", "замороженные вареники варят в подсоленной воде (10 гр. соли на 1 литр воды), соотношение на одну часть пельменей четыре части воды. Продукт погружают в кипящую воду, после всплытия варят 6 мин, при варке помешивают.", "90 суток при t не выше -18С", "800 гр., 5кг, 10кг")

fn3(khinkali, "Сочные хинкали", "khinkali", "мука пшеничные высший сорт, яйца куриные, вода питьевая.", "баранина, курдючный жир, репчатый лук, соль, черный молотый перец, молотая зира.", "белки – не менее 9,5г, жир – не более 17,0г , углеводы – не более 33,0г", "на 100 гр. – не более 235,0 ккал.", "Манты сперва обжариваются на растительном масле до достижения золотистой корочки, а затем их помещают в мантоварку до готовности.", "7 дней", "1-100шт")

fn3(vareniki, "Отварные вареники", "vareniki", "мука пшеничные высший сорт, яйца куриные, вода питьевая, пшеничная клетчатка.", "мясо птицы мех. обвалки, белок соевый гидратированный, говядина, лук репчатый свежий, соль поваренная пищевая, чеснок свежий, перец черный молотый.", "белки – не менее 10,0г, жир – не более 20,0г , углеводы – не более 26,0г", "на 100 гр. – не более 319,0 ккал.", "замороженные вареники варят в подсоленной воде (10 гр. соли на 1 литр воды), соотношение на одну часть пельменей четыре части воды. Продукт погружают в кипящую воду, после всплытия варят 6 мин, при варке помешивают.", "90 суток при t не выше -18С", "800 гр., 5кг, 10кг")

fn3(manti, "Изысканные манты", "manti", "мука пшеничные высший сорт, яйца куриные, вода питьевая.", "баранина, курдючный жир, репчатый лук, соль, черный молотый перец, молотая зира.", "белки – не менее 9,5г, жир – не более 17,0г , углеводы – не более 33,0г", "на 100 гр. – не более 235,0 ккал.", "Манты сперва обжариваются на растительном масле до достижения золотистой корочки, а затем их помещают в мантоварку до готовности.", "7 дней", "1-100шт")

cookieBtn.onclick = () => {
    cookie.style.opacity = 0
    setTimeout(() => {
        cookie.style.display = "none"
    }, 300)
}

setTimeout(() => {
    cookie.children[0].children[0].textContent = "Мы используем куни, чтобы пользоваться сайтом было удобно"
    setTimeout(() => {
        cookie.children[0].children[0].textContent = "Мы используем куки, чтобы пользоваться сайтом было удобно"
    }, 2500);
}, 3000);

let loaderWrap = doc.querySelector(".loader-wrap")
window.onload = () => {
    loaderWrap.classList.add("non-active-loader")
    setTimeout(() => {
        loaderWrap.style.display = "none"
    }, 500);
}