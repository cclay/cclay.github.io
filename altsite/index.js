function loadApp () {
new Vue(
    {el: '#app',
    data: {},
    //vue specific function for when it initalizes
    created: function () {
        var images = [
            'deer.gif',
            'wheat.gif',
        ]
        var bgIndex = Math.floor(Math.random()*images.length);
        var path = images[bgIndex];

        document.body.style.backgroundImage = "url("+path+")";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = 'fixed';
        // document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundPosition = "30% 50%";
        document.body.style.opacity = 0.8;
    }

    })
}
