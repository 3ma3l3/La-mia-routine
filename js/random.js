function play() {
        var n = Math.ceil(Math.random() * 2);
        $("#audio"+n).trigger('play');
            }