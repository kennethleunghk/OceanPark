jQuery(document).ready(function(){
    $(document).foundation();
    
    // Move date picker up for mobile screen
    if (Foundation.utils.is_small_only()) {
        if ( $('.section_ticketing.page01').length ) { // if this exists
            // alert('small la');
            if ( $('div.section.tickettype').length ) { // if this exists
                // for buy ticket page
                $("div.section.airdatepicker").insertAfter($("div.section.tickettype"));
            }else{
                // for parking only page
                $("div.section.airdatepicker").insertBefore($("div#day-drypark"));
            };
        }; 
    };
    
    // Prevent page scrolling when scrolling in the Detial's DIV dropdown.
    $('.f-dropdown.content, #shoppingcart.sticky tbody').on('wheel', function(e) {
        var d = e.originalEvent.deltaY,
            dir = d < 0 ? 'up' : 'down',
            stop = (dir == 'up' && this.scrollTop == 0) || 
                   (dir == 'down' && this.scrollTop == this.scrollHeight-this.offsetHeight);
        stop && e.preventDefault();
    });
    
    
    // $('.OpenImgUpload').click(function(){ $('.imgupload').trigger('click'); });
    $('.holderphoto .OpenImgUpload').click(
        function(){             
            // $('.imgupload.'+$(this).attr('field')).trigger('click'); 
            $(this).parents('.userInfo-form').find('.imgupload.'+$(this).attr('field')).trigger('click'); 
    });
    
    
    
    // --- For Plus & Minus input field set --- //
    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        var maxVal = parseInt($('input[name='+fieldName+']').attr('max'));
        var triggerPt = parseInt($('input[name='+fieldName+']').attr('triggerPt'));
        var triggerfn = $('input[name='+fieldName+']').attr('triggerfn');
        
        // If is not undefined
        if (!isNaN(currentVal)) {
            if (currentVal < maxVal) {
                // Increment
                $('input[name='+fieldName+']').val(currentVal + 1);
                if ( (currentVal + 1) == triggerPt ) { window[triggerfn](); }
            };
            
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        var triggerPt = parseInt($('input[name='+fieldName+']').attr('triggerPt'));
        var triggerfn = $('input[name='+fieldName+']').attr('triggerfn');
        
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
            if ( (currentVal) == triggerPt ) { window[triggerfn](); }
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    
    
    /* Hide Error Message (toggle) */
    document.onkeyup = function(e) {
      if (e.ctrlKey && e.shiftKey && e.altKey && e.which == 69) {
        console.log('Hide Error Message');
          $('.invalid-feedback').fadeToggle().toggleClass('hidden');
      } 
    };
    
    
    // --- Make Radio button uncheckable for contact person @ smartfun page --- //
    /*
    var selectingradio = 0;
    $('input[type="radio"][name="as_contactperson"]').click(function(){
        // console.log("selectingradio= "+selectingradio+" this= "+$(this).val());
        if ( $(this).val() == selectingradio ) {
            // alert('again');
            $('input[name="as_contactperson"]').prop('checked', false); // unselect all radio button in radio group
            selectingradio = 0;
        }else{
            selectingradio = $(this).val();
        };
    });
    */
    
    
    
    
    // Switch Annual Pass type of layout
    $('.switchpass input').click(
        function(){            
            parentdiv = $(this).parents('.userInfo-form')
                .removeClass (function (index, className) {
                    return (className.match (/\w*-pass\b/g) || []).join(' ');
                })
                .addClass( $(this).attr('passclass') );
            
            cardimg = $(parentdiv).find('.cardfront > img');
            cardimg_src = cardimg.attr('src');
            cureentfolder = cardimg_src.substring(0, cardimg_src.lastIndexOf("/")+1 );
            
            $(parentdiv).find('.cardfront > img').attr('src', cureentfolder + $(this).attr('passclass') +'.png');
            $(parentdiv).find('.cardfront > .header').text($(this).attr('passlabel'));
    });
    
    
    // Switch Annual Pass class & user type for price
    $('.switchUsrtype input, .switchpass input').click(
        function(){            
            parentdiv = $(this).parents('.userInfo-form');
            
            tkclass = $(parentdiv).find('.radio-group.switchpass input:checked').val()-1;
            usrtype = $(parentdiv).find('.radio-group.switchUsrtype input:checked').val()-1;
            // console.log( "tkclass="+tkclass+" usrtype="+usrtype);
            
            var ShowPrice = switchprice (tkclass, usrtype) ;
            var ShowDPrice = ShowPrice * 0.65 ;
                ShowPrice = ShowPrice.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                ShowDPrice = ShowDPrice.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            
            // Update html Text
            priceoriginal = $(parentdiv).find('.price-original s');
            priceoriginal.text('$ '+ ShowPrice );
            
            pricediscounted = $(parentdiv).find('.price-discounted');
            pricediscounted.text('$ '+ ShowDPrice );
            
            // Show hide upload student doc field 
            if ( usrtype==2 ) { // 2 = Student 
                $(parentdiv).find('.form-group.up_student_doc').css('opacity', 0).slideDown().animate( { opacity: 1 }, { queue: false, duration: 'slow' } );
            }else{
                $(parentdiv).find('.form-group.up_student_doc').css('opacity', 1).slideUp('slow').animate( { opacity: 0 }, { queue: false } );
            }
            
            // Show hide marital field
            if ( usrtype==1 ) { // 1 = Kids 
                $(parentdiv).find('.form-group.marital').fadeOut('slow');
                
            }else{
                $(parentdiv).find('.form-group.marital').fadeIn('slow');
            }
            
    });
    
    // Switch address field to disable by click same as ref address check box
    $('input.ref_address').click(
        function(){   
            // click radio toggle disable textarea
            // $(this).parents().prev('textarea').val('').prop('disabled', function(i, v) { return !v; });
            $(this).parents('.userInfo-form').find('input[type="address"]').val('').prop('disabled', function(i, v) { return !v; });
    });
    
    
    
    
    // Switch tab-menu - Admission Ticket
    $('.section_ticketing.page01 #tab_menu a.tab').click(
        function(){    
            $('#day-drypark, #day-wetpark, #night-fest, #loading-demo').fadeOut("fast");  
            $('.cart-content.day-drypark, .cart-content.day-wetpark, .cart-content.night-fest, .cart-content.loading-demo').hide();

            
            $('#'+$(this).attr('showtab')).fadeIn("slow");
            $('.cart-content.'+$(this).attr('showtab')).fadeIn("slow");
            
            // click radio toggle disable textarea
            $(this).parents().find('.tab').removeClass('active');            
            $(this).addClass('active');
    });
    
    // Switch tab-menu - Education
    $('.section_education #tab_menu a.tab, .section_specialexp #tab_menu a.tab').click(
        function(){    
            $('#group01, #group02, #group03, #group04, #group05, #group06').fadeOut("fast");
            $('#'+$(this).attr('showtab')).fadeIn("slow");
            
            // click radio toggle disable textarea
            $(this).parents().find('.tab').removeClass('active');            
            $(this).addClass('active');
    });
    
    
    
    // Switch tab-menu Multi-line clamp    
    var module = $("#tab_menu a.tab span.small-txt");    
    for (i = 0; i < module.length; ++i) {        
        $clamp(module[i], { clamp: 2 });
    }
    
    
    
    // Reapply the Smart fun pass flow
    var anchor = window.location.hash.substr(1);
    console.log('anchor='+anchor);
    if (anchor == "reapply"){
        addfrom('silver');
    };
    if (anchor == "expireSF1"){
        // $('a.close-reveal-modal').trigger('click');
        $('div.errormsg').fadeIn('slow');
        $('html, body').animate({
            scrollTop: $('div.errormsg').offset().top-360
        }, 1000);
    };
    if (anchor == "renewSF1"){
        $('#init-zone, div#renewal_form').css('opacity', 0).slideDown(800).animate( { opacity: 1 }, { queue: false, duration: 800 } );
        $('html, body').delay(400).animate( { scrollTop: $('div#renewal_form .user-photo').offset().top-160 }, 1000 )
        $('button.btn.next.right, #addmore_member').delay(500).fadeIn('slow');
    };
    
    // Switch ticket type
    $('.richRadio input[name="tickettype"]').click(
        function(){            
            $('#day-drypark').fadeOut("fast");  $('.cart-content.day-drypark').hide();
            $('#day-wetpark').fadeOut("fast");  $('.cart-content.day-wetpark').hide();
            $('#night-fest').fadeOut("fast");   $('.cart-content.night-fest').hide();
            $('#'+$(this).attr('showtab')).fadeIn("slow");
            $('.cart-content.'+$(this).attr('showtab')).fadeIn("slow");
            
    });
    
    
    
    // Map/Apply Smartfun Pass by dropdown menu
    $('table.eachtickets select.form-control.appendsmartfun').change(
        function(){   
            var SFseven = $('.SFnumber .SFseven');
            var SFall = $('.SFnumber .SFall');
            var lastvalue = $(this).attr( 'lastvalue' );
            
            // console.log( "last val="+ lastvalue );
            switch (lastvalue) {              
              case "1":
                SFseven.html( SFseven.html() - 0 + 1 );                
                break;
              case "2":
                SFall.html( SFall.html() - 0 + 1 );                
                break;
            }
            
            switch ($(this).val()) {              
              case "1":
                SFseven.html( SFseven.html() - 1 );
                $(this).next().hide();
                
                break;
              case "2":
                SFall.html( SFall.html() - 1 );
                $(this).next().show();
                
                break;
              default: 
                $(this).next().hide();                
            }
            $(this).attr( 'lastvalue', $(this).val() );
            // console.log( SFseven.html() + " val=" + $(this).val() );// $('.SFnumber .SFseven')
    });
    
    // Pick activity time
    $('table.eachtickets select.form-control.booktime').click(
        function(){   
            //$(this).find("option").text( $(this).find("option").attr('timetext') );
            
    });
    $('table.eachtickets select.form-control.booktime').change(
        function(){
            //$(this).find("option:selected").text( $(this).attr('name') + $(this).find("option:selected").attr('timetext') );
    });
    
    // Education Add class
    var fieldid = 1; 
    var maxfield = 3; 
    
    $('.btn-addclass').click(
        function(){ 
            //console.log(fieldid);
            if (fieldid < maxfield) {            
                fieldid++;

                parentdiv = $(this).fadeOut('fast').parent().parent().clone(true,true).prop('id', 'field-'+fieldid ).insertAfter($(this).parent().parent()).find('td:first-child').html('報讀 '+fieldid+' 班：');
                // parentdiv = $(this).fadeOut().parent().clone(true,true).prop('id', 'field-'+fieldid ).insertAfter($(this).parent()).find('label').html('報讀 '+fieldid+' 班：');

                $(this).prop('disabled', true);
                event.preventDefault();        
            };
            if (fieldid == maxfield) { 
                parentdiv.parent().find('.btn-addclass').hide();
            }
    });
    
    /// Detect Caplock for password field
    (function() {
        const passwordField = document.getElementById("password-input");
        const errorField = document.getElementById("password-caps-warning");
        if (passwordField){
            passwordField.onkeydown = function(e) {
                console.log("typing....");
                if (e.getModifierState("CapsLock")) {
                    errorField.classList.remove("hide");
                } else {
                    errorField.classList.add("hide");
                }
            };
        };
    }());
    
    /* ScrollBooster : Scroll the product div */
    if(Foundation.utils.is_medium_up()){  // Only use when Tablet & above
    
        let viewport = document.querySelector('.richRadio_wrapper');
        let content = viewport.querySelector('.richRadio');
        var startX = 0;

        let sb = new ScrollBooster({
            viewport, // this parameter is required
            content, // scrollable element
            mode: 'x', // scroll only in horizontal dimension
            onUpdate: (data)=> {
                // your scroll logic goes here
                // $('div.richRadio').addClass('dragging');
                content.style.transform = `translateX(${-data.position.x}px)`
                console.log('startX='+startX+' onUpdate='+ data.position.x);
                if ( Math.abs(data.position.x - startX) > 3 ) {
                    // console.log('Dragging');
                    $('div.richRadio').addClass('dragging');
                }
            },
            shouldScroll: (data, event) => {
                // console.log('shouldScroll');
                // console.log('shouldScroll= Start at '+ data.position.x);
                startX = data.position.x;
                if (event.target.classList.contains('checkmark')) {
                    // console.log('false');
                  return false
                } else {
                    // console.log('true');
                  return true
                }
                // return true
            },
            onClick: (data, event) => {
                // console.log('onClick');
                
                // CHANGE TO Remove class by trigger Screensaver style concept by onUpdate method
                $('div.richRadio').delay(300).removeClass('dragging');
          }
        }); 
    }
    
});


function switchprice (passclass, usertype ){
    // Price Table of the SmartFun Annual Passes
    var pricetable = [ [2480, 1240, 1730],  [1290, 645, 940],  [1050, 525, 0] ];
                                       
    //discountrate = discountrate || 1;
    
    // if(passclass == null) passclass = 0;
    // if(usertype == null) usertype = 0;
    passclass = passclass || 0;
    usertype = usertype || 0;
    
    // console.log( "Price = $" + pricetable[passclass][usertype]  );
    return pricetable[passclass][usertype]  ;
}


function readURL(input, fieldname) {
    
    var fieldname = (fieldname === undefined) ? $(input).attr('id') : fieldname;
    // alert('fieldname='+fieldname);
    
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // alert('id='+$(input).attr('id'));
            // $('.OpenImgUpload.photo.'+fieldname)
            // $('.OpenImgUpload.photo[name="' + fieldname + '"]')
            $(input).next().next()
                .attr('src', e.target.result)
                .zIndex(3);
                //.width(150)
                //.height(200);
            
            var oldphoto = $(input).parents('.userInfo-form').find('.user_old_photo');
            if (oldphoto.length) { // if old photo exit
                oldphoto.attr('src', e.target.result);
            };
            var oldphoto_div = $(input).parents('.userInfo-form').find('.user-photo');
            oldphoto_div.fadeIn(); 
        };

        reader.readAsDataURL(input.files[0]);
    }
}   

