// d开服倒计时特效
window.addEventListener('load', function () {
    let hours = this.document.querySelector('.hours')
    let minute = this.document.querySelector('.minute')
    let second = this.document.querySelector('.second')
    var inputDate = +new Date('2023-11-12 23:00:00')
    countDown()
    setInterval(countDown, 1000)
    function countDown() {
        var nowDate = new Date()
        var timer = (inputDate - nowDate) / 1000
        var h = parseInt(timer / 60 / 60 % 24)
        h = h < 10 ? '0' + h : h
        hours.innerHTML = h
        var m = parseInt(timer / 60 % 60)
        m = m < 10 ? '0' + m : m
        minute.innerHTML = m
        var s = parseInt(timer % 60)
        s = s < 10 ? '0' + s : s
        second.innerHTML = s

    }
    // 隐藏倒计时
    let tc = this.document.querySelector('.tc')
    tc.onclick = function () {
        this.parentElement.remove()
    }
    // 5秒后自动关闭开服倒计时
    var count = this.document.querySelector('.count')
    console.log(count)
    let num = 15;
    cod()
    setInterval(cod, 1000)
    function cod() {
        if (num == 0) {
            count.parentElement.remove()
        } else {
            count.innerHTML = `${num}s`
            num--
        }
    }
})




// tab栏1开始
window.addEventListener('load', () => {
    class Tabs {
        constructor(header_top, type) {
            var header_top = document.querySelector(header_top)
            this.list1 = header_top.querySelectorAll('.header_list>li')
            this.list2 = header_top.querySelectorAll('.tab_list>li')
            this.type = type
            this.chang()
        }

        chang() {
            for (let i = 0; i < this.list1.length; i++) {
                this.list1[i].addEventListener(this.type, () => {
                    var index = i
                    for (var m = 0; m < this.list1.length; m++) {
                        this.list1[m].classList.remove("active")
                        this.list2[m].classList.remove("active")

                    }
                    this.list1[index].classList.add("active")
                    this.list2[index].classList.add("active")
                })
            }
        }
    }
    new Tabs(".header_top", "click")
})

// tab栏1结束
// tab2开始
window.addEventListener('load', () => {
    class Tab {
        constructor(header_top, type) {
            var header_top = document.querySelector(header_top)
            this.list1 = header_top.querySelectorAll('.top_list>li')
            this.list2 = header_top.querySelectorAll('.img_list>li')
            this.type = type
            this.chang()
        }

        chang() {
            for (let i = 0; i < this.list1.length; i++) {
                this.list1[i].addEventListener(this.type, () => {
                    var index = i
                    for (var m = 0; m < this.list1.length; m++) {
                        this.list1[m].classList.remove("active")
                        this.list2[m].classList.remove("active")
                    }
                    this.list1[index].classList.add("active")
                    this.list2[index].classList.add("active")
                })
            }
        }
    }
    new Tab(".pasj_list", "click")
})

// tab栏2结束
// tab3开始

window.addEventListener('load', function () {
    class Ta {
        constructor(header, type) {
            var header = document.querySelector(header)
            this.list1 = header.querySelectorAll('.tab_top li')
            this.list2 = header.querySelectorAll('.tab_bom div')
            this.type = type
            this.chang()
        }
        chang() {
            for (let i = 0; i < this.list1.length; i++) {
                this.list1[i].addEventListener(this.type, () => {
                    var index = i;
                    for (var m = 0; m < this.list1.length; m++) {
                        this.list1[m].classList.remove("active")
                        this.list2[m].classList.remove("active")
                    }
                    this.list1[index].classList.add("active")
                    this.list2[index].classList.add("active")
                })
            }
        }
    }
    new Ta('.youxi_tab', 'mouseover')
    new Ta('.huodong', 'click')

})
// tab3结束
// 返回顶部
window.addEventListener('load', function () {
    var fh = this.document.querySelector('.fh')
    var yx = this.document.querySelector('.pasj_list')
    var yxTop = yx.offsetTop;
    this.document.addEventListener('scroll', function () {
        if (window.pageYOffset > yxTop) {
            fh.style.position = 'fixed'
            fh.style.display = 'block'

        } else {
            fh.style.display = 'none'
        }
        // 点击返回顶部
        fh.addEventListener('click', function () {
            var timer = setInterval(function () {
                if (document.documentElement.scrollTop <= 0) {
                    clearInterval(timer);
                }
                document.documentElement.scrollTop = document.documentElement.scrollTop - 10
            }, 3)
        })
    })
})

// ES5面向对象写法
/* window.addEventListener('load', () => {
    function Tabs(header_top, type) {

        var header_top = document.querySelector(header_top)
        this.list1 = document.querySelectorAll('.header_list>li')
        this.list2 = document.querySelectorAll('.tab_list>li')
        this.type = type
        this.chang()
    }

    Tabs.prototype.chang = function () {
        for (let i = 0; i < this.list1.length; i++) {
            this.list1[i].addEventListener(this.type, () => {
                var index = i
                for (var m = 0; m < this.list1.length; m++) {
                    this.list1[m].classList.remove("active")
                    this.list2[m].classList.remove("active")
                }
                this.list1[index].classList.add("active")
                this.list2[index].classList.add("active")
            })
        }
    }

    new Tabs(".header_top", "click")
})
 */
// ES6面向对象写法
