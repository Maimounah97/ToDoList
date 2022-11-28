$(document).ready(function () {

    $(".add-button").on("click", function () {
        console.log("add clicked")
        $(".add-task").slideDown('3000');

    });

    //add new task

    $(".add-task").on("submit", function (e) {
        e.preventDefault()

        if ($("input").val() != "") {

            // $(".list-group").show()
            $(".list-group").append("<li class='list-group-item d-flex justify-content-between shadow-sm p-3 mb-2 bg-white rounded'><span class='task'>"+$("input").val()+"</span><span class='btn delete m-0 p-0'>X</span></li>")
        }
        $('.alert-success').slideDown()
        $('.alert-success').delay(4000).slideUp()
        $("input").val('')
        $(".add-task").slideUp('5000')

    })

    //task is done
    $("ul").on('click', '.task', function () {
        console.log("task clicked")
        $(this).css("textDecoration", "line-through")
    })

    //show the X button

    $('ul').on("mouseenter mouseleave", 'li', function () {
        $(this).find('.delete').toggle();


    })

    //delete
    $("ul").on('click', '.delete', function () {
        $(this).parent().remove();
        $('.alert-danger').slideDown()
        $('.alert-danger').delay(4000).slideUp()
    })

});


// $(".delete").click( function () {
//     $('.delete').parent().remove();
//     $('.alert-danger').slideDown()
//     $('.alert-danger').delay(4000).slideUp()
// })

