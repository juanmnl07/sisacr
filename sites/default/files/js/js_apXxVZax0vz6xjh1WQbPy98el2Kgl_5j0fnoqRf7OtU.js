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
(function(c){var d={vertical:false,rtl:false,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click",
buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},b=false;c(window).bind("load.jcarousel",function(){b=true});c.jcarousel=function(l,g){this.options=c.extend({},d,g||{});this.locked=false;this.autoStopped=false;this.container=null;this.clip=null;this.list=null;this.buttonNext=null;this.buttonPrev=null;this.buttonNextState=null;this.buttonPrevState=null;if(!g||g.rtl===undefined)this.options.rtl=(c(l).attr("dir")||c("html").attr("dir")||"").toLowerCase()=="rtl";this.wh=!this.options.vertical?
"width":"height";this.lt=!this.options.vertical?this.options.rtl?"right":"left":"top";var q="",n=l.className.split(" ");for(var k=0;k<n.length;k++)if(n[k].indexOf("jcarousel-skin")!=-1){c(l).removeClass(n[k]);q=n[k];break}if(l.nodeName.toUpperCase()=="UL"||l.nodeName.toUpperCase()=="OL"){this.list=c(l);this.clip=this.list.parents(".jcarousel-clip");this.container=this.list.parents(".jcarousel-container")}else{this.container=c(l);this.list=this.container.find("ul,ol").eq(0);this.clip=this.container.find(".jcarousel-clip")}if(this.clip.size()===
0)this.clip=this.list.wrap("<div></div>").parent();if(this.container.size()===0)this.container=this.clip.wrap("<div></div>").parent();if(q!==""&&this.container.parent()[0].className.indexOf("jcarousel-skin")==-1)this.container.wrap('<div class=" '+q+'"></div>');this.buttonPrev=c(".jcarousel-prev",this.container);if(this.buttonPrev.size()===0&&this.options.buttonPrevHTML!==null)this.buttonPrev=c(this.options.buttonPrevHTML).appendTo(this.container);this.buttonPrev.addClass(this.className("jcarousel-prev"));
this.buttonNext=c(".jcarousel-next",this.container);if(this.buttonNext.size()===0&&this.options.buttonNextHTML!==null)this.buttonNext=c(this.options.buttonNextHTML).appendTo(this.container);this.buttonNext.addClass(this.className("jcarousel-next"));this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"});this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css(this.options.rtl?"right":"left",0);this.container.addClass(this.className("jcarousel-container")).css({position:"relative"});
if(!this.options.vertical&&this.options.rtl)this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl");var m=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null;var p=this.list.children("li");var r=this;if(p.size()>0){var f=0,h=this.options.offset;p.each(function(){r.format(this,h++);f+=r.dimension(this,m)});this.list.css(this.wh,f+100+"px");if(!g||g.size===undefined)this.options.size=p.size()}this.container.css("display","block");this.buttonNext.css("display",
"block");this.buttonPrev.css("display","block");this.funcNext=function(){r.next();return false};this.funcPrev=function(){r.prev();return false};this.funcResize=function(){if(r.resizeTimer)clearTimeout(r.resizeTimer);r.resizeTimer=setTimeout(function(){r.reload()},100)};if(this.options.initCallback!==null)this.options.initCallback(this,"init");if(!b&&a.isSafari()){this.buttons(false,false);c(window).bind("load.jcarousel",function(){r.setup()})}else this.setup()};var a=c.jcarousel;a.fn=a.prototype=
{jcarousel:"0.2.9"};a.fn.extend=a.extend=c.extend;a.fn.extend({setup:function(){this.first=null;this.last=null;this.prevFirst=null;this.prevLast=null;this.animating=false;this.timer=null;this.resizeTimer=null;this.tail=null;this.inTail=false;if(this.locked)return;this.list.css(this.lt,this.pos(this.options.offset)+"px");var e=this.pos(this.options.start,true);this.prevFirst=this.prevLast=null;this.animate(e,false);c(window).unbind("resize.jcarousel",this.funcResize).bind("resize.jcarousel",this.funcResize);
if(this.options.setupCallback!==null)this.options.setupCallback(this)},reset:function(){this.list.empty();this.list.css(this.lt,"0px");this.list.css(this.wh,"10px");if(this.options.initCallback!==null)this.options.initCallback(this,"reset");this.setup()},reload:function(){if(this.tail!==null&&this.inTail)this.list.css(this.lt,a.intval(this.list.css(this.lt))+this.tail);this.tail=null;this.inTail=false;if(this.options.reloadCallback!==null)this.options.reloadCallback(this);if(this.options.visible!==
null){var g=this;var h=Math.ceil(this.clipping()/this.options.visible),f=0,e=0;this.list.children("li").each(function(j){f+=g.dimension(this,h);if(parseInt(jQuery(this).attr("jcarouselindex"))<g.first)e=f});this.list.css(this.wh,f+"px");this.list.css(this.lt,-e+"px")}this.scroll(this.first,false)},lock:function(){this.locked=true;this.buttons()},unlock:function(){this.locked=false;this.buttons()},size:function(e){if(e!==undefined){this.options.size=e;if(!this.locked)this.buttons()}return this.options.size},
has:function(g,h){if(h===undefined||!h)h=g;if(this.options.size!==null&&h>this.options.size)h=this.options.size;for(var f=g;f<=h;f++){var k=this.get(f);if(!k.length||k.hasClass("jcarousel-item-placeholder"))return false}return true},get:function(e){return c(">.jcarousel-item-"+e,this.list)},add:function(l,q){var m=this.get(l),h=0,g=c(q);if(m.length===0){var p,k=a.intval(l);m=this.create(l);while(true){p=this.get(--k);if(k<=0||p.length){if(k<=0)this.list.prepend(m);else p.after(m);break}}}else h=this.dimension(m);
if(g.get(0).nodeName.toUpperCase()=="LI"){m.replaceWith(g);m=g}else m.empty().append(q);this.format(m.removeClass(this.className("jcarousel-item-placeholder")),l);var o=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null;var f=this.dimension(m,o)-h;if(l>0&&l<this.first)this.list.css(this.lt,a.intval(this.list.css(this.lt))-f+"px");this.list.css(this.wh,a.intval(this.list.css(this.wh))+f+"px");return m},remove:function(f){var g=this.get(f);if(!g.length||f>=this.first&&
f<=this.last)return;var h=this.dimension(g);if(f<this.first)this.list.css(this.lt,a.intval(this.list.css(this.lt))+h+"px");g.remove();this.list.css(this.wh,a.intval(this.list.css(this.wh))-h+"px")},next:function(){if(this.tail!==null&&!this.inTail)this.scrollTail(false);else this.scroll((this.options.wrap=="both"||this.options.wrap=="last")&&this.options.size!==null&&this.last==this.options.size?1:this.first+this.options.scroll)},prev:function(){if(this.tail!==null&&this.inTail)this.scrollTail(true);
else this.scroll((this.options.wrap=="both"||this.options.wrap=="first")&&this.options.size!==null&&this.first==1?this.options.size:this.first-this.options.scroll)},scrollTail:function(e){if(this.locked||this.animating||!this.tail)return;this.pauseAuto();var f=a.intval(this.list.css(this.lt));f=!e?f-this.tail:f+this.tail;this.inTail=!e;this.prevFirst=this.first;this.prevLast=this.last;this.animate(f)},scroll:function(f,e){if(this.locked||this.animating)return;this.pauseAuto();this.animate(this.pos(f),
e)},pos:function(C,k){var n=a.intval(this.list.css(this.lt));if(this.locked||this.animating)return n;if(this.options.wrap!="circular")C=C<1?1:this.options.size&&C>this.options.size?this.options.size:C;var z=this.first>C;var E=this.options.wrap!="circular"&&this.first<=1?1:this.first;var H=z?this.get(E):this.get(this.last);var B=z?E:E-1;var F=null,A=0,w=false,G=0,D;while(z?--B>=C:++B<C){F=this.get(B);w=!F.length;if(F.length===0){F=this.create(B).addClass(this.className("jcarousel-item-placeholder"));
H[z?"before":"after"](F);if(this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(B<=0||B>this.options.size)){D=this.get(this.index(B));if(D.length)F=this.add(B,D.clone(true))}}H=F;G=this.dimension(F);if(w)A+=G;if(this.first!==null&&(this.options.wrap=="circular"||B>=1&&(this.options.size===null||B<=this.options.size)))n=z?n+G:n-G}var s=this.clipping(),u=[],h=0,t=0;H=this.get(C-1);B=C;while(++h){F=this.get(B);w=!F.length;if(F.length===0){F=this.create(B).addClass(this.className("jcarousel-item-placeholder"));
if(H.length===0)this.list.prepend(F);else H[z?"before":"after"](F);if(this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(B<=0||B>this.options.size)){D=this.get(this.index(B));if(D.length)F=this.add(B,D.clone(true))}}H=F;G=this.dimension(F);if(G===0)throw new Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...");if(this.options.wrap!="circular"&&this.options.size!==null&&B>this.options.size)u.push(F);else if(w)A+=G;t+=G;if(t>=s)break;
B++}for(var r=0;r<u.length;r++)u[r].remove();if(A>0){this.list.css(this.wh,this.dimension(this.list)+A+"px");if(z){n-=A;this.list.css(this.lt,a.intval(this.list.css(this.lt))-A+"px")}}var q=C+h-1;if(this.options.wrap!="circular"&&this.options.size&&q>this.options.size)q=this.options.size;if(B>q){h=0;B=q;t=0;while(++h){F=this.get(B--);if(!F.length)break;t+=this.dimension(F);if(t>=s)break}}var o=q-h+1;if(this.options.wrap!="circular"&&o<1)o=1;if(this.inTail&&z){n+=this.tail;this.inTail=false}this.tail=
null;if(this.options.wrap!="circular"&&q==this.options.size&&q-h+1>=1){var y=a.intval(this.get(q).css(!this.options.vertical?"marginRight":"marginBottom"));if(t-y>s)this.tail=t-s-y}if(k&&C===this.options.size&&this.tail){n-=this.tail;this.inTail=true}while(C-- >o)n+=this.dimension(this.get(C));this.prevFirst=this.first;this.prevLast=this.last;this.first=o;this.last=q;return n},animate:function(i,e){if(this.locked||this.animating)return;this.animating=true;var f=this;var g=function(){f.animating=false;
if(i===0)f.list.css(f.lt,0);if(!f.autoStopped&&(f.options.wrap=="circular"||f.options.wrap=="both"||f.options.wrap=="last"||f.options.size===null||f.last<f.options.size||f.last==f.options.size&&f.tail!==null&&!f.inTail))f.startAuto();f.buttons();f.notify("onAfterAnimation");if(f.options.wrap=="circular"&&f.options.size!==null)for(var k=f.prevFirst;k<=f.prevLast;k++)if(k!==null&&!(k>=f.first&&k<=f.last)&&(k<1||k>f.options.size))f.remove(k)};this.notify("onBeforeAnimation");if(!this.options.animation||
e===false){this.list.css(this.lt,i+"px");g()}else{var j=!this.options.vertical?this.options.rtl?{right:i}:{left:i}:{top:i};var h={duration:this.options.animation,easing:this.options.easing,complete:g};if(c.isFunction(this.options.animationStepCallback))h.step=this.options.animationStepCallback;this.list.animate(j,h)}},startAuto:function(f){if(f!==undefined)this.options.auto=f;if(this.options.auto===0)return this.stopAuto();if(this.timer!==null)return;this.autoStopped=false;var e=this;this.timer=window.setTimeout(function(){e.next()},
this.options.auto*1E3)},stopAuto:function(){this.pauseAuto();this.autoStopped=true},pauseAuto:function(){if(this.timer===null)return;window.clearTimeout(this.timer);this.timer=null},buttons:function(g,f){if(g==null){g=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="first"||this.options.size===null||this.last<this.options.size);if(!this.locked&&(!this.options.wrap||this.options.wrap=="first")&&this.options.size!==null&&this.last>=this.options.size)g=this.tail!==null&&!this.inTail}if(f==
null){f=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="last"||this.first>1);if(!this.locked&&(!this.options.wrap||this.options.wrap=="last")&&this.options.size!==null&&this.first==1)f=this.tail!==null&&this.inTail}var e=this;if(this.buttonNext.size()>0){this.buttonNext.unbind(this.options.buttonNextEvent+".jcarousel",this.funcNext);if(g)this.buttonNext.bind(this.options.buttonNextEvent+".jcarousel",this.funcNext);this.buttonNext[g?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",
g?false:true);if(this.options.buttonNextCallback!==null&&this.buttonNext.data("jcarouselstate")!=g)this.buttonNext.each(function(){e.options.buttonNextCallback(e,this,g)}).data("jcarouselstate",g)}else if(this.options.buttonNextCallback!==null&&this.buttonNextState!=g)this.options.buttonNextCallback(e,null,g);if(this.buttonPrev.size()>0){this.buttonPrev.unbind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev);if(f)this.buttonPrev.bind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev);
this.buttonPrev[f?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",f?false:true);if(this.options.buttonPrevCallback!==null&&this.buttonPrev.data("jcarouselstate")!=f)this.buttonPrev.each(function(){e.options.buttonPrevCallback(e,this,f)}).data("jcarouselstate",f)}else if(this.options.buttonPrevCallback!==null&&this.buttonPrevState!=f)this.options.buttonPrevCallback(e,null,f);this.buttonNextState=g;this.buttonPrevState=f},notify:function(e){var f=this.prevFirst===
null?"init":this.prevFirst<this.first?"next":"prev";this.callback("itemLoadCallback",e,f);if(this.prevFirst!==this.first){this.callback("itemFirstInCallback",e,f,this.first);this.callback("itemFirstOutCallback",e,f,this.prevFirst)}if(this.prevLast!==this.last){this.callback("itemLastInCallback",e,f,this.last);this.callback("itemLastOutCallback",e,f,this.prevLast)}this.callback("itemVisibleInCallback",e,f,this.first,this.last,this.prevFirst,this.prevLast);this.callback("itemVisibleOutCallback",e,f,
this.prevFirst,this.prevLast,this.first,this.last)},callback:function(j,m,e,k,h,g,f){if(this.options[j]==null||typeof this.options[j]!="object"&&m!="onAfterAnimation")return;var n=typeof this.options[j]=="object"?this.options[j][m]:this.options[j];if(!c.isFunction(n))return;var o=this;if(k===undefined)n(o,e,m);else if(h===undefined)this.get(k).each(function(){n(o,this,k,e,m)});else{var p=function(q){o.get(q).each(function(){n(o,this,q,e,m)})};for(var l=k;l<=h;l++)if(l!==null&&!(l>=g&&l<=f))p(l)}},
create:function(e){return this.format("<li></li>",e)},format:function(k,h){k=c(k);var g=k.get(0).className.split(" ");for(var f=0;f<g.length;f++)if(g[f].indexOf("jcarousel-")!=-1)k.removeClass(g[f]);k.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+h)).css({"float":this.options.rtl?"right":"left","list-style":"none"}).attr("jcarouselindex",h);return k},className:function(e){return e+" "+e+(!this.options.vertical?"-horizontal":"-vertical")},dimension:function(h,
i){var g=c(h);if(i==null)return!this.options.vertical?g.innerWidth()+a.intval(g.css("margin-left"))+a.intval(g.css("margin-right"))+a.intval(g.css("border-left-width"))+a.intval(g.css("border-right-width"))||a.intval(this.options.itemFallbackDimension):g.innerHeight()+a.intval(g.css("margin-top"))+a.intval(g.css("margin-bottom"))+a.intval(g.css("border-top-width"))+a.intval(g.css("border-bottom-width"))||a.intval(this.options.itemFallbackDimension);else{var f=!this.options.vertical?i-a.intval(g.css("marginLeft"))-
a.intval(g.css("marginRight")):i-a.intval(g.css("marginTop"))-a.intval(g.css("marginBottom"));c(g).css(this.wh,f+"px");return this.dimension(g)}},clipping:function(){return!this.options.vertical?this.clip[0].offsetWidth-a.intval(this.clip.css("borderLeftWidth"))-a.intval(this.clip.css("borderRightWidth")):this.clip[0].offsetHeight-a.intval(this.clip.css("borderTopWidth"))-a.intval(this.clip.css("borderBottomWidth"))},index:function(e,f){if(f==null)f=this.options.size;return Math.round(((e-1)/f-Math.floor((e-
1)/f))*f)+1}});a.extend({defaults:function(e){return c.extend(d,e||{})},intval:function(e){e=parseInt(e,10);return isNaN(e)?0:e},windowLoaded:function(){b=true},isSafari:function(){var g=navigator.userAgent.toLowerCase(),f=/(chrome)[ \/]([\w.]+)/.exec(g)||/(webkit)[ \/]([\w.]+)/.exec(g)||[],e=f[1]||"";return e==="webkit"}});c.fn.jcarousel=function(g){if(typeof g=="string"){var e=c(this).data("jcarousel"),f=Array.prototype.slice.call(arguments,1);return e[g].apply(e,f)}else return this.each(function(){var h=
c(this).data("jcarousel");if(h){if(g)c.extend(h.options,g);h.reload()}else c(this).data("jcarousel",new a(this,g))})}})(jQuery);;
(function($){Drupal.behaviors.jcarousel={};Drupal.behaviors.jcarousel.attach=function(context,settings){settings=settings||Drupal.settings;if(!settings.jcarousel||!settings.jcarousel.carousels)return;$("ul.jcarousel li").css("display","");$.each(settings.jcarousel.carousels,function(key,options){var $carousel=$(options.selector+":not(.jcarousel-processed)",context);if(!$carousel.length)return;$.each(options,function(optionKey){if(optionKey.match(/Callback$/)&&typeof options[optionKey]=="string"){var callbackFunction=
window;var callbackParents=options[optionKey].split(".");$.each(callbackParents,function(objectParent){callbackFunction=callbackFunction[callbackParents[objectParent]]});options[optionKey]=callbackFunction}});if(options.ajax&&!options.itemLoadCallback)options.itemLoadCallback=Drupal.jcarousel.ajaxLoadCallback;if(options.auto&&options.autoPause&&!options.initCallback)options.initCallback=function(carousel,state){Drupal.jcarousel.autoPauseCallback(carousel,state)};if(options.responsive&&!options.reloadCallback){options.vertical=
false;options.visible=null;options.reloadCallback=Drupal.jcarousel.reloadCallback}if(!options.setupCallback){options.setupCallback=function(carousel){Drupal.jcarousel.setupCarousel(carousel);if(options.navigation)Drupal.jcarousel.addNavigation(carousel,options.navigation);if(options.responsive)carousel.reload()};if(options.navigation&&!options.itemVisibleInCallback)options.itemLastInCallback={onAfterAnimation:Drupal.jcarousel.updateNavigationActive}}if(!options.hasOwnProperty("buttonNextHTML")&&!options.hasOwnProperty("buttonPrevHTML")){options.buttonNextHTML=
Drupal.theme("jCarouselButton","next");options.buttonPrevHTML=Drupal.theme("jCarouselButton","previous")}$carousel.addClass("jcarousel-processed").jcarousel(options)})};Drupal.jcarousel={};Drupal.jcarousel.reloadCallback=function(carousel){carousel.container.css("width","auto");carousel.clip.css("width","auto");var clipWidth=carousel.clip.width();var containerExtra=carousel.container.width()-carousel.clip.outerWidth(true);var itemWidth=carousel.list.find("li").first().outerWidth(true);var numItems=
Math.floor(carousel.clip.width()/itemWidth)||1;carousel.options.scroll=numItems;var newClipWidth=numItems*itemWidth;var newContainerWidth=newClipWidth+containerExtra;carousel.clip.width(newClipWidth);carousel.container.width(newContainerWidth)};Drupal.jcarousel.ajaxLoadCallback=function(jcarousel,state){if(state=="init"||jcarousel.has(jcarousel.first,jcarousel.last))return;var $list=jcarousel.list;var $view=$list.parents(".view:first");var ajaxPath=Drupal.settings.jcarousel.ajaxPath;var target=$view.get(0);
var settings;$.each(Drupal.settings.jcarousel.carousels,function(domID,carouselSettings){if($list.is("."+domID))settings=carouselSettings["view_options"]});var viewData={"js":1,"first":jcarousel.first-1,"last":jcarousel.last};$.extend(viewData,settings);$.ajax({url:ajaxPath,type:"GET",data:viewData,success:function(response){Drupal.jcarousel.ajaxResponseCallback(jcarousel,target,response)},error:function(xhr){Drupal.jcarousel.ajaxErrorCallback(xhr,ajaxPath)},dataType:"json"})};Drupal.jcarousel.autoPauseCallback=
function(carousel,state){function pauseAuto(){carousel.stopAuto()}function resumeAuto(){carousel.startAuto()}carousel.clip.hover(pauseAuto,resumeAuto);carousel.buttonNext.hover(pauseAuto,resumeAuto);carousel.buttonPrev.hover(pauseAuto,resumeAuto)};Drupal.jcarousel.setupCarousel=function(carousel){carousel.pageSize=carousel.last-(carousel.first-1);var itemCount=carousel.options.size?carousel.options.size:$(carousel.list).children("li").length;carousel.pageCount=Math.ceil(itemCount/carousel.pageSize);
carousel.pageNumber=1;if(carousel.options.wrap!="circular"&&carousel.pageCount==1)carousel.buttons(false,false);carousel.buttonNext.css("display","");carousel.buttonPrev.css("display","")};Drupal.jcarousel.addNavigation=function(carousel,position){if(carousel.pageCount<=1)return;$(carousel.list).parents(".jcarousel-container:first").addClass("jcarousel-navigation-"+position);var navigation=$('<ul class="jcarousel-navigation"></ul>');for(var i=1;i<=carousel.pageCount;i++){var pagerItem=$(Drupal.theme("jCarouselPageLink",
i));var listItem=$("<li></li>").attr("jcarousel-page",i).append(pagerItem);navigation.append(listItem);if(i===1)listItem.addClass("active");pagerItem.bind("click",function(){var newPageNumber=$(this).parent().attr("jcarousel-page");var itemOffset=(newPageNumber-carousel.pageNumber)*carousel.pageSize;if(itemOffset)carousel.scroll(carousel.first+itemOffset);return false})}$(carousel.list).parents(".jcarousel-clip:first")[position](navigation)};Drupal.jcarousel.updateNavigationActive=function(carousel,
item,idx,state){var $listItems=$(carousel.list).parents(".jcarousel-container:first").find(".jcarousel-navigation li");if($listItems.length==0)return;var pageNumber=Math.ceil(idx/carousel.pageSize);if(pageNumber<=0||pageNumber>carousel.pageCount){pageNumber=pageNumber%carousel.pageCount;pageNumber=pageNumber==0?carousel.pageCount:pageNumber;pageNumber=pageNumber<0?pageNumber+carousel.pageCount:pageNumber}carousel.pageNumber=pageNumber;var currentPage=$listItems.get(carousel.pageNumber-1);$listItems.not(currentPage).removeClass("active");
$(currentPage).addClass("active")};Drupal.jcarousel.ajaxResponseCallback=function(jcarousel,target,response){if(response.debug)alert(response.debug);var $view=$(target);var jcarousel=$view.find("ul.jcarousel").data("jcarousel");$("ul.jcarousel > li",response.display).each(function(i){var itemNumber=this.className.replace(/.*?jcarousel-item-(\d+).*/,"$1");jcarousel.add(itemNumber,this.innerHTML)});Drupal.attachBehaviors(jcarousel.list.get(0));if(response.messages)$view.find(".views-messages").remove().end().prepend(response.messages)};
Drupal.jcarousel.ajaxErrorCallback=function(xhr,path){var error_text="";if(xhr.status==500&&xhr.responseText||xhr.status==200){error_text=xhr.responseText;error_text=error_text.replace("/&(lt|gt);/g",function(m,p){return p=="lt"?"<":">"});error_text=error_text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,"");error_text=error_text.replace(/[\n]+\s+/g,"\n")}else if(xhr.status==500)error_text=xhr.status+": "+Drupal.t("Internal server error. Please see server or PHP logs for error information.");else error_text=
xhr.status+": "+xhr.statusText;alert(Drupal.t("An error occurred at @path.\n\nError Description: @error",{"@path":path,"@error":error_text}))};Drupal.theme.prototype.jCarouselButton=function(type){return'<a href="javascript:void(0)"></a>'};Drupal.theme.prototype.jCarouselPageLink=function(pageNumber){return'<a href="javascript:void(0)"><span>'+pageNumber+"</span></a>"}})(jQuery);;
(function($){$.fn.drupalGetSummary=function(){var callback=this.data("summaryCallback");return this[0]&&callback?$.trim(callback(this[0])):""};$.fn.drupalSetSummary=function(callback){var self=this;if(typeof callback!="function"){var val=callback;callback=function(){return val}}return this.data("summaryCallback",callback).unbind("formUpdated.summary").bind("formUpdated.summary",function(){self.trigger("summaryUpdated")}).trigger("summaryUpdated")};Drupal.behaviors.formUpdated={attach:function(context){var events=
"change.formUpdated click.formUpdated blur.formUpdated keyup.formUpdated";$(context).find(":input").andSelf().filter(":input").unbind(events).bind(events,function(){$(this).trigger("formUpdated")})}};Drupal.behaviors.fillUserInfoFromCookie={attach:function(context,settings){$("form.user-info-from-cookie").once("user-info-from-cookie",function(){var formContext=this;$.each(["name","mail","homepage"],function(){var $element=$("[name="+this+"]",formContext);var cookie=$.cookie("Drupal.visitor."+this);
if($element.length&&cookie)$element.val(cookie)})})}}})(jQuery);;
(function($){Drupal.toggleFieldset=function(fieldset){var $fieldset=$(fieldset);if($fieldset.is(".collapsed")){var $content=$("> .fieldset-wrapper",fieldset).hide();$fieldset.removeClass("collapsed").trigger({type:"collapsed",value:false}).find("> legend span.fieldset-legend-prefix").html(Drupal.t("Hide"));$content.slideDown({duration:"fast",easing:"linear",complete:function(){Drupal.collapseScrollIntoView(fieldset);fieldset.animating=false},step:function(){Drupal.collapseScrollIntoView(fieldset)}})}else{$fieldset.trigger({type:"collapsed",
value:true});$("> .fieldset-wrapper",fieldset).slideUp("fast",function(){$fieldset.addClass("collapsed").find("> legend span.fieldset-legend-prefix").html(Drupal.t("Show"));fieldset.animating=false})}};Drupal.collapseScrollIntoView=function(node){var h=document.documentElement.clientHeight||document.body.clientHeight||0;var offset=document.documentElement.scrollTop||document.body.scrollTop||0;var posY=$(node).offset().top;var fudge=55;if(posY+node.offsetHeight+fudge>h+offset)if(node.offsetHeight>
h)window.scrollTo(0,posY);else window.scrollTo(0,posY+node.offsetHeight-h+fudge)};Drupal.behaviors.collapse={attach:function(context,settings){$("fieldset.collapsible",context).once("collapse",function(){var $fieldset=$(this);var anchor=location.hash&&location.hash!="#"?", "+location.hash:"";if($fieldset.find(".error"+anchor).length)$fieldset.removeClass("collapsed");var summary=$('<span class="summary"></span>');$fieldset.bind("summaryUpdated",function(){var text=$.trim($fieldset.drupalGetSummary());
summary.html(text?" ("+text+")":"")}).trigger("summaryUpdated");var $legend=$("> legend .fieldset-legend",this);$('<span class="fieldset-legend-prefix element-invisible"></span>').append($fieldset.hasClass("collapsed")?Drupal.t("Show"):Drupal.t("Hide")).prependTo($legend).after(" ");var $link=$('<a class="fieldset-title" href="#"></a>').prepend($legend.contents()).appendTo($legend).click(function(){var fieldset=$fieldset.get(0);if(!fieldset.animating){fieldset.animating=true;Drupal.toggleFieldset(fieldset)}return false});
$legend.append(summary)})}}})(jQuery);;
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date;f.setTime(f.getTime()+m.expires*24*60*60*1E3)}else f=m.expires;e="; expires="+f.toUTCString()}var l=m.path?"; path="+m.path:"";var g=m.domain?"; domain="+m.domain:"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&
document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==b+"="){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};;
(function($){Drupal.behaviors.CToolsDropbutton={attach:function(){$(".ctools-button").once("ctools-button").removeClass("ctools-no-js");$(".ctools-dropbutton").once("ctools-dropbutton",function(){var $dropbutton=$(this);var $button=$(".ctools-content",$dropbutton);var $secondaryActions=$("li",$button).not(":first");var $twisty=$(".ctools-link",$dropbutton);var open=false;var hovering=false;var timerID=0;var toggle=function(close){if(open||close)if(!close){open=false;$secondaryActions.slideUp(100);
$dropbutton.removeClass("open")}else{if(timerID)clearTimeout(timerID);timerID=setTimeout(function(){if(!hovering){open=false;$secondaryActions.slideUp(100);$dropbutton.removeClass("open")}},500)}else{open=true;$secondaryActions.animate({height:"show",opacity:"show"},100);$dropbutton.addClass("open")}};$secondaryActions.hide();$twisty.click(function(){toggle();return false});$dropbutton.hover(function(){hovering=true},function(){hovering=false;toggle(true);return false})})}}})(jQuery);;
(function($){Drupal.ModuleFilter={};Drupal.ModuleFilter.explode=function(string){var queryArray=string.match(/([a-zA-Z]+\:(\w+|"[^"]+")*)|\w+|"[^"]+"/g);if(!queryArray)queryArray=new Array;var i=queryArray.length;while(i--)queryArray[i]=queryArray[i].replace(/"/g,"");return queryArray};Drupal.ModuleFilter.getState=function(key){if(!Drupal.ModuleFilter.state){Drupal.ModuleFilter.state={};var cookie=$.cookie("DrupalModuleFilter");var query=cookie?cookie.split("&"):[];if(query)for(var i in query)if(typeof query[i]==
"string"&&query[i].indexOf("=")!=-1){var values=query[i].split("=");if(values.length===2)Drupal.ModuleFilter.state[values[0]]=values[1]}}return Drupal.ModuleFilter.state[key]?Drupal.ModuleFilter.state[key]:false};Drupal.ModuleFilter.setState=function(key,value){var existing=Drupal.ModuleFilter.getState(key);if(existing!=value){Drupal.ModuleFilter.state[key]=value;var query=[];for(var i in Drupal.ModuleFilter.state)query.push(i+"="+Drupal.ModuleFilter.state[i]);$.cookie("DrupalModuleFilter",query.join("&"),
{expires:7,path:"/"})}};Drupal.ModuleFilter.Filter=function(element,selector,options){var self=this;this.element=element;this.text=$(this.element).val();this.settings=Drupal.settings.moduleFilter;this.selector=selector;this.options=$.extend({delay:500,striping:false,childSelector:null,empty:Drupal.t("No results"),rules:new Array},options);if(this.options.wrapper==undefined)this.options.wrapper=$(self.selector).parent();this.element.after('<div class="module-filter-clear"><a href="#" class="js-hide">'+
Drupal.t("clear")+"</a></div>");if(this.text)$(".module-filter-clear a",this.element.parent()).removeClass("js-hide");$(".module-filter-clear a",this.element.parent()).click(function(){self.element.val("");self.text="";delete self.queries;self.applyFilter();self.element.focus();$(this).addClass("js-hide");return false});this.updateQueries=function(){var queryStrings=Drupal.ModuleFilter.explode(self.text);self.queries=new Array;for(var i in queryStrings){var query={operator:"text",string:queryStrings[i]};
if(self.operators!=undefined)if(queryStrings[i].indexOf(":")>0){var args=queryStrings[i].split(":",2);var operator=args.shift();if(self.operators[operator]!=undefined){query.operator=operator;query.string=args.shift()}}query.string=query.string.toLowerCase();self.queries.push(query)}if(self.queries.length<=0)self.queries.push({operator:"text",string:""})};this.applyFilter=function(){self.results=new Array;self.updateQueries();if(self.index==undefined)self.buildIndex();self.element.trigger("moduleFilter:start");
$.each(self.index,function(key,item){var $item=item.element;for(var i in self.queries){var query=self.queries[i];if(query.operator=="text"){if(item.text.indexOf(query.string)<0)continue}else{var func=self.operators[query.operator];if(!func(query.string,self,item))continue}var rulesResult=self.processRules(item);if(rulesResult!==false)return true}$item.addClass("js-hide")});self.element.trigger("moduleFilter:finish",{results:self.results});if(self.options.striping)self.stripe();if(self.results.length>
0)self.options.wrapper.find(".module-filter-no-results").remove();else if(!self.options.wrapper.find(".module-filter-no-results").length)self.options.wrapper.append($('<p class="module-filter-no-results"/>').text(self.options.empty))};self.element.keyup(function(e){switch(e.which){case 13:if(self.timeOut)clearTimeout(self.timeOut);self.applyFilter();break;default:if(self.text!=$(this).val()){if(self.timeOut)clearTimeout(self.timeOut);self.text=$(this).val();if(self.text)self.element.parent().find(".module-filter-clear a").removeClass("js-hide");
else self.element.parent().find(".module-filter-clear a").addClass("js-hide");self.element.trigger("moduleFilter:keyup");self.timeOut=setTimeout(self.applyFilter,self.options.delay)}break}});self.element.keypress(function(e){if(e.which==13)e.preventDefault()})};Drupal.ModuleFilter.Filter.prototype.buildIndex=function(){var self=this;var index=new Array;$(this.selector).each(function(i){var text=self.options.childSelector?$(self.options.childSelector,this).text():$(this).text();var item={key:i,element:$(this),
text:text.toLowerCase()};for(var j in self.options.buildIndex){var func=self.options.buildIndex[j];item=$.extend(func(self,item),item)}$(this).data("indexKey",i);index.push(item);delete item});this.index=index};Drupal.ModuleFilter.Filter.prototype.processRules=function(item){var self=this;var $item=item.element;var rulesResult=true;if(self.options.rules.length>0)for(var i in self.options.rules){var func=self.options.rules[i];rulesResult=func(self,item);if(rulesResult===false)break}if(rulesResult!==
false){$item.removeClass("js-hide");self.results.push(item)}return rulesResult};Drupal.ModuleFilter.Filter.prototype.stripe=function(){var self=this;var flip={even:"odd",odd:"even"};var stripe="odd";$.each(self.index,function(key,item){if(!item.element.hasClass("js-hide")){item.element.removeClass("odd even").addClass(stripe);stripe=flip[stripe]}})};$.fn.moduleFilter=function(selector,options){var filterInput=this;filterInput.parents(".module-filter-inputs-wrapper").show();if(Drupal.settings.moduleFilter.setFocus)filterInput.focus();
filterInput.data("moduleFilter",new Drupal.ModuleFilter.Filter(this,selector,options))}})(jQuery);;
(function($){Drupal.behaviors.moduleFilter={attach:function(context){$("#system-modules td.description").once("description",function(){$(".inner.expand",$(this)).click(function(){$(this).toggleClass("expanded")})});$(".module-filter-inputs-wrapper",context).once("module-filter",function(){var filterInput=$('input[name="module_filter[name]"]',context);var selector="#system-modules table tbody tr";if(Drupal.settings.moduleFilter.tabs)selector+=".module";filterInput.moduleFilter(selector,{wrapper:$("#module-filter-modules"),
delay:500,striping:true,childSelector:"td:nth(1)",rules:[function(moduleFilter,item){if(!item.unavailable){if(moduleFilter.options.showEnabled)if(item.status&&!item.disabled)return true;if(moduleFilter.options.showDisabled)if(!item.status&&!item.disabled)return true;if(moduleFilter.options.showRequired)if(item.status&&item.disabled)return true}if(moduleFilter.options.showUnavailable)if(item.unavailable||!item.status&&item.disabled)return true;return false}],buildIndex:[function(moduleFilter,item){var $checkbox=
$("td.checkbox :checkbox",item.element);if($checkbox.size()>0){item.status=$checkbox.is(":checked");item.disabled=$checkbox.is(":disabled")}else{item.status=false;item.disabled=true;item.unavailable=true}return item}],showEnabled:$("#edit-module-filter-show-enabled").is(":checked"),showDisabled:$("#edit-module-filter-show-disabled").is(":checked"),showRequired:$("#edit-module-filter-show-required").is(":checked"),showUnavailable:$("#edit-module-filter-show-unavailable").is(":checked")});var moduleFilter=
filterInput.data("moduleFilter");moduleFilter.operators={description:function(string,moduleFilter,item){if(item.description==undefined){var description=$(".description",item.element).clone();$(".admin-requirements",description).remove();$(".admin-operations",description).remove();item.description=description.text().toLowerCase()}if(item.description.indexOf(string)>=0)return true},requiredBy:function(string,moduleFilter,item){if(item.requiredBy==undefined){var requirements=Drupal.ModuleFilter.getRequirements(item.element);
item.requires=requirements.requires;item.requiredBy=requirements.requiredBy}for(var i in item.requiredBy)if(item.requiredBy[i].indexOf(string)>=0)return true},requires:function(string,moduleFilter,item){if(item.requires==undefined){var requirements=Drupal.ModuleFilter.getRequirements(item.element);item.requires=requirements.requires;item.requiredBy=requirements.requiredBy}for(var i in item.requires)if(item.requires[i].indexOf(string)>=0)return true}};$("#edit-module-filter-show-enabled",context).change(function(){moduleFilter.options.showEnabled=
$(this).is(":checked");moduleFilter.applyFilter()});$("#edit-module-filter-show-disabled",context).change(function(){moduleFilter.options.showDisabled=$(this).is(":checked");moduleFilter.applyFilter()});$("#edit-module-filter-show-required",context).change(function(){moduleFilter.options.showRequired=$(this).is(":checked");moduleFilter.applyFilter()});$("#edit-module-filter-show-unavailable",context).change(function(){moduleFilter.options.showUnavailable=$(this).is(":checked");moduleFilter.applyFilter()});
if(!Drupal.settings.moduleFilter.tabs){moduleFilter.element.bind("moduleFilter:start",function(){$("#system-modules fieldset").show()});moduleFilter.element.bind("moduleFilter:finish",function(e,data){$("#system-modules fieldset").each(function(i){$fieldset=$(this);if($("tbody tr",$fieldset).filter(":visible").length==0)$fieldset.hide()})});moduleFilter.applyFilter()}})}};Drupal.ModuleFilter.getRequirements=function(element){var requires=new Array;var requiredBy=new Array;$(".admin-requirements",
element).each(function(){var text=$(this).text();if(text.substr(0,9)=="Requires:"){requiresString=text.substr(9);requires=requiresString.replace(/\([a-z]*\)/g,"").split(",")}else if(text.substr(0,12)=="Required by:"){requiredByString=text.substr(12);requiredBy=requiredByString.replace(/\([a-z]*\)/g,"").split(",")}});for(var i in requires)requires[i]=$.trim(requires[i].toLowerCase());for(var i in requiredBy)requiredBy[i]=$.trim(requiredBy[i].toLowerCase());return{requires:requires,requiredBy:requiredBy}}})(jQuery);;

(function ($) {

Drupal.ModuleFilter.tabs = {};
Drupal.ModuleFilter.enabling = {};
Drupal.ModuleFilter.disabling = {};

Drupal.ModuleFilter.jQueryIsNewer = function() {
  if (Drupal.ModuleFilter.jQueryNewer == undefined) {
    var v1parts = $.fn.jquery.split('.');
    var v2parts = new Array('1', '4', '4');

    for (var i = 0; i < v1parts.length; ++i) {
      if (v2parts.length == i) {
        Drupal.ModuleFilter.jQueryNewer = true;
        return Drupal.ModuleFilter.jQueryNewer;
      }

      if (v1parts[i] == v2parts[i]) {
        continue;
      }
      else if (v1parts[i] > v2parts[i]) {
        Drupal.ModuleFilter.jQueryNewer = true;
        return Drupal.ModuleFilter.jQueryNewer;
      }
      else {
        Drupal.ModuleFilter.jQueryNewer = false;
        return Drupal.ModuleFilter.jQueryNewer;
      }
    }

    if (v1parts.length != v2parts.length) {
      Drupal.ModuleFilter.jQueryNewer = false;
      return Drupal.ModuleFilter.jQueryNewer;
    }

    Drupal.ModuleFilter.jQueryNewer = false;
  }
  return Drupal.ModuleFilter.jQueryNewer;
};

Drupal.behaviors.moduleFilterTabs = {
  attach: function(context) {
    if (Drupal.settings.moduleFilter.tabs) {
      $('#module-filter-wrapper table:not(.sticky-header)', context).once('module-filter-tabs', function() {
        var $modules = $('#module-filter-modules');
        var moduleFilter = $('input[name="module_filter[name]"]').data('moduleFilter');
        var table = $(this);

        $('thead', table).show();

        // Remove package header rows.
        $('tr.admin-package-header', table).remove();

        var $tabsWrapper = $('<div id="module-filter-tabs"></div>');

        // Build tabs from package title rows.
        var tabs = '<ul>';
        for (var i in Drupal.settings.moduleFilter.packageIDs) {
          var id = Drupal.settings.moduleFilter.packageIDs[i];

          var name = id;
          var tabClass = 'project-tab';
          var title = null;
          var summary = (Drupal.settings.moduleFilter.countEnabled) ? '<span class="count">' + Drupal.ModuleFilter.countSummary(id) + '</span>' : '';

          switch (id) {
            case 'all':
              name = Drupal.t('All');
              break;
            case 'new':
              name = Drupal.t('New');
              title = Drupal.t('Modules installed within the last week.');
              if (Drupal.settings.moduleFilter.enabledCounts['new'].total == 0) {
                tabClass += ' disabled';
                summary += '<span>' + Drupal.t('No modules added within the last week.') + '</span>';
              }
              break;
            case 'recent':
              name = Drupal.t('Recent');
              title = Drupal.t('Modules enabled/disabled within the last week.');
              if (Drupal.settings.moduleFilter.enabledCounts['recent'].total == 0) {
                tabClass += ' disabled';
                summary += '<span>' + Drupal.t('No modules were enabled or disabled within the last week.') + '</span>';
              }
              break;
            default: 
              var $row = $('#' + id + '-package');
              name = $.trim($row.text());
              $row.remove();
              break;
          }

          tabs += '<li id="' + id + '-tab" class="' + tabClass + '"><a href="#' + id + '" class="overlay-exclude"' + (title ? ' title="' + title + '"' : '') + '><strong>' + name + '</strong><span class="summary">' + summary + '</span></a></li>';
        }
        tabs += '</ul>';
        $tabsWrapper.append(tabs);
        $modules.before($tabsWrapper);

        // Index tabs.
        $('#module-filter-tabs li').each(function() {
          var $tab = $(this);
          var id = $tab.attr('id');
          Drupal.ModuleFilter.tabs[id] = new Drupal.ModuleFilter.Tab($tab, id);
        });

        $('tbody td.checkbox input', $modules).change(function() {
          var $checkbox = $(this);
          var key = $checkbox.parents('tr').data('indexKey');

          moduleFilter.index[key].status = $checkbox.is(':checked');

          if (Drupal.settings.moduleFilter.visualAid) {
            var type = ($checkbox.is(':checked')) ? 'enable' : 'disable';
            Drupal.ModuleFilter.updateVisualAid(type, $checkbox.parents('tr'));
          }
        });

        // Sort rows.
        var rows = $('tbody tr.module', table).get();
        rows.sort(function(a, b) {
          var compA = $('td:nth(1)', a).text().toLowerCase();
          var compB = $('td:nth(1)', b).text().toLowerCase();
          return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
        });
        $.each(rows, function(idx, itm) { table.append(itm); });

        // Re-stripe rows.
        $('tr.module', table)
          .removeClass('odd even')
          .filter(':odd').addClass('even').end()
          .filter(':even').addClass('odd');

        moduleFilter.adjustHeight();

        moduleFilter.element.bind('moduleFilter:start', function() {
          moduleFilter.tabResults = {
            'all-tab': { items: {}, count: 0 },
            'recent-tab': { items: {}, count: 0 },
            'new-tab': { items: {}, count: 0 }
          };

          // Empty result info from tabs.
          for (var i in Drupal.ModuleFilter.tabs) {
            if (Drupal.ModuleFilter.tabs[i].resultInfo != undefined) {
              Drupal.ModuleFilter.tabs[i].resultInfo.empty();
            }
          }
        });

        moduleFilter.element.bind('moduleFilter:finish', function(e, data) {
          $.each(moduleFilter.index, function(key, item) {
            if (!item.element.hasClass('js-hide')) {
              var id = Drupal.ModuleFilter.getTabID(item.element);

              if (moduleFilter.tabResults[id] == undefined) {
                moduleFilter.tabResults[id] = { items: {}, count: 0 };
              }
              if (moduleFilter.tabResults[id].items[item.key] == undefined) {
                // All tab
                moduleFilter.tabResults['all-tab'].count++;

                // Recent tab
                if (item.element.hasClass('recent-module')) {
                  moduleFilter.tabResults['recent-tab'].count++;
                }

                // New tab
                if (item.element.hasClass('new-module')) {
                  moduleFilter.tabResults['new-tab'].count++;
                }

                moduleFilter.tabResults[id].items[item.key] = item;
                moduleFilter.tabResults[id].count++;
              }

              if (Drupal.ModuleFilter.activeTab != undefined && Drupal.ModuleFilter.activeTab.id != 'all-tab') {
                if ((Drupal.ModuleFilter.activeTab.id == 'recent-tab' && !item.element.hasClass('recent-module')) || (Drupal.ModuleFilter.activeTab.id == 'new-tab' && !item.element.hasClass('new-module')) || (Drupal.ModuleFilter.activeTab.id != 'recent-tab' && Drupal.ModuleFilter.activeTab.id != 'new-tab' && id != Drupal.ModuleFilter.activeTab.id)) {
                  // The item is not in the active tab, so hide it.
                  item.element.addClass('js-hide');
                }
              }
            }
          });

          if (Drupal.settings.moduleFilter.visualAid) {
            if (moduleFilter.text) {
              // Add result info to tabs.
              for (var id in moduleFilter.tabResults) {
                var tab = Drupal.ModuleFilter.tabs[id];

                if (tab.resultInfo == undefined) {
                  var resultInfo = '<span class="result-info"></span>'
                  $('a', tab.element).prepend(resultInfo);
                  tab.resultInfo = $('span.result-info', tab.element);
                }

                tab.resultInfo.append(moduleFilter.tabResults[id].count);
              }

              if (Drupal.settings.moduleFilter.hideEmptyTabs) {
                for (var id in Drupal.ModuleFilter.tabs) {
                  if (moduleFilter.tabResults[id] != undefined) {
                    Drupal.ModuleFilter.tabs[id].element.show();
                  }
                  else if (Drupal.ModuleFilter.activeTab == undefined || Drupal.ModuleFilter.activeTab.id != id) {
                    Drupal.ModuleFilter.tabs[id].element.hide();
                  }
                }
              }
            }
            else {
              // Make sure all tabs are visible.
              if (Drupal.settings.moduleFilter.hideEmptyTabs) {
                $('#module-filter-tabs li').show();
              }
            }
          }

          if ((Drupal.ModuleFilter.activeTab != undefined && (moduleFilter.tabResults[Drupal.ModuleFilter.activeTab.id] == undefined || moduleFilter.tabResults[Drupal.ModuleFilter.activeTab.id].count <= 0))) {
            // The current tab contains no results.
            moduleFilter.results = 0;
          }

          moduleFilter.adjustHeight();
        });

        if (Drupal.settings.moduleFilter.useURLFragment) {
          $(window).bind('hashchange.module-filter', $.proxy(Drupal.ModuleFilter, 'eventHandlerOperateByURLFragment')).triggerHandler('hashchange.module-filter');
        }
        else {
          Drupal.ModuleFilter.selectTab();
        }

        if (Drupal.settings.moduleFilter.useSwitch) {
          $('td.checkbox div.form-item').hide();
          $('td.checkbox').each(function(i) {
            var $cell = $(this);
            var $checkbox = $(':checkbox', $cell);
            var $switch = $('.toggle-enable', $cell);
            $switch.removeClass('js-hide').click(function() {
              if (!$(this).hasClass('disabled')) {
                if (Drupal.ModuleFilter.jQueryIsNewer()) {
                  $checkbox.click();
                }
                else {
                  $checkbox.click().change();
                }
              }
            });
            $checkbox.click(function() {
              if (!$switch.hasClass('disabled')) {
                $switch.toggleClass('off');
              }
            });
          });
        }

        var $tabs = $('#module-filter-tabs');

        function getParentTopOffset($obj, offset) {
          var $parent = $obj.offsetParent();
          if ($obj[0] != $parent[0]) {
            offset += $parent.position().top;
            return getParentTopOffset($parent, offset);
          }
          return offset;
        }

        var tabsTopOffset = null;
        function getParentsTopOffset() {
          if (tabsTopOffset === null) {
            tabsTopOffset = getParentTopOffset($tabs.parent(), 0);
          }
          return tabsTopOffset;
        }

        function viewportTop() {
          var top = $(window).scrollTop();
          return top;
        }

        function viewportBottom() {
          var top = $(window).scrollTop();
          var bottom = top + $(window).height();

          bottom -= $('#page-actions').height();

          return bottom;
        }

        function fixToTop(top) {
          if ($tabs.hasClass('bottom-fixed')) {
            $tabs.css({
              'position': 'absolute',
              'top': $tabs.position().top - getParentsTopOffset(),
              'bottom': 'auto'
            });
            $tabs.removeClass('bottom-fixed');
          }

          if (($tabs.css('position') == 'absolute' && $tabs.offset().top - top >= 0) || ($tabs.css('position') != 'absolute' && $tabs.offset().top - top <= 0)) {
            $tabs.addClass('top-fixed');
            $tabs.attr('style', '');
          }
        }

        function fixToBottom(bottom) {
          if ($tabs.hasClass('top-fixed')) {
            $tabs.css({
              'position': 'absolute',
              'top': $tabs.position().top - getParentsTopOffset(),
              'bottom': 'auto'
            });
            $tabs.removeClass('top-fixed');
          }

          if ($tabs.offset().top + $tabs.height() - bottom <= 0) {
            $tabs.addClass('bottom-fixed');
            var style = '';
            var pageActionsHeight = $('#page-actions').height();
            if (pageActionsHeight > 0) {
              style = 'bottom: ' + pageActionsHeight + 'px';
            }
            else if (Drupal.settings.moduleFilter.dynamicPosition) {
              // style = 'bottom: ' + $('#module-filter-submit', $tabs).height() + 'px';
            }
            $tabs.attr('style', style);
          }
        }

        var lastTop = 0;
        $(window).scroll(function() {
          var top = viewportTop();
          var bottom = viewportBottom();

          if ($modules.offset().top >= top) {
            $tabs.removeClass('top-fixed').attr('style', '');
          }
          else {
            if (top > lastTop) { // Downward scroll.
              if ($tabs.height() > bottom - top) {
                fixToBottom(bottom);
              }
              else {
                fixToTop(top);
              }
            }
            else { // Upward scroll.
              fixToTop(top);
            }
          }
          lastTop = top;
        });

        moduleFilter.adjustHeight();
      });
    }
  }
};

Drupal.ModuleFilter.Tab = function(element, id) {
  var self = this;

  this.id = id;
  this.hash = id.substring(0, id.length - 4);
  this.element = element;

  $('a', this.element).click(function() {
    if (!Drupal.settings.moduleFilter.useURLFragment) {
      var hash = (!self.element.hasClass('selected')) ? self.hash : 'all';
      Drupal.ModuleFilter.selectTab(hash);
      return false;
    }

    if (self.element.hasClass('selected')) {
      // Clear the active tab.
      window.location.hash = 'all';
      return false;
    }
  });

  $('tr.' + this.id, $('#system-modules')).hover(
    function() {
      self.element.addClass('suggest');
    },
    function() {
      self.element.removeClass('suggest');
    }
  );
};

Drupal.ModuleFilter.selectTab = function(hash) {
  if (!hash || Drupal.ModuleFilter.tabs[hash + '-tab'] == undefined || Drupal.settings.moduleFilter.enabledCounts[hash].total == 0) {
    if (Drupal.settings.moduleFilter.rememberActiveTab) {
      var activeTab = Drupal.ModuleFilter.getState('activeTab');
      if (activeTab && Drupal.ModuleFilter.tabs[activeTab + '-tab'] != undefined) {
        hash = activeTab;
      }
    }

    if (!hash) {
      hash = 'all';
    }
  }

  if (Drupal.ModuleFilter.activeTab != undefined) {
    Drupal.ModuleFilter.activeTab.element.removeClass('selected');
  }

  Drupal.ModuleFilter.activeTab = Drupal.ModuleFilter.tabs[hash + '-tab'];
  Drupal.ModuleFilter.activeTab.element.addClass('selected');

  var moduleFilter = $('input[name="module_filter[name]"]').data('moduleFilter');
  var filter = moduleFilter.applyFilter();

  if (!Drupal.ModuleFilter.modulesTop) {
    Drupal.ModuleFilter.modulesTop = $('#module-filter-modules').offset().top;
  }
  else {
    // Calculate header offset; this is important in case the site is using
    // admin_menu module which has fixed positioning and is on top of everything
    // else.
    var headerOffset = Drupal.settings.tableHeaderOffset ? eval(Drupal.settings.tableHeaderOffset + '()') : 0;
    // Scroll back to top of #module-filter-modules.
    $('html, body').animate({
      scrollTop: Drupal.ModuleFilter.modulesTop - headerOffset
    }, 500);
    // $('html, body').scrollTop(Drupal.ModuleFilter.modulesTop);
  }

  Drupal.ModuleFilter.setState('activeTab', hash);
};

Drupal.ModuleFilter.eventHandlerOperateByURLFragment = function(event) {
  var hash = $.param.fragment();
  Drupal.ModuleFilter.selectTab(hash);
};

Drupal.ModuleFilter.countSummary = function(id) {
  return Drupal.t('@enabled of @total', { '@enabled': Drupal.settings.moduleFilter.enabledCounts[id].enabled, '@total': Drupal.settings.moduleFilter.enabledCounts[id].total });
};

Drupal.ModuleFilter.Tab.prototype.updateEnabling = function(name, remove) {
  this.enabling = this.enabling || {};
  if (!remove) {
    this.enabling[name] = name;
  }
  else {
    delete this.enabling[name];
  }
};

Drupal.ModuleFilter.Tab.prototype.updateDisabling = function(name, remove) {
  this.disabling = this.disabling || {};
  if (!remove) {
    this.disabling[name] = name;
  }
  else {
    delete this.disabling[name];
  }
};

Drupal.ModuleFilter.Tab.prototype.updateVisualAid = function() {
  var visualAid = '';
  var enabling = new Array();
  var disabling = new Array();

  if (this.enabling != undefined) {
    for (var i in this.enabling) {
      enabling.push(this.enabling[i]);
    }
    if (enabling.length > 0) {
      enabling.sort();
      visualAid += '<span class="enabling">+' + enabling.join('</span>, <span class="enabling">') + '</span>';
    }
  }
  if (this.disabling != undefined) {
    for (var i in this.disabling) {
      disabling.push(this.disabling[i]);
    }
    if (disabling.length > 0) {
      disabling.sort();
      if (enabling.length > 0) {
        visualAid += '<br />';
      }
      visualAid += '<span class="disabling">-' + disabling.join('</span>, <span class="disabling">') + '</span>';
    }
  }

  if (this.visualAid == undefined) {
    $('a span.summary', this.element).append('<span class="visual-aid"></span>');
    this.visualAid = $('span.visual-aid', this.element);
  }

  this.visualAid.empty().append(visualAid);
};

Drupal.ModuleFilter.getTabID = function($row) {
  var id = $row.data('moduleFilterTabID');
  if (!id) {
    // Find the tab ID.
    var classes = $row.attr('class').split(' ');
    for (var i in classes) {
      if (Drupal.ModuleFilter.tabs[classes[i]] != undefined) {
        id = classes[i];
        break;
      }
    }
    $row.data('moduleFilterTabID', id);
  }
  return id;
};

Drupal.ModuleFilter.updateVisualAid = function(type, $row) {
  var id = Drupal.ModuleFilter.getTabID($row);

  if (!id) {
    return false;
  }

  var tab = Drupal.ModuleFilter.tabs[id];
  var name = $('td:nth(1) strong', $row).text();
  switch (type) {
    case 'enable':
      if (Drupal.ModuleFilter.disabling[id + name] != undefined) {
        delete Drupal.ModuleFilter.disabling[id + name];
        tab.updateDisabling(name, true);
        $row.removeClass('disabling');
      }
      else {
        Drupal.ModuleFilter.enabling[id + name] = name;
        tab.updateEnabling(name);
        $row.addClass('enabling');
      }
      break;
    case 'disable':
      if (Drupal.ModuleFilter.enabling[id + name] != undefined) {
        delete Drupal.ModuleFilter.enabling[id + name];
        tab.updateEnabling(name, true);
        $row.removeClass('enabling');
      }
      else {
        Drupal.ModuleFilter.disabling[id + name] = name;
        tab.updateDisabling(name);
        $row.addClass('disabling');
      }
      break;
  }

  tab.updateVisualAid();
};

Drupal.ModuleFilter.Filter.prototype.adjustHeight = function() {
  // Hack for adjusting the height of the modules section.
  var minHeight = $('#module-filter-tabs ul').height() + 10;
  minHeight += $('#module-filter-tabs #module-filter-submit').height();
  $('#module-filter-modules').css('min-height', minHeight);
  this.element.trigger('moduleFilter:adjustHeight');
}

})(jQuery);
;
(function($){Drupal.behaviors.moduleFilterDynamicPosition={attach:function(context){var $window=$(window);$("#module-filter-wrapper",context).once("dynamic-position",function(){$("#module-filter-tabs").append($("#module-filter-submit"));var positionSubmit=function(){var $tabs=$("#module-filter-tabs");var $submit=$("#module-filter-submit",$tabs);var bottom=$tabs.offset().top+$tabs.outerHeight();if($submit.hasClass("fixed-bottom"))bottom+=$submit.height();if(bottom>=$window.height()+$window.scrollTop()){$submit.addClass("fixed fixed-bottom");
$tabs.css("padding-bottom",$submit.height())}else{$submit.removeClass("fixed fixed-bottom");$tabs.css("padding-bottom",0)}if($submit.hasClass("fixed-bottom")||$submit.hasClass("fixed-top")){var left=$tabs.offset().left-$window.scrollLeft();if(left!=$submit.offset().left-$window.scrollLeft())$submit.css("left",left)}};$window.scroll(positionSubmit);$window.resize(positionSubmit);var moduleFilter=$('input[name="module_filter[name]"]').data("moduleFilter");moduleFilter.element.bind("moduleFilter:adjustHeight",
positionSubmit);moduleFilter.adjustHeight()})}}})(jQuery);;
(function($){Drupal.behaviors.tableHeader={attach:function(context,settings){if(!$.support.positionFixed)return;$("table.sticky-enabled",context).once("tableheader",function(){$(this).data("drupal-tableheader",new Drupal.tableHeader(this))})}};Drupal.tableHeader=function(table){var self=this;this.originalTable=$(table);this.originalHeader=$(table).children("thead");this.originalHeaderCells=this.originalHeader.find("> tr > th");this.displayWeight=null;this.originalTable.bind("columnschange",function(e,
display){self.widthCalculated=self.displayWeight!==null&&self.displayWeight===display;self.displayWeight=display});this.stickyTable=$('<table class="sticky-header"/>').insertBefore(this.originalTable).css({position:"fixed",top:"0px"});this.stickyHeader=this.originalHeader.clone(true).hide().appendTo(this.stickyTable);this.stickyHeaderCells=this.stickyHeader.find("> tr > th");this.originalTable.addClass("sticky-table");$(window).bind("scroll.drupal-tableheader",$.proxy(this,"eventhandlerRecalculateStickyHeader")).bind("resize.drupal-tableheader",
{calculateWidth:true},$.proxy(this,"eventhandlerRecalculateStickyHeader")).bind("drupalDisplaceAnchor.drupal-tableheader",function(){window.scrollBy(0,-self.stickyTable.outerHeight())}).bind("drupalDisplaceFocus.drupal-tableheader",function(event){if(self.stickyVisible&&event.clientY<self.stickyOffsetTop+self.stickyTable.outerHeight()&&event.$target.closest("sticky-header").length===0)window.scrollBy(0,-self.stickyTable.outerHeight())}).triggerHandler("resize.drupal-tableheader");this.stickyHeader.show()};
Drupal.tableHeader.prototype.eventhandlerRecalculateStickyHeader=function(event){var self=this;var calculateWidth=event.data&&event.data.calculateWidth;this.stickyOffsetTop=Drupal.settings.tableHeaderOffset?eval(Drupal.settings.tableHeaderOffset+"()"):0;this.stickyTable.css("top",this.stickyOffsetTop+"px");var viewHeight=document.documentElement.scrollHeight||document.body.scrollHeight;if(calculateWidth||this.viewHeight!==viewHeight){this.viewHeight=viewHeight;this.vPosition=this.originalTable.offset().top-
4-this.stickyOffsetTop;this.hPosition=this.originalTable.offset().left;this.vLength=this.originalTable[0].clientHeight-100;calculateWidth=true}var hScroll=document.documentElement.scrollLeft||document.body.scrollLeft;var vOffset=(document.documentElement.scrollTop||document.body.scrollTop)-this.vPosition;this.stickyVisible=vOffset>0&&vOffset<this.vLength;this.stickyTable.css({left:-hScroll+this.hPosition+"px",visibility:this.stickyVisible?"visible":"hidden"});if(this.stickyVisible&&(calculateWidth||
!this.widthCalculated)){this.widthCalculated=true;var $that=null;var $stickyCell=null;var display=null;var cellWidth=null;for(var i=0,il=this.originalHeaderCells.length;i<il;i+=1){$that=$(this.originalHeaderCells[i]);$stickyCell=this.stickyHeaderCells.eq($that.index());display=$that.css("display");if(display!=="none"){cellWidth=$that.css("width");if(cellWidth==="auto")cellWidth=$that[0].clientWidth+"px";$stickyCell.css({"width":cellWidth,"display":display})}else $stickyCell.css("display","none")}this.stickyTable.css("width",
this.originalTable.outerWidth())}}})(jQuery);;
