$(function () {

    $(function () {
        $('#bounce-btn').click(function () {
            animate('#head-2', 'bounce');
            // return false;
        });

        $('#jello-btn').click(function () {
            animate('#head-3', 'jello');
            // return false;
        });


        function animate(element, animation) {
            $(element).addClass('animated ' + animation);
            var wait = setTimeout(function () {
                $(element).removeClass('animated ' + animation)
            }, 1000);
        }
    })
})

// $('#jello-btn').on('click', function () {
//     $('#section-3').addClass('animated jello')
//     setTimeout(function (){ 
//         $('#section-3').removeClass('animated jello')
//   }, 3000)
// })

// $('#slide-in-right').on('click', function () {
//     $('#anim-head').addClass('animated slideInRight')
//     setTimeout(function (){ 
//         $('#anim-head').removeClass('animated jello')
//   }, 3000)
// })


