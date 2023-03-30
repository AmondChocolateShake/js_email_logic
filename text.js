setTimeout(function() {
    console.log("1");
    setTimeout(function() {
        console.log("2");
        setTimeout(function() {
            console.log("3");
            setTimeout(function() {
                console.log("4");
                console.log("4end");
            }, 1000)
            console.log("3end");
        }, 1000)
        console.log("2end");
    }, 1000)
    console.log("1end");
}, 1000)