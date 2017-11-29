$('document').ready(function(){

    $('#signupmodal').on('submit',function(e){
        e.preventDefault();
        $(this).find('[name]').each(function(index,value){
            console.log(value);
        });
        console.log('iam Signup');

    });

});