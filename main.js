$(function () {

    //     $(function () {
    //         $('#bounce-btn').click(function () {
    //             animate('#head-2', 'bounce');
    //             // return false;
    //         });

    //         $('#jello-btn').click(function () {
    //             animate('#head-3', 'jello');
    //             // return false;
    //         });


    //         function animate(element, animation) {
    //             $(element).addClass('animated ' + animation);
    //             var wait = setTimeout(function () {
    //                 $(element).removeClass('animated ' + animation)
    //             }, 1000);
    //         }
    //     })
    // })

    //Alternate button funcations/
    $('#bounce-btn').on('click', function () {
        $('#head-2').addClass('animated bounce')
        setTimeout(function () {
            $('#head-2').removeClass('animated bounce')
        }, 1000)
    })

    $('#jello-btn').on('click', function () {
        $('#head-3').addClass('animated jello')
        setTimeout(function () {
            $('#head-3').removeClass('animated jello')
        }, 1000)
    })
})

$('#more-btn').on('click', function () {
    window.open('https://daneden.github.io/animate.css/');

})


