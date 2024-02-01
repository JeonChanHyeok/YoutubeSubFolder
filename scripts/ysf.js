window.onload = function () {
    if(document.querySelector('#guide-section-title')){
        const e = document.querySelectorAll('#guide-section-title')[1];
        e.insertAdjacentHTML("beforebegin", '<div class="container" style="display: flex; justify-content: space-between;"><div class="item">');
        e.insertAdjacentHTML("afterend", '</div><div class="item"><yt-formatted-string link-inherit-color class="style-scope ytd-guide-section-renderer">aa</yt-formatted-string></div></div>');
    }else{
        alert("으아악");
    }
}