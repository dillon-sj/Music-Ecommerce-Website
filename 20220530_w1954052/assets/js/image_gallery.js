const albumArt1 = document.getElementById("albumArt1")
const albumArt2 = document.getElementById("albumArt2")
const albumArt3 = document.getElementById("albumArt3")
const albumArt4 = document.getElementById("albumArt4")
const albumArt5 = document.getElementById("albumArt5")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


const albumInfoPic =  document.getElementById("albumInfoPic")
const albumDesc =  document.getElementById("albumDesc")

const albums = {
    album1:{
        image: "/assets/img/albumart1.webp",
        desc: "The lead track from Lizzo's fourth studio album Special, About Damn Time, was made available on April 14, 2022, by Nice Life Recordings and Atlantic Records. (2022). The song peaked at number one in the US, where it became her second number-one single."
    },
    album2:{
        image: "assets/img/albumart2.webp",
        desc: "Harry Styles' third studio album, Harry's Home, was released on May 20, 2022, by Columbia Records and Erskine. Harry Styles is an English singer and songwriter. The album, which has been hailed as Styles' most contemplative work, was mostly written and recorded between 2020 and 2021."
    },
    album3:{
        image: "assets/img/albumart3.webp",
        desc: "Beyoncé, an American singer and songwriter, has a single out called Break My Soul. As the first single from Beyoncé's seventh studio album, Renaissance, it was made available on June 20, 2022, through Parkwood Entertainment and Columbia Records (2022). "
    },
    album4:{
        image: "assets/img/albumart4.webp",
        desc: "The second studio album by American musician Steve Lacy is titled Gemini Rights. RCA Records published it on July 15, 2022. It comes after Lacy's 2019 self-titled debut album Apollo XXI, which was preceded by the tracks Mercury, Bad Habit, and Sunshine. "
    },
    album5:{
        image: "assets/img/albumart5.webp",
        desc: "American rapper Kendrick Lamar's Mr. Morale & the Big Steppers, his fifth studio album, was released on May 13, 2022 by PGLang, Top Dawg Entertainment (TDE), Aftermath Entertainment, and Interscope Records."
    },
}

const fontsSizes = {
    small: "45%",
    medium: "60%",
    large: "75%"
}

function changeFont(size){ 
    document.querySelector('*').style.fontSize = fontsSizes[size]
 }

albumArt1.addEventListener("mouseover",function(){
    albumInfoPic.src = albums.album1.image
    albumDesc.innerText = albums.album1.desc
})

albumArt2.addEventListener("mouseover",function(){
    albumInfoPic.src = albums.album2.image
    albumDesc.innerText = albums.album2.desc
})

albumArt3.addEventListener("mouseover",function(){
    albumInfoPic.src = albums.album3.image
    albumDesc.innerText = albums.album3.desc
})

albumArt4.addEventListener("mouseover",function(){
    albumInfoPic.src = albums.album4.image
    albumDesc.innerText = albums.album4.desc
})

albumArt5.addEventListener("mouseover",function(){
    albumInfoPic.src = albums.album5.image
    albumDesc.innerText = albums.album5.desc
})

const themes = ["blue","purple","green"]

function changeTheme(theme){
    document.documentElement.setAttribute("data-theme", theme)
}

function changeThemeRandom(){
    document.documentElement.setAttribute("data-theme", themes[getRandomInt(3)])
}