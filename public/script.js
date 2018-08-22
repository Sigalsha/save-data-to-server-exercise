const fetch = function() {
    $('.under-btn').html('Loading, count to 5...');
    $.ajax({
        method: "GET",
        url: 'file',
        dataType: "json",
        success: function(data){
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
};

const postToServ = function(inputTxt) {
    $('.under-btn').html('Sending your input, count to 5...');
    $.ajax({
        method: "POST", 
        url: 'file',
        data: {input: inputTxt},
        success: function(data) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
};

$('.btn').on('click', function(ev){
    ev.preventDefault();
    console.log('clicked');
    fetch();
});

$('.add-input').on('click', function(ev) {
    let inputTxt = $(this).prev('.input-txt').val();
    ev.preventDefault();
    postToServ(inputTxt);
});
