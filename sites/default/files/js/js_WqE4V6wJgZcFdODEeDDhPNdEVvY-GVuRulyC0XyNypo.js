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
(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
;
(function($){Drupal.toggleFieldset=function(fieldset){var $fieldset=$(fieldset);if($fieldset.is(".collapsed")){var $content=$("> .fieldset-wrapper",fieldset).hide();$fieldset.removeClass("collapsed").trigger({type:"collapsed",value:false}).find("> legend span.fieldset-legend-prefix").html(Drupal.t("Hide"));$content.slideDown({duration:"fast",easing:"linear",complete:function(){Drupal.collapseScrollIntoView(fieldset);fieldset.animating=false},step:function(){Drupal.collapseScrollIntoView(fieldset)}})}else{$fieldset.trigger({type:"collapsed",
value:true});$("> .fieldset-wrapper",fieldset).slideUp("fast",function(){$fieldset.addClass("collapsed").find("> legend span.fieldset-legend-prefix").html(Drupal.t("Show"));fieldset.animating=false})}};Drupal.collapseScrollIntoView=function(node){var h=document.documentElement.clientHeight||document.body.clientHeight||0;var offset=document.documentElement.scrollTop||document.body.scrollTop||0;var posY=$(node).offset().top;var fudge=55;if(posY+node.offsetHeight+fudge>h+offset)if(node.offsetHeight>
h)window.scrollTo(0,posY);else window.scrollTo(0,posY+node.offsetHeight-h+fudge)};Drupal.behaviors.collapse={attach:function(context,settings){$("fieldset.collapsible",context).once("collapse",function(){var $fieldset=$(this);var anchor=location.hash&&location.hash!="#"?", "+location.hash:"";if($fieldset.find(".error"+anchor).length)$fieldset.removeClass("collapsed");var summary=$('<span class="summary"></span>');$fieldset.bind("summaryUpdated",function(){var text=$.trim($fieldset.drupalGetSummary());
summary.html(text?" ("+text+")":"")}).trigger("summaryUpdated");var $legend=$("> legend .fieldset-legend",this);$('<span class="fieldset-legend-prefix element-invisible"></span>').append($fieldset.hasClass("collapsed")?Drupal.t("Show"):Drupal.t("Hide")).prependTo($legend).after(" ");var $link=$('<a class="fieldset-title" href="#"></a>').prepend($legend.contents()).appendTo($legend).click(function(){var fieldset=$fieldset.get(0);if(!fieldset.animating){fieldset.animating=true;Drupal.toggleFieldset(fieldset)}return false});
$legend.append(summary)})}}})(jQuery);;
(function ($) {

/**
 * Provide the summary information for the block settings vertical tabs.
 */
Drupal.behaviors.blockSettingsSummary = {
  attach: function (context) {
    // The drupalSetSummary method required for this behavior is not available
    // on the Blocks administration page, so we need to make sure this
    // behavior is processed only if drupalSetSummary is defined.
    if (typeof jQuery.fn.drupalSetSummary == 'undefined') {
      return;
    }

    $('fieldset#edit-path', context).drupalSetSummary(function (context) {
      if (!$('textarea[name="pages"]', context).val()) {
        return Drupal.t('Not restricted');
      }
      else {
        return Drupal.t('Restricted to certain pages');
      }
    });

    $('fieldset#edit-node-type', context).drupalSetSummary(function (context) {
      var vals = [];
      $('input[type="checkbox"]:checked', context).each(function () {
        vals.push($.trim($(this).next('label').html()));
      });
      if (!vals.length) {
        vals.push(Drupal.t('Not restricted'));
      }
      return vals.join(', ');
    });

    $('fieldset#edit-role', context).drupalSetSummary(function (context) {
      var vals = [];
      $('input[type="checkbox"]:checked', context).each(function () {
        vals.push($.trim($(this).next('label').html()));
      });
      if (!vals.length) {
        vals.push(Drupal.t('Not restricted'));
      }
      return vals.join(', ');
    });

    $('fieldset#edit-user', context).drupalSetSummary(function (context) {
      var $radio = $('input[name="custom"]:checked', context);
      if ($radio.val() == 0) {
        return Drupal.t('Not customizable');
      }
      else {
        return $radio.next('label').html();
      }
    });
  }
};

/**
 * Move a block in the blocks table from one region to another via select list.
 *
 * This behavior is dependent on the tableDrag behavior, since it uses the
 * objects initialized in that behavior to update the row.
 */
Drupal.behaviors.blockDrag = {
  attach: function (context, settings) {
    // tableDrag is required and we should be on the blocks admin page.
    if (typeof Drupal.tableDrag == 'undefined' || typeof Drupal.tableDrag.blocks == 'undefined') {
      return;
    }

    var table = $('table#blocks');
    var tableDrag = Drupal.tableDrag.blocks; // Get the blocks tableDrag object.

    // Add a handler for when a row is swapped, update empty regions.
    tableDrag.row.prototype.onSwap = function (swappedRow) {
      checkEmptyRegions(table, this);
    };

    // A custom message for the blocks page specifically.
    Drupal.theme.tableDragChangedWarning = function () {
      return '<div class="messages warning">' + Drupal.theme('tableDragChangedMarker') + ' ' + Drupal.t('The changes to these blocks will not be saved until the <em>Save blocks</em> button is clicked.') + '</div>';
    };

    // Add a handler so when a row is dropped, update fields dropped into new regions.
    tableDrag.onDrop = function () {
      dragObject = this;
      // Use "region-message" row instead of "region" row because
      // "region-{region_name}-message" is less prone to regexp match errors.
      var regionRow = $(dragObject.rowObject.element).prevAll('tr.region-message').get(0);
      var regionName = regionRow.className.replace(/([^ ]+[ ]+)*region-([^ ]+)-message([ ]+[^ ]+)*/, '$2');
      var regionField = $('select.block-region-select', dragObject.rowObject.element);
      // Check whether the newly picked region is available for this block.
      if ($('option[value=' + regionName + ']', regionField).length == 0) {
        // If not, alert the user and keep the block in its old region setting.
        alert(Drupal.t('The block cannot be placed in this region.'));
        // Simulate that there was a selected element change, so the row is put
        // back to from where the user tried to drag it.
        regionField.change();
      }
      else if ($(dragObject.rowObject.element).prev('tr').is('.region-message')) {
        var weightField = $('select.block-weight', dragObject.rowObject.element);
        var oldRegionName = weightField[0].className.replace(/([^ ]+[ ]+)*block-weight-([^ ]+)([ ]+[^ ]+)*/, '$2');

        if (!regionField.is('.block-region-' + regionName)) {
          regionField.removeClass('block-region-' + oldRegionName).addClass('block-region-' + regionName);
          weightField.removeClass('block-weight-' + oldRegionName).addClass('block-weight-' + regionName);
          regionField.val(regionName);
        }
      }
    };

    // Add the behavior to each region select list.
    $('select.block-region-select', context).once('block-region-select', function () {
      $(this).change(function (event) {
        // Make our new row and select field.
        var row = $(this).closest('tr');
        var select = $(this);
        tableDrag.rowObject = new tableDrag.row(row);

        // Find the correct region and insert the row as the last in the region.
        table.find('.region-' + select[0].value + '-message').nextUntil('.region-message').last().before(row);

        // Modify empty regions with added or removed fields.
        checkEmptyRegions(table, row);
        // Remove focus from selectbox.
        select.get(0).blur();
      });
    });

    var checkEmptyRegions = function (table, rowObject) {
      $('tr.region-message', table).each(function () {
        // If the dragged row is in this region, but above the message row, swap it down one space.
        if ($(this).prev('tr').get(0) == rowObject.element) {
          // Prevent a recursion problem when using the keyboard to move rows up.
          if ((rowObject.method != 'keyboard' || rowObject.direction == 'down')) {
            rowObject.swap('after', this);
          }
        }
        // This region has become empty.
        if ($(this).next('tr').is(':not(.draggable)') || $(this).next('tr').length == 0) {
          $(this).removeClass('region-populated').addClass('region-empty');
        }
        // This region has become populated.
        else if ($(this).is('.region-empty')) {
          $(this).removeClass('region-empty').addClass('region-populated');
        }
      });
    };
  }
};

})(jQuery);
;
