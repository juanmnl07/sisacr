Drupal.locale={"pluralFormula":function($n){return Number($n!=1)},"strings":{"":{"An AJAX HTTP error occurred.":"Hubo un error HTTP AJAX.","HTTP Result Code: !status":"C\u00f3digo de Resultado HTTP: !status","An AJAX HTTP request terminated abnormally.":"Una solicitud HTTP de AJAX termin\u00f3 de manera anormal.","Debugging information follows.":"A continuaci\u00f3n se detalla la informaci\u00f3n de depuraci\u00f3n.","Path: !uri":"Ruta: !uri","StatusText: !statusText":"StatusText: !statusText","ResponseText: !responseText":"ResponseText: !responseText",
"ReadyState: !readyState":"ReadyState: !readyState","All":"Todo(s)","New":"Nuevo","Recent":"Reciente","Select all rows in this table":"Seleccionar todas las filas de esta tabla","Deselect all rows in this table":"Quitar la selecci\u00f3n a todas las filas de esta tabla","Hide":"Ocultar","Show":"Mostrar","Configure":"Configurar","(active tab)":"(solapa activa)","Not restricted":"Sin restricci\u00f3n","All pages with exceptions":"Todas las p\u00e1ginas con excepciones","Restricted to certain pages":"Restringido a algunas p\u00e1ginas",
"Excepted: @roles":"Exceptuando: @roles","Not customizable":"No personalizable","On by default with opt out":"Activado por defecto con opci\u00f3n de desactivar","Off by default with opt in":"Desactivado por defecto con elecci\u00f3n de activar","Mailto links":"Enlaces de Correo electr\u00f3nico","Downloads":"Descargas","Not tracked":"No monitorizado","@items enabled":"@items activado","AdSense ads":"Anuncios de AdSense","Display features":"Caracter\u00edsticas de la presentaci\u00f3n","A single domain":"Un \u00fanico dominio",
"One domain with multiple subdomains":"Un dominio con m\u00faltiples subdominios","Multiple top-level domains":"M\u00faltiples dominios de nivel superior","Anonymize IP":"Anonimizar IP","Universal web tracking opt-out":"Desactivaci\u00f3n universal de monitorizaci\u00f3n web","No privacy":"Sin privacidad","Loading token browser...":"Cargando navegador de comodines...","Available tokens":"Comodines disponibles","Insert this token into your form":"Inserte este comod\u00edn en su formulario","Re-order rows by numerical weight instead of dragging.":"Reordenar las filas por peso num\u00e9rico en lugar de arrastrar.",
"Show row weights":"Mostrar pesos de la fila","Hide row weights":"Ocultar pesos de la fila","Drag to re-order":"Arrastre para reordenar","Changes made in this table will not be saved until the form is submitted.":"Los cambios realizados en esta tabla no se guardar\u00e1n hasta que se env\u00ede el formulario","Please wait...":"Espere, por favor...","Edit":"Editar","Also allow !name role to !permission?":"\u00bfTambi\u00e9n permitir al rol !name el permiso !permission?","Add":"Agregar","Done":"Hecho",
"Now Editing: ":"Ahora edici\u00f3n: ","Desired block weight exceeds available weight options, please check weights for blocks before saving":"Peso del bloque deseado excede opciones de peso disponible, por favor revise pesos para los bloques antes de guardar","Disabled":"Desactivado","Enabled":"Activado","Upload":"Subir al servidor","This field is required.":"Este campo es obligatorio.","Navigation":"Navegaci\u00f3n","Not published":"No publicado","Only files with the following extensions are allowed: %files-allowed.":"S\u00f3lo se permiten archivos con las siguientes extensiones: %files-allowed.",
"By @name on @date":"Por @name en @date","By @name":"Por @name","Not in menu":"No est\u00e1 en un men\u00fa","Alias: @alias":"Alias: @alias","No alias":"Sin alias","New revision":"Nueva revisi\u00f3n","The changes to these blocks will not be saved until the <em>Save blocks</em> button is clicked.":"Los cambios sobre estos bloques no se guardar\u00e1n hasta que no pulse el bot\u00f3n <em>Guardar bloques</em>.","This permission is inherited from the authenticated user role.":"Este permiso se hereda del rol de usuario registrado.",
"No revision":"Sin revisi\u00f3n","@number comments per page":"@number comentarios por p\u00e1gina","Requires a title":"Necesita un t\u00edtulo","The block cannot be placed in this region.":"El bloque no se puede colocar en esta regi\u00f3n.","Customize dashboard":"Personalizar panel de control","Hide summary":"Ocultar resumen","Edit summary":"Editar resumen","Don't display post information":"No mostrar informaci\u00f3n del env\u00edo","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"El archivo seleccionado %filename no puede ser subido. Solo se permiten archivos con las siguientes extensiones: %extensions.",
"Autocomplete popup":"Ventana emergente con autocompletado","Searching for matches...":"Buscando coincidencias","Click update to save the configuration":"Pulse actualizar para guardar la configuraci\u00f3n","Close":"Cerrar","Log messages":"Registrar mensajes","Please select a file.":"Seleccione un documento, por favor.","You are not allowed to operate on more than %num files.":"No tiene permiso para actuar sobre m\u00e1s de %num documentos.","Please specify dimensions within the allowed range that is from 1x1 to @dimensions.":"Especifique unas dimensiones dentro de las permitidas, por favor. Eso va desde 1 \u00d7 1 a @dimensions.",
"%filename is not an image.":"%filename no es una imagen.","Do you want to refresh the current directory?":"\u00bfQuiere actualizar la vista de este directorio?","Delete selected files?":"\u00bfBorrar los documentos seleccionados?","Please select a thumbnail.":"Seleccione una minatura, por favor.","You must select at least %num files.":"Debe seleccionar al menos %num documentos.","You can not perform this operation.":"No puede realizar esta operaci\u00f3n.","Insert file":"Insertar archivo","Change view":"Cambiar vista",
"Show description":"Mostrar descripci\u00f3n","Hide description":"Esconder descripci\u00f3n","Remove this pane?":"\u00bfEliminar este panel?","Automatic alias":"Alias autom\u00e1tico","Remove group":"Eliminar grupo","Apply (all displays)":"Aplicar (todas las presentaciones)","Apply (this display)":"Aplicar (esta presentaci\u00f3n)","Revert to default":"Volver al valor inicial","required":"necesario","Inclusion: @value":"Inclusi\u00f3n: @value","Priority: @value":"Prioridad: @value"}}};;
(function($,window,i){$.fn.tinyNav=function(options){var settings=$.extend({"active":"selected","header":false,"indent":"--","depth_count":3},options);return this.each(function(){i++;var $nav=$(this),namespace="tinynav",namespace_i=namespace+i,l_namespace_i=".l_"+namespace_i,$select=$("<select/>").addClass(namespace+" "+namespace_i);if($nav.is("ul,ol")){if(settings.header)$select.append($('<option value="-null-"/>').text(Drupal.t("Navigation")));var options="";$nav.addClass("l_"+namespace_i).find("a").each(function(){var indent=
"";var parent_count=$(this).parents("ul,ol").length;for(var i=1;i<parent_count;i++)indent+=settings.indent;if(indent!="")indent+=" ";if(parent_count<settings.depth_count)options+='<option value="'+$(this).attr("href")+'">'+indent+$(this).text()+"</option>"});$select.append(options);$select.find(":eq("+(settings.header+$(l_namespace_i+" li").index($(l_namespace_i+" ."+settings.active))+")")).attr("selected",true);$select.change(function(){if($(this).val()!="-null-")window.location.href=$(this).val()});
$(l_namespace_i).after($select)}})}})(jQuery,this,0);;
(function($){Drupal.behaviors.tinynav={attach:function(context,settings){settings.tinynav=settings.tinynav||{selector:"#zone-menu .region-menu ul.menu",media_query:"all and (max-width:780px)",header:false,active:"active-trail"};$(settings.tinynav.selector,context).addClass("tinyjs");var tinyNavSettings={header:settings.tinynav.header};if(settings.tinynav.active)tinyNavSettings.active=settings.tinynav.active;$(".tinyjs",context).tinyNav(tinyNavSettings);$("select.tinynav",context).wrap('<div class="tinynav-wrapper"/>')},
weight:99}})(jQuery);;
(function($){Drupal.behaviors.devel={attach:function(context,settings){$(".krumo-footnote .krumo-call").once().before('<img style="vertical-align: middle;" title="Click to expand. Double-click to show path." src="'+settings.basePath+'misc/help.png"/>');var krumo_name=[];var krumo_type=[];function krumo_traverse(el){krumo_name.push($(el).html());krumo_type.push($(el).siblings("em").html().match(/\w*/)[0]);if($(el).closest(".krumo-nest").length>0)krumo_traverse($(el).closest(".krumo-nest").prev().find(".krumo-name"))}
$(".krumo-child > div:first-child",context).dblclick(function(e){if($(this).find("> .krumo-php-path").length>0)$(this).find("> .krumo-php-path").remove();else{krumo_traverse($(this).find("> a.krumo-name"));var krumo_path_string="";for(var i=krumo_name.length-1;i>=0;--i){if(krumo_name.length-1==i)krumo_path_string+="$"+krumo_name[i];if(typeof krumo_name[i-1]!=="undefined"){if(krumo_type[i]=="Array"){krumo_path_string+="[";if(!/^\d*$/.test(krumo_name[i-1]))krumo_path_string+="'";krumo_path_string+=
krumo_name[i-1];if(!/^\d*$/.test(krumo_name[i-1]))krumo_path_string+="'";krumo_path_string+="]"}if(krumo_type[i]=="Object")krumo_path_string+="->"+krumo_name[i-1]}}$(this).append('<div class="krumo-php-path" style="font-family: Courier, monospace; font-weight: bold;">'+krumo_path_string+"</div>");krumo_name=[];krumo_type=[]}})}}})(jQuery);;
(function($){Drupal.behaviors.custom_search={attach:function(context){if(!Drupal.settings.custom_search.solr)$("form.search-form",context).submit(function(){var $this=$(this);var box=$this.find("input.custom-search-box");if(box.val()!=undefined&&box.val()==""){$this.find("input.custom-search-box").addClass("error");return false}if($this.find("#edit-keys").parents("div.element-invisible").attr("class")=="element-invisible"){$this.find("#edit-keys").val($this.find("#edit-or").val());$this.find("#edit-or").val("")}return true});
$("form.search-form").attr("target",Drupal.settings.custom_search.form_target);$("form.search-form input.custom-search-box",context).bind("click focus",function(e){var $parentForm=$(this).parents("form");var popup=$parentForm.find("fieldset.custom_search-popup");if(popup.find("input,select").length&&!popup.hasClass("opened"))popup.fadeIn().addClass("opened");e.stopPropagation()});$(document).bind("click focus",function(){$("fieldset.custom_search-popup").hide().removeClass("opened")});$(".custom-search-selector input:checkbox",
context).each(function(){var el=$(this);if(el.val()=="c-all")el.change(function(){$(this).parents(".custom-search-selector").find("input:checkbox[value!=c-all]").attr("checked",false)});else if(el.val().substr(0,2)=="c-")el.change(function(){$(".custom-search-selector input:checkbox").each(function(){if($(this).val().substr(0,2)=="o-")$(this).attr("checked",false)});$(this).parents(".custom-search-selector").find("input:checkbox[value=c-all]").attr("checked",false)});else el.change(function(){$(this).parents(".custom-search-selector").find("input:checkbox[value!="+
el.val()+"]").attr("checked",false)})});var popup=$("fieldset.custom_search-popup:not(.custom_search-processed)",context).addClass("custom_search-processed");popup.click(function(e){e.stopPropagation()});popup.append('<a class="custom_search-popup-close" href="#">'+Drupal.t("Close")+"</a>");$("a.custom_search-popup-close").click(function(e){$("fieldset.custom_search-popup.opened").hide().removeClass("opened");e.preventDefault()})}}})(jQuery);;
(function($){Drupal.behaviors.CToolsDropbutton={attach:function(){$(".ctools-button").once("ctools-button").removeClass("ctools-no-js");$(".ctools-dropbutton").once("ctools-dropbutton",function(){var $dropbutton=$(this);var $button=$(".ctools-content",$dropbutton);var $secondaryActions=$("li",$button).not(":first");var $twisty=$(".ctools-link",$dropbutton);var open=false;var hovering=false;var timerID=0;var toggle=function(close){if(open||close)if(!close){open=false;$secondaryActions.slideUp(100);
$dropbutton.removeClass("open")}else{if(timerID)clearTimeout(timerID);timerID=setTimeout(function(){if(!hovering){open=false;$secondaryActions.slideUp(100);$dropbutton.removeClass("open")}},500)}else{open=true;$secondaryActions.animate({height:"show",opacity:"show"},100);$dropbutton.addClass("open")}};$secondaryActions.hide();$twisty.click(function(){toggle();return false});$dropbutton.hover(function(){hovering=true},function(){hovering=false;toggle(true);return false})})}}})(jQuery);;
(function($){Drupal.behaviors.tableHeader={attach:function(context,settings){if(!$.support.positionFixed)return;$("table.sticky-enabled",context).once("tableheader",function(){$(this).data("drupal-tableheader",new Drupal.tableHeader(this))})}};Drupal.tableHeader=function(table){var self=this;this.originalTable=$(table);this.originalHeader=$(table).children("thead");this.originalHeaderCells=this.originalHeader.find("> tr > th");this.displayWeight=null;this.originalTable.bind("columnschange",function(e,
display){self.widthCalculated=self.displayWeight!==null&&self.displayWeight===display;self.displayWeight=display});this.stickyTable=$('<table class="sticky-header"/>').insertBefore(this.originalTable).css({position:"fixed",top:"0px"});this.stickyHeader=this.originalHeader.clone(true).hide().appendTo(this.stickyTable);this.stickyHeaderCells=this.stickyHeader.find("> tr > th");this.originalTable.addClass("sticky-table");$(window).bind("scroll.drupal-tableheader",$.proxy(this,"eventhandlerRecalculateStickyHeader")).bind("resize.drupal-tableheader",
{calculateWidth:true},$.proxy(this,"eventhandlerRecalculateStickyHeader")).bind("drupalDisplaceAnchor.drupal-tableheader",function(){window.scrollBy(0,-self.stickyTable.outerHeight())}).bind("drupalDisplaceFocus.drupal-tableheader",function(event){if(self.stickyVisible&&event.clientY<self.stickyOffsetTop+self.stickyTable.outerHeight()&&event.$target.closest("sticky-header").length===0)window.scrollBy(0,-self.stickyTable.outerHeight())}).triggerHandler("resize.drupal-tableheader");this.stickyHeader.show()};
Drupal.tableHeader.prototype.eventhandlerRecalculateStickyHeader=function(event){var self=this;var calculateWidth=event.data&&event.data.calculateWidth;this.stickyOffsetTop=Drupal.settings.tableHeaderOffset?eval(Drupal.settings.tableHeaderOffset+"()"):0;this.stickyTable.css("top",this.stickyOffsetTop+"px");var viewHeight=document.documentElement.scrollHeight||document.body.scrollHeight;if(calculateWidth||this.viewHeight!==viewHeight){this.viewHeight=viewHeight;this.vPosition=this.originalTable.offset().top-
4-this.stickyOffsetTop;this.hPosition=this.originalTable.offset().left;this.vLength=this.originalTable[0].clientHeight-100;calculateWidth=true}var hScroll=document.documentElement.scrollLeft||document.body.scrollLeft;var vOffset=(document.documentElement.scrollTop||document.body.scrollTop)-this.vPosition;this.stickyVisible=vOffset>0&&vOffset<this.vLength;this.stickyTable.css({left:-hScroll+this.hPosition+"px",visibility:this.stickyVisible?"visible":"hidden"});if(this.stickyVisible&&(calculateWidth||
!this.widthCalculated)){this.widthCalculated=true;var $that=null;var $stickyCell=null;var display=null;var cellWidth=null;for(var i=0,il=this.originalHeaderCells.length;i<il;i+=1){$that=$(this.originalHeaderCells[i]);$stickyCell=this.stickyHeaderCells.eq($that.index());display=$that.css("display");if(display!=="none"){cellWidth=$that.css("width");if(cellWidth==="auto")cellWidth=$that[0].clientWidth+"px";$stickyCell.css({"width":cellWidth,"display":display})}else $stickyCell.css("display","none")}this.stickyTable.css("width",
this.originalTable.outerWidth())}}})(jQuery);;
(function($){Drupal.progressBar=function(id,updateCallback,method,errorCallback){var pb=this;this.id=id;this.method=method||"GET";this.updateCallback=updateCallback;this.errorCallback=errorCallback;this.element=$('<div class="progress" aria-live="polite"></div>').attr("id",id);this.element.html('<div class="bar"><div class="filled"></div></div>'+'<div class="percentage"></div>'+'<div class="message">&nbsp;</div>')};Drupal.progressBar.prototype.setProgress=function(percentage,message){if(percentage>=
0&&percentage<=100){$("div.filled",this.element).css("width",percentage+"%");$("div.percentage",this.element).html(percentage+"%")}$("div.message",this.element).html(message);if(this.updateCallback)this.updateCallback(percentage,message,this)};Drupal.progressBar.prototype.startMonitoring=function(uri,delay){this.delay=delay;this.uri=uri;this.sendPing()};Drupal.progressBar.prototype.stopMonitoring=function(){clearTimeout(this.timer);this.uri=null};Drupal.progressBar.prototype.sendPing=function(){if(this.timer)clearTimeout(this.timer);
if(this.uri){var pb=this;$.ajax({type:this.method,url:this.uri,data:"",dataType:"json",success:function(progress){if(progress.status==0){pb.displayError(progress.data);return}pb.setProgress(progress.percentage,progress.message);pb.timer=setTimeout(function(){pb.sendPing()},pb.delay)},error:function(xmlhttp){pb.displayError(Drupal.ajaxError(xmlhttp,pb.uri))}})}};Drupal.progressBar.prototype.displayError=function(string){var error=$('<div class="messages error"></div>').html(string);$(this.element).before(error).hide();
if(this.errorCallback)this.errorCallback(this)}})(jQuery);;
(function($){
/**
 * To make a form auto submit, all you have to do is 3 things:
 *
 * ctools_add_js('auto-submit');
 *
 * On gadgets you want to auto-submit when changed, add the ctools-auto-submit
 * class. With FAPI, add:
 * @code
 *  '#attributes' => array('class' => array('ctools-auto-submit')),
 * @endcode
 *
 * If you want to have auto-submit for every form element,
 * add the ctools-auto-submit-full-form to the form. With FAPI, add:
 * @code
 *   '#attributes' => array('class' => array('ctools-auto-submit-full-form')),
 * @endcode
 *
 * If you want to exclude a field from the ctool-auto-submit-full-form auto submission,
 * add the class ctools-auto-submit-exclude to the form element. With FAPI, add:
 * @code
 *   '#attributes' => array('class' => array('ctools-auto-submit-exclude')),
 * @endcode
 *
 * Finally, you have to identify which button you want clicked for autosubmit.
 * The behavior of this button will be honored if it's ajaxy or not:
 * @code
 *  '#attributes' => array('class' => array('ctools-use-ajax', 'ctools-auto-submit-click')),
 * @endcode
 *
 * Currently only 'select', 'radio', 'checkbox' and 'textfield' types are supported. We probably
 * could use additional support for HTML5 input types.
 */

Drupal.behaviors.CToolsAutoSubmit = {
  attach: function(context) {
    // 'this' references the form element
    function triggerSubmit (e) {
      var $this = $(this);
      if (!$this.hasClass('ctools-ajaxing')) {
        $this.find('.ctools-auto-submit-click').click();
      }
    }

    // the change event bubbles so we only need to bind it to the outer form
    $('form.ctools-auto-submit-full-form', context)
      .add('.ctools-auto-submit', context)
      .filter('form, select, input:not(:text, :submit)')
      .once('ctools-auto-submit')
      .change(function (e) {
        // don't trigger on text change for full-form
        if ($(e.target).is(':not(:text, :submit, .ctools-auto-submit-exclude)')) {
          triggerSubmit.call(e.target.form);
        }
      });

    // e.keyCode: key
    var discardKeyCode = [
      16, // shift
      17, // ctrl
      18, // alt
      20, // caps lock
      33, // page up
      34, // page down
      35, // end
      36, // home
      37, // left arrow
      38, // up arrow
      39, // right arrow
      40, // down arrow
       9, // tab
      13, // enter
      27  // esc
    ];
    // Don't wait for change event on textfields
    $('.ctools-auto-submit-full-form input:text, input:text.ctools-auto-submit', context)
      .filter(':not(.ctools-auto-submit-exclude)')
      .once('ctools-auto-submit', function () {
        // each textinput element has his own timeout
        var timeoutID = 0;
        $(this)
          .bind('keydown keyup', function (e) {
            if ($.inArray(e.keyCode, discardKeyCode) === -1) {
              timeoutID && clearTimeout(timeoutID);
            }
          })
          .keyup(function(e) {
            if ($.inArray(e.keyCode, discardKeyCode) === -1) {
              timeoutID = setTimeout($.proxy(triggerSubmit, this.form), 500);
            }
          })
          .bind('change', function (e) {
            if ($.inArray(e.keyCode, discardKeyCode) === -1) {
              timeoutID = setTimeout($.proxy(triggerSubmit, this.form), 500);
            }
          });
      });
  }
}
})(jQuery);
;

/**
 * Provide some extra responses for the page list so we can have automatic
 * on change.
 */

Drupal.behaviors.PageManagerList = function() {
  var timeoutID = 0;
  $('form#page-manager-list-pages-form select:not(.pm-processed)')
    .addClass('pm-processed')
    .change(function() {
      $('#edit-pages-apply').click();
    });
  $('form#page-manager-list-pages-form input[type=text]:not(.pm-processed)')
    .addClass('pm-processed')
    .keyup(function(e) {
      switch (e.keyCode) {
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
        case 20: // caps lock
        case 33: // page up
        case 34: // page down
        case 35: // end
        case 36: // home
        case 37: // left arrow
        case 38: // up arrow
        case 39: // right arrow
        case 40: // down arrow
        case 9:  // tab
        case 13: // enter
        case 27: // esc
          return false;
        default:
          if (!$('#edit-pages-apply').hasClass('ctools-ajaxing')) {
            if ((timeoutID)) {
              clearTimeout(timeoutID);
            }

            timeoutID = setTimeout(function() { $('#edit-pages-apply').click(); }, 300);
        }
      }
    });
}
;
