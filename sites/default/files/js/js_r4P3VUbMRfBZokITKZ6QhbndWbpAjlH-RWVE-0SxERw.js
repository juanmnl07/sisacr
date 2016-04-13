jQuery(window).load(function(){
	/*Menu perseguidor*/
	var submenu = jQuery( ".bloque-submenu" );
	var position = submenu.offset();
	jQuery( window ).scroll(function(event) {
		//console.log("Submenu: " + position.top + " - Scroll: " + jQuery(window).scrollTop());
		if(jQuery(window).scrollTop() >= position.top){
			submenu.addClass('fixed');
			//console.log("entro a este if");
		}else{
			submenu.removeClass('fixed');
			//console.log(" no entro a este if");
		}
	});


});

jQuery( document ).ready(function() {

        //colorbox gallery barandas
	//obtener la cantidad de elementos en el listado
	var width = '95%';
	if(window.innerWidth > 760){
		var width = '40%';
	}

	var cboxOptions = {
	  width: width,
	  //height: '95%',
	  maxWidth: '960px',
	  //maxHeight: '960px',
	}

	jQuery('a.galeria-colorbox').colorbox(cboxOptions);

	jQuery(window).resize(function(){
	    jQuery.colorbox.resize({
	      width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
	      //height: window.innerHeight > parseInt(cboxOptions.maxHeight) ? cboxOptions.maxHeight : cboxOptions.height
	    });
	});

	jQuery(".youtube-popup").colorbox({iframe:true, innerWidth:640, innerHeight:390});
	jQuery(".tabla-comp-quimica").colorbox({transition:"fade"});
	jQuery(".proyecto-popup").colorbox({transition:"fade"});
	jQuery(".pasamanos-popup").colorbox({transition:"fade"});

	jQuery(".map-popup").colorbox({iframe:true, innerWidth:800, innerHeight:600});


	jQuery(".page-node-9 .submenu ul").append('<li><span><span><a href="#block-views-productos-block-1" class="scroll">Especiales</a></span></span></li>');

	jQuery( ".page-node-34 .block-tab-top" ).each(function( index ) {
		//console.log(jQuery(this).attr('id'));
		//console.log(jQuery(this).find('h2').text());
		jQuery(".page-node-34 .submenu ul").append('<li><span><span><a href="#'+jQuery(this).attr('id')+'" class="scroll">'+jQuery(this).find('h2').text()+'</a></span></span></li>');
	});	
	
	/* TABS */
	jQuery(".block-tab-top .view-content ul li:first-child").addClass('active');
	jQuery('.block-tab-top .view-content ul li a').click(function(e)  {
		e.preventDefault();
        var currentAttrValue = jQuery(this).attr('href');
        // Show/Hide Tabs
		var divtop = jQuery(this).parents('.block-tab-top').next('.block-tab-body');
		divtop.find('.view-productos .views-row').hide();
		if(jQuery(this).hasClass('sistema-spider-tab')){
			jQuery(".logo-pasamano").css({display: 'none'});
			jQuery(".pasamano-spider").css({display: 'block'});
		}else{
			jQuery(".logo-pasamano").css({display: 'block'});
			jQuery(".pasamano-spider").css({display: 'none'});
		}
        divtop.find('.view-productos .views-row'+currentAttrValue).fadeIn(400);
 
        // Change/remove current tab to active
        jQuery(this).parents('li').addClass('active').siblings().removeClass('active'); 
    });	
	/****************************/
	
	


	<!--Scroll-->
	jQuery('a.scroll[href^="#"]').live('click', function(e) {
		e.preventDefault();

		var target = this.hash,
		$target = jQuery(target);

		jQuery('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function() {
			window.location.hash = target;
		});
	});	
	
	
	/* CV */
	jQuery(".mostrar-subir-cv").live('click', function(e) {
		e.preventDefault();
		
		jQuery(".webform-component--columna-dere--agregar-cv").css({display: 'block'});
		jQuery("#webform-ajax-wrapper-43 .form-actions").css({'margin-top': '-204px'});
		
		
	});	



	placeholder_comment();




/*Busca popup en movil y lo quita*/
	  if(jQuery(window).width() < 780){
	  	jQuery('.tabla-comp-quimica').attr('target', '_blank');
	  	jQuery('.tabla-comp-quimica').removeClass('cboxElement');

	  }
	/*Fin Busca popup en movil y lo quita*/
	
	
});




jQuery( document ).ajaxComplete(function() {
  placeholder_comment();
});



function placeholder_comment(){
		jQuery(".comment-form .field-type-text").each(function() {
		var label='';
		var id_campo=jQuery(this).attr('id');

		label=jQuery('#'+id_campo+' label').text();
		

		jQuery('#'+id_campo+' input').attr('placeholder', label);

		jQuery('#'+id_campo+' label').hide();
	});
	
	jQuery(".comment-form .field-type-text-long").each(function() {
		var label='';
		var id_campo=jQuery(this).attr('id');

		label=jQuery('#'+id_campo+' label').text();
		

		jQuery('#'+id_campo+' textarea').attr('placeholder', label);

		jQuery('#'+id_campo+' label').hide();
	});
}

;