// Annual Pass form add / remove by top button
    var fromid = 10; // start form 10 to avoid overlap with testing from id
    var num_of_from = 0; // start form 10 to avoid overlap with testing from id
    function addfrom (passclass){
        // fadein Next button 
        if (num_of_from == 0) {
            $('button.btn.next.right, button#addmore_from').delay(250).css('opacity', 0).show().animate( { opacity: 1 }, { queue: true } ); 
            // $('.btn.newapply.add-form').css('opacity', 1).animate( { opacity: 0 }, { queue: false, duration: 'slow' } );
            $('.btn.newapply.add-form').fadeOut();
        };
        
        fromid++;
        num_of_from++;
        newform = $('#usrform_template').clone(true,true).prop('id', 'usrform'+fromid ).insertBefore("#usrform_template"); // .fadeIn();
        newform.css('opacity', 0).slideDown(800).animate( { opacity: 1 }, { queue: false, duration: 800 } ); // Animation insert and fade in
        // newform.css('top', 0).fadeIn().animate( { top: "100px" }, { queue: false, duration: 'slow' } ); // Animation insert and fade in
        
        if (num_of_from == 1) { // Scroll down animation
            $('html, body').animate({  scrollTop: $('.btnbar').offset().top-120 }, 1200);
        };
        if (num_of_from >= 2) { // Scroll down animation
            $('html, body').animate({  scrollTop: newform.offset().top-160 }, 1200);
        };
            
        newform.find('input[name="card-type"]').prop('name', 'card-type'+fromid );
        newform.find('input[name="title"]').prop('name', 'title'+fromid );
        newform.find('input[name="sex"]').prop('name', 'sex'+fromid );
        newform.find('input[name="marital"]').prop('name', 'marital'+fromid );
        newform.find('input[name="as_contactperson"]').val(fromid);
        
        // Upload personal photo
        newform.find('input.imgupload#ULid').prop('id', 'ULid'+fromid );
        newform.find('a.OpenImgUpload').attr('field', 'ULid'+fromid );
        newform.find('img.OpenImgUpload.photo').attr('field', 'ULid'+fromid );
        
        // Upload Student doc
        newform.find('input#FileUpload').prop('id', 'FileUpload'+fromid ).prev().attr('for', 'FileUpload'+fromid);
        
        // click the pass class by click the button
        newform.find('input[passclass="' + passclass + '-pass"]').click();
        
        
    }
    function removefrom (closebtn){
        num_of_from--;
        $(closebtn).parent().parent().css('opacity', 1).slideUp('slow').animate( { opacity: 0 }, { queue: false }).slideUp('slow' , function(){
            $(closebtn).parent().parent().remove();
        });
        if (num_of_from <= 0) {
            $('button.btn.next.right, button#addmore_from').fadeOut();
            $('html, body').animate({  scrollTop: $('.pass-list').offset().top - 165 }, 1000); /* Scroll back up */
            // $('.btn.newapply.add-form').css('opacity', 0).animate( { opacity: 1 }, { queue: false, duration: 'slow' } );
            $('.btn.newapply.add-form').fadeIn();
        };
    }

// select file then update label show file name 
    function selectfile (fileinput){
        // console.log('fileinput='+ $(fileinput).attr('id') );
        $(fileinput).prev().text( $(fileinput)[0].files[0].name );
    }


//// --- SelectBoxIt Plugin --- ////
$(function(){
    $("select.selectBoxIt").selectBoxIt({
        // defaultText: "Make a selection...",
        theme: "default",        
        autoWidth: false
    });
    $("#testselectset").change(function(){
        // alert("You selected: "+this.value+" from the Selectboxit plugin");
    });

});


//// --- dropdown multiple line --- ////
$(function(){
var mYbrowser = detectBrows();
console.log(mYbrowser[0]);
$('select.multipleline').each(function(index,ele){

    // console.log("ele= " + $(ele).name() );
    //get current style and fixed width:
    var renderWidth = $(ele).outerWidth();
    var renderWidthFixed = renderWidth;
    var borderstyle = $(ele).css("border-bottom-style");
    var bordercolor = $(ele).css("border-bottom-color");
    var borderwidth = $(ele).css("border-bottom-width");
    var font = $(ele).css("font");
    // var defaultValue = $(ele).val();
    var defaultValue = $(ele).find("option:selected").text();
    if (borderwidth == "0px") { borderwidth = "1px"; /*FF*/ }
    $(ele).css({ cursor:"pointer" });

    // set by browser (different buttons):
    var borderRightParsed = borderwidth +" " + borderstyle + " " + bordercolor;
    var topParsed = Math.round(parseInt(borderwidth.replace(/[^0-9\.]+/g,"")));
    switch(mYbrowser[0]) {
            case "MSIE": renderWidthFixed = renderWidth-28; break;
            case "I": renderWidthFixed = renderWidth-28; break;                 
            case "Chrome": renderWidthFixed = renderWidth-30; break;
            case "Firefox": 
                            renderWidthFixed = renderWidth-27; 
                            borderRightParsed= "0"; 
                            if (index > 0) topParsed++;
                            break; 
    }
    //wrap + add a overlapping layer that will hide content and calculate the correct height:
    $(ele).wrap($('<div />').css({width:renderWidth, margin:0, padding:0, position:"relative"}));
    $(ele).after($("<div>" + defaultValue + "</div>")
                   .css({
                       minHeight:20,
                       padding:"5px 0px 5px 8px",
                       width:renderWidthFixed,
                       backgroundColor:"white",
                       whiteSpace:"pre-wrap",
                       position:"absolute",
                       borderRight:borderRightParsed,
                       top:topParsed,
                       cursor:"default",
                       left:borderwidth,
                       font:font
                   })
                );
    //set select box new height:
    setHeight(ele);

    //append change behavior:
    $(ele).change(function(){
        // $(ele).next('div').text($(ele).val());
        $(ele).next('div').text( $(ele).find("option:selected").text() );
        setHeight(ele);
    });

});


    
function setHeight(ele) {
    var newHeight = $(ele).next('div').outerHeight();
    $(ele).height(newHeight);

}

function detectBrows(){
    var ua= navigator.userAgent, tem, 
        M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(M[1]=== 'Chrome'){
            tem= ua.match(/\bOPR\/(\d+)/)
            if(tem!= null) return 'Opera '+tem[1];
        }
        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        return M;        
}
});

function adultdiscount(){
    /* Buy 3 adult ticket Discount */
    /* $('.cart-content.day-drypark tr.discount').fadeToggle("slow"); */
}

function DeliveryMethod(obj,methodtype){
    if (methodtype >= 1){
        // Mail
        $('.mailaddress').css('opacity', 0).slideDown('slow').animate( { opacity: 1 }, { queue: false } );
        $(obj).parents('.form-group').next().find('label').text('+HK$ 30.00');
    }else{
        $('.mailaddress').css('opacity', 1).slideUp('slow').animate( { opacity: 0 }, { queue: false } );
        $(obj).parents('.form-group').next().find('label').text('+HK$ 0.00');
    }    
}
function switch_contact_Profile (obj){
    // alert( $(obj).attr('mobile') + mobile);
    mobile = $('option:selected', obj).attr('mobile');
    email  = $('option:selected', obj).attr('email');
    name = $('option:selected', obj).attr('name');
    
    $(" input[name='contactperson'] ").val( name );
    $(" input[name='contactnumber1'] ").val( mobile );
    $(" input[name='email'] ").val( email );
    
}
