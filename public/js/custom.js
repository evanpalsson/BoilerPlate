function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

jQuery(function($) {
    function copy_to_print_helper_1() {
        $('#print_helper_1').text($('#the_textarea_1').val());
    }
    $('#the_textarea_1').bind('keydown keyup keypress cut copy past blur change', function() {
        copy_to_print_helper_1(); // consider debouncing this to avoid slowdowns!
    });
    copy_to_print_helper_1(); // on initial page load
});
jQuery(function($) {
    function copy_to_print_helper_2() {
        $('#print_helper_2').text($('#the_textarea_2').val());
    }
    $('#the_textarea_2').bind('keydown keyup keypress cut copy past blur change', function() {
        copy_to_print_helper_2(); // consider debouncing this to avoid slowdowns!
    });
    copy_to_print_helper_2(); // on initial page load
});
jQuery(function($) {
    function copy_to_print_helper_3() {
        $('#print_helper_3').text($('#the_textarea_3').val());
    }
    $('#the_textarea_3').bind('keydown keyup keypress cut copy past blur change', function() {
        copy_to_print_helper_3(); // consider debouncing this to avoid slowdowns!
    });
    copy_to_print_helper_3(); // on initial page load
});
jQuery(function($) {
    function copy_to_print_helper_4() {
        $('#print_helper_4').text($('#the_textarea_4').val());
    }
    $('#the_textarea_4').bind('keydown keyup keypress cut copy past blur change', function() {
        copy_to_print_helper_4(); // consider debouncing this to avoid slowdowns!
    });
    copy_to_print_helper_4(); // on initial page load
});
jQuery(function($) {
    function copy_to_print_helper_5() {
        $('#print_helper_5').text($('#the_textarea_5').val());
    }
    $('#the_textarea_5').bind('keydown keyup keypress cut copy past blur change', function() {
        copy_to_print_helper_5(); // consider debouncing this to avoid slowdowns!
    });
    copy_to_print_helper_5(); // on initial page load
});