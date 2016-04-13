(function($){Drupal.contextualLinks=Drupal.contextualLinks||{};Drupal.behaviors.contextualLinks={attach:function(context){$("div.contextual-links-wrapper",context).once("contextual-links",function(){var $wrapper=$(this);var $region=$wrapper.closest(".contextual-links-region");var $links=$wrapper.find("ul.contextual-links");var $trigger=$('<a class="contextual-links-trigger" href="#" />').text(Drupal.t("Configure")).click(function(){$links.stop(true,true).slideToggle(100);$wrapper.toggleClass("contextual-links-active");
return false});$trigger.add($links).hover(function(){$region.addClass("contextual-links-region-active")},function(){$region.removeClass("contextual-links-region-active")});$region.bind("mouseleave click",Drupal.contextualLinks.mouseleave);$region.hover(function(){$trigger.addClass("contextual-links-trigger-active")},function(){$trigger.removeClass("contextual-links-trigger-active")});$wrapper.prepend($trigger)})}};Drupal.contextualLinks.mouseleave=function(){$(this).find(".contextual-links-active").removeClass("contextual-links-active").find("ul.contextual-links").hide()}})(jQuery);;
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date;f.setTime(f.getTime()+m.expires*24*60*60*1E3)}else f=m.expires;e="; expires="+f.toUTCString()}var l=m.path?"; path="+m.path:"";var g=m.domain?"; domain="+m.domain:"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&
document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==b+"="){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};;
(function(b){function q(){if(b.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");if(window.console&&window.console.log)window.console.log(a);else window.opera&&window.opera.postError&&window.opera.postError(a)}}b.fn.ajaxSubmit=function(a){function f(){function t(){var o=i.attr("target"),m=i.attr("action");l.setAttribute("target",u);l.getAttribute("method")!="POST"&&l.setAttribute("method","POST");l.getAttribute("action")!=e.url&&l.setAttribute("action",e.url);e.skipEncodingOverride||
i.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});e.timeout&&setTimeout(function(){F=true;s()},e.timeout);var v=[];try{if(e.extraData)for(var w in e.extraData)v.push(b('<input type="hidden" name="'+w+'" value="'+e.extraData[w]+'" />').appendTo(l)[0]);r.appendTo("body");r.data("form-plugin-onload",s);l.submit()}finally{l.setAttribute("action",m);o?l.setAttribute("target",o):i.removeAttr("target");b(v).remove()}}function s(){if(!G){r.removeData("form-plugin-onload");var o=true;
try{if(F)throw"timeout";p=x.contentWindow?x.contentWindow.document:x.contentDocument?x.contentDocument:x.document;var m=e.dataType=="xml"||p.XMLDocument||b.isXMLDoc(p);q("isXml="+m);if(!m&&window.opera&&(p.body==null||p.body.innerHTML==""))if(--K){q("requeing onLoad callback, DOM not available");setTimeout(s,250);return}G=true;j.responseText=p.documentElement?p.documentElement.innerHTML:null;j.responseXML=p.XMLDocument?p.XMLDocument:p;j.getResponseHeader=function(L){return{"content-type":e.dataType}[L]};
var v=/(json|script)/.test(e.dataType);if(v||e.textarea){var w=p.getElementsByTagName("textarea")[0];if(w)j.responseText=w.value;else if(v){var H=p.getElementsByTagName("pre")[0],I=p.getElementsByTagName("body")[0];if(H)j.responseText=H.textContent;else if(I)j.responseText=I.innerHTML}}else if(e.dataType=="xml"&&!j.responseXML&&j.responseText!=null)j.responseXML=C(j.responseText);J=b.httpData(j,e.dataType)}catch(D){q("error caught:",D);o=false;j.error=D;b.handleError(e,j,"error",D)}if(j.aborted){q("upload aborted");
o=false}if(o){e.success.call(e.context,J,"success",j);y&&b.event.trigger("ajaxSuccess",[j,e])}y&&b.event.trigger("ajaxComplete",[j,e]);y&&!--b.active&&b.event.trigger("ajaxStop");if(e.complete)e.complete.call(e.context,j,o?"success":"error");setTimeout(function(){r.removeData("form-plugin-onload");r.remove();j.responseXML=null},100)}}function C(o,m){if(window.ActiveXObject){m=new ActiveXObject("Microsoft.XMLDOM");m.async="false";m.loadXML(o)}else m=(new DOMParser).parseFromString(o,"text/xml");return m&&
m.documentElement&&m.documentElement.tagName!="parsererror"?m:null}var l=i[0];if(b(":input[name=submit],:input[id=submit]",l).length)alert('Error: Form elements must not have name or id of "submit".');else{var e=b.extend(true,{},b.ajaxSettings,a);e.context=e.context||e;var u="jqFormIO"+(new Date).getTime(),E="_"+u;window[E]=function(){var o=r.data("form-plugin-onload");if(o){o();window[E]=undefined;try{delete window[E]}catch(m){}}};var r=b('<iframe id="'+u+'" name="'+u+'" src="'+e.iframeSrc+'" onload="window[\'_\'+this.id]()" />'),
x=r[0];r.css({position:"absolute",top:"-1000px",left:"-1000px"});var j={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(){this.aborted=1;r.attr("src",e.iframeSrc)}},y=e.global;y&&!b.active++&&b.event.trigger("ajaxStart");y&&b.event.trigger("ajaxSend",[j,e]);if(e.beforeSend&&e.beforeSend.call(e.context,j,e)===false)e.global&&b.active--;else if(!j.aborted){var G=false,
F=0,z=l.clk;if(z){var A=z.name;if(A&&!z.disabled){e.extraData=e.extraData||{};e.extraData[A]=z.value;if(z.type=="image"){e.extraData[A+".x"]=l.clk_x;e.extraData[A+".y"]=l.clk_y}}}e.forceSync?t():setTimeout(t,10);var J,p,K=50}}}if(!this.length){q("ajaxSubmit: skipping submit process - no element selected");return this}if(typeof a=="function")a={success:a};var d=this.attr("action");if(d=typeof d==="string"?b.trim(d):"")d=(d.match(/^([^#]+)/)||[])[1];d=d||window.location.href||"";a=b.extend(true,{url:d,
type:this.attr("method")||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);d={};this.trigger("form-pre-serialize",[this,a,d]);if(d.veto){q("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(a.beforeSerialize&&a.beforeSerialize(this,a)===false){q("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var c,h,g=this.formToArray(a.semantic);if(a.data){a.extraData=a.data;for(c in a.data)if(a.data[c]instanceof Array)for(var k in a.data[c])g.push({name:c,
value:a.data[c][k]});else{h=a.data[c];h=b.isFunction(h)?h():h;g.push({name:c,value:h})}}if(a.beforeSubmit&&a.beforeSubmit(g,this,a)===false){q("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[g,this,a,d]);if(d.veto){q("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}c=b.param(g);if(a.type.toUpperCase()=="GET"){a.url+=(a.url.indexOf("?")>=0?"&":"?")+c;a.data=null}else a.data=c;var i=this,n=[];a.resetForm&&n.push(function(){i.resetForm()});
a.clearForm&&n.push(function(){i.clearForm()});if(!a.dataType&&a.target){var B=a.success||function(){};n.push(function(t){var s=a.replaceTarget?"replaceWith":"html";b(a.target)[s](t).each(B,arguments)})}else a.success&&n.push(a.success);a.success=function(t,s,C){for(var l=a.context||a,e=0,u=n.length;e<u;e++)n[e].apply(l,[t,s,C||i,i])};c=b("input:file",this).length>0;k=i.attr("enctype")=="multipart/form-data"||i.attr("encoding")=="multipart/form-data";if(a.iframe!==false&&(c||a.iframe||k))a.closeKeepAlive?
b.get(a.closeKeepAlive,f):f();else b.ajax(a);this.trigger("form-submit-notify",[this,a]);return this};b.fn.ajaxForm=function(a){if(this.length===0){var f={s:this.selector,c:this.context};if(!b.isReady&&f.s){q("DOM not ready, queuing ajaxForm");b(function(){b(f.s,f.c).ajaxForm(a)});return this}q("terminating; zero elements found by selector"+(b.isReady?"":" (DOM not ready)"));return this}return this.ajaxFormUnbind().bind("submit.form-plugin",function(d){if(!d.isDefaultPrevented()){d.preventDefault();
b(this).ajaxSubmit(a)}}).bind("click.form-plugin",function(d){var c=d.target,h=b(c);if(!h.is(":submit,input:image")){c=h.closest(":submit");if(c.length==0)return;c=c[0]}var g=this;g.clk=c;if(c.type=="image")if(d.offsetX!=undefined){g.clk_x=d.offsetX;g.clk_y=d.offsetY}else if(typeof b.fn.offset=="function"){h=h.offset();g.clk_x=d.pageX-h.left;g.clk_y=d.pageY-h.top}else{g.clk_x=d.pageX-c.offsetLeft;g.clk_y=d.pageY-c.offsetTop}setTimeout(function(){g.clk=g.clk_x=g.clk_y=null},100)})};b.fn.ajaxFormUnbind=
function(){return this.unbind("submit.form-plugin click.form-plugin")};b.fn.formToArray=function(a){var f=[];if(this.length===0)return f;var d=this[0],c=a?d.getElementsByTagName("*"):d.elements;if(!c)return f;var h,g,k,i,n,B;h=0;for(n=c.length;h<n;h++){g=c[h];if(k=g.name)if(a&&d.clk&&g.type=="image"){if(!g.disabled&&d.clk==g){f.push({name:k,value:b(g).val()});f.push({name:k+".x",value:d.clk_x},{name:k+".y",value:d.clk_y})}}else if((i=b.fieldValue(g,true))&&i.constructor==Array){g=0;for(B=i.length;g<
B;g++)f.push({name:k,value:i[g]})}else i!==null&&typeof i!="undefined"&&f.push({name:k,value:i})}if(!a&&d.clk){a=b(d.clk);c=a[0];if((k=c.name)&&!c.disabled&&c.type=="image"){f.push({name:k,value:a.val()});f.push({name:k+".x",value:d.clk_x},{name:k+".y",value:d.clk_y})}}return f};b.fn.formSerialize=function(a){return b.param(this.formToArray(a))};b.fn.fieldSerialize=function(a){var f=[];this.each(function(){var d=this.name;if(d){var c=b.fieldValue(this,a);if(c&&c.constructor==Array)for(var h=0,g=c.length;h<
g;h++)f.push({name:d,value:c[h]});else c!==null&&typeof c!="undefined"&&f.push({name:this.name,value:c})}});return b.param(f)};b.fn.fieldValue=function(a){for(var f=[],d=0,c=this.length;d<c;d++){var h=b.fieldValue(this[d],a);h===null||typeof h=="undefined"||h.constructor==Array&&!h.length||(h.constructor==Array?b.merge(f,h):f.push(h))}return f};b.fieldValue=function(a,f){var d=a.name,c=a.type,h=a.tagName.toLowerCase();if(f===undefined)f=true;if(f&&(!d||a.disabled||c=="reset"||c=="button"||(c=="checkbox"||
c=="radio")&&!a.checked||(c=="submit"||c=="image")&&a.form&&a.form.clk!=a||h=="select"&&a.selectedIndex==-1))return null;if(h=="select"){var g=a.selectedIndex;if(g<0)return null;d=[];h=a.options;var k=(c=c=="select-one")?g+1:h.length;for(g=c?g:0;g<k;g++){var i=h[g];if(i.selected){var n=i.value;n||(n=i.attributes&&i.attributes.value&&!i.attributes.value.specified?i.text:i.value);if(c)return n;d.push(n)}}return d}return b(a).val()};b.fn.clearForm=function(){return this.each(function(){b("input,select,textarea",
this).clearFields()})};b.fn.clearFields=b.fn.clearInputs=function(){return this.each(function(){var a=this.type,f=this.tagName.toLowerCase();if(a=="text"||a=="password"||f=="textarea")this.value="";else if(a=="checkbox"||a=="radio")this.checked=false;else if(f=="select")this.selectedIndex=-1})};b.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||typeof this.reset=="object"&&!this.reset.nodeType)this.reset()})};b.fn.enable=function(a){if(a===undefined)a=true;return this.each(function(){this.disabled=
!a})};b.fn.selected=function(a){if(a===undefined)a=true;return this.each(function(){var f=this.type;if(f=="checkbox"||f=="radio")this.checked=a;else if(this.tagName.toLowerCase()=="option"){f=b(this).parent("select");a&&f[0]&&f[0].type=="select-one"&&f.find("option").selected(false);this.selected=a}})}})(jQuery);;
(function($){Drupal.ajax=Drupal.ajax||{};Drupal.settings.urlIsAjaxTrusted=Drupal.settings.urlIsAjaxTrusted||{};Drupal.behaviors.AJAX={attach:function(context,settings){for(var base in settings.ajax)if(!$("#"+base+".ajax-processed").length){var element_settings=settings.ajax[base];if(typeof element_settings.selector=="undefined")element_settings.selector="#"+base;$(element_settings.selector).each(function(){element_settings.element=this;Drupal.ajax[base]=new Drupal.ajax(base,this,element_settings)});
$("#"+base).addClass("ajax-processed")}$(".use-ajax:not(.ajax-processed)").addClass("ajax-processed").each(function(){var element_settings={};element_settings.progress={"type":"throbber"};if($(this).attr("href")){element_settings.url=$(this).attr("href");element_settings.event="click"}var base=$(this).attr("id");Drupal.ajax[base]=new Drupal.ajax(base,this,element_settings)});$(".use-ajax-submit:not(.ajax-processed)").addClass("ajax-processed").each(function(){var element_settings={};element_settings.url=
$(this.form).attr("action");element_settings.setClick=true;element_settings.event="click";element_settings.progress={"type":"throbber"};var base=$(this).attr("id");Drupal.ajax[base]=new Drupal.ajax(base,this,element_settings)})}};Drupal.ajax=function(base,element,element_settings){var defaults={url:"system/ajax",event:"mousedown",keypress:true,selector:"#"+base,effect:"none",speed:"none",method:"replaceWith",progress:{type:"throbber",message:Drupal.t("Please wait...")},submit:{"js":true}};$.extend(this,
defaults,element_settings);this.element=element;this.element_settings=element_settings;this.url=element_settings.url.replace(/\/nojs(\/|$|\?|&|#)/g,"/ajax$1");if(Drupal.settings.urlIsAjaxTrusted[element_settings.url])Drupal.settings.urlIsAjaxTrusted[this.url]=true;this.wrapper="#"+element_settings.wrapper;if(this.element.form)this.form=$(this.element.form);var ajax=this;ajax.options={url:ajax.url,data:ajax.submit,beforeSerialize:function(element_settings,options){return ajax.beforeSerialize(element_settings,
options)},beforeSubmit:function(form_values,element_settings,options){ajax.ajaxing=true;return ajax.beforeSubmit(form_values,element_settings,options)},beforeSend:function(xmlhttprequest,options){ajax.ajaxing=true;return ajax.beforeSend(xmlhttprequest,options)},success:function(response,status,xmlhttprequest){if(typeof response=="string")response=$.parseJSON(response);if(response!==null&&!Drupal.settings.urlIsAjaxTrusted[ajax.url])if(xmlhttprequest.getResponseHeader("X-Drupal-Ajax-Token")!=="1"){var customMessage=
Drupal.t("The response failed verification so will not be processed.");return ajax.error(xmlhttprequest,ajax.url,customMessage)}return ajax.success(response,status)},complete:function(xmlhttprequest,status){ajax.ajaxing=false;if(status=="error"||status=="parsererror")return ajax.error(xmlhttprequest,ajax.url)},dataType:"json",type:"POST"};$(ajax.element).bind(element_settings.event,function(event){if(!Drupal.settings.urlIsAjaxTrusted[ajax.url]&&!Drupal.urlIsLocal(ajax.url))throw new Error(Drupal.t("The callback URL is not local and not trusted: !url",
{"!url":ajax.url}));return ajax.eventResponse(this,event)});if(element_settings.keypress)$(ajax.element).keypress(function(event){return ajax.keypressResponse(this,event)});if(element_settings.prevent)$(ajax.element).bind(element_settings.prevent,false)};Drupal.ajax.prototype.keypressResponse=function(element,event){var ajax=this;if(event.which==13||event.which==32&&element.type!="text"&&element.type!="textarea"){$(ajax.element_settings.element).trigger(ajax.element_settings.event);return false}};
Drupal.ajax.prototype.eventResponse=function(element,event){var ajax=this;if(ajax.ajaxing)return false;try{if(ajax.form){if(ajax.setClick)element.form.clk=element;ajax.form.ajaxSubmit(ajax.options)}else{ajax.beforeSerialize(ajax.element,ajax.options);$.ajax(ajax.options)}}catch(e){ajax.ajaxing=false;alert("An error occurred while attempting to process "+ajax.options.url+": "+e.message)}if(typeof element.type!="undefined"&&(element.type=="checkbox"||element.type=="radio"))return true;else return false};
Drupal.ajax.prototype.beforeSerialize=function(element,options){if(this.form){var settings=this.settings||Drupal.settings;Drupal.detachBehaviors(this.form,settings,"serialize")}options.data["ajax_html_ids[]"]=[];$("[id]").each(function(){options.data["ajax_html_ids[]"].push(this.id)});options.data["ajax_page_state[theme]"]=Drupal.settings.ajaxPageState.theme;options.data["ajax_page_state[theme_token]"]=Drupal.settings.ajaxPageState.theme_token;for(var key in Drupal.settings.ajaxPageState.css)options.data["ajax_page_state[css]["+
key+"]"]=1;for(var key in Drupal.settings.ajaxPageState.js)options.data["ajax_page_state[js]["+key+"]"]=1};Drupal.ajax.prototype.beforeSubmit=function(form_values,element,options){};Drupal.ajax.prototype.beforeSend=function(xmlhttprequest,options){if(this.form){options.extraData=options.extraData||{};options.extraData.ajax_iframe_upload="1";var v=$.fieldValue(this.element);if(v!==null)options.extraData[this.element.name]=Drupal.checkPlain(v)}$(this.element).addClass("progress-disabled").attr("disabled",
true);if(this.progress.type=="bar"){var progressBar=new Drupal.progressBar("ajax-progress-"+this.element.id,eval(this.progress.update_callback),this.progress.method,eval(this.progress.error_callback));if(this.progress.message)progressBar.setProgress(-1,this.progress.message);if(this.progress.url)progressBar.startMonitoring(this.progress.url,this.progress.interval||1500);this.progress.element=$(progressBar.element).addClass("ajax-progress ajax-progress-bar");this.progress.object=progressBar;$(this.element).after(this.progress.element)}else if(this.progress.type==
"throbber"){this.progress.element=$('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');if(this.progress.message)$(".throbber",this.progress.element).after('<div class="message">'+this.progress.message+"</div>");$(this.element).after(this.progress.element)}};Drupal.ajax.prototype.success=function(response,status){if(this.progress.element)$(this.progress.element).remove();if(this.progress.object)this.progress.object.stopMonitoring();$(this.element).removeClass("progress-disabled").removeAttr("disabled");
Drupal.freezeHeight();for(var i in response)if(response.hasOwnProperty(i)&&response[i]["command"]&&this.commands[response[i]["command"]])this.commands[response[i]["command"]](this,response[i],status);if(this.form){var settings=this.settings||Drupal.settings;Drupal.attachBehaviors(this.form,settings)}Drupal.unfreezeHeight();this.settings=null};Drupal.ajax.prototype.getEffect=function(response){var type=response.effect||this.effect;var speed=response.speed||this.speed;var effect={};if(type=="none"){effect.showEffect=
"show";effect.hideEffect="hide";effect.showSpeed=""}else if(type=="fade"){effect.showEffect="fadeIn";effect.hideEffect="fadeOut";effect.showSpeed=speed}else{effect.showEffect=type+"Toggle";effect.hideEffect=type+"Toggle";effect.showSpeed=speed}return effect};Drupal.ajax.prototype.error=function(xmlhttprequest,uri,customMessage){alert(Drupal.ajaxError(xmlhttprequest,uri,customMessage));if(this.progress.element)$(this.progress.element).remove();if(this.progress.object)this.progress.object.stopMonitoring();
$(this.wrapper).show();$(this.element).removeClass("progress-disabled").removeAttr("disabled");if(this.form){var settings=this.settings||Drupal.settings;Drupal.attachBehaviors(this.form,settings)}};Drupal.ajax.prototype.commands={insert:function(ajax,response,status){var wrapper=response.selector?$(response.selector):$(ajax.wrapper);var method=response.method||ajax.method;var effect=ajax.getEffect(response);var new_content_wrapped=$("<div></div>").html(response.data);var new_content=new_content_wrapped.contents();
if(new_content.length!=1||new_content.get(0).nodeType!=1)new_content=new_content_wrapped;switch(method){case "html":case "replaceWith":case "replaceAll":case "empty":case "remove":var settings=response.settings||ajax.settings||Drupal.settings;Drupal.detachBehaviors(wrapper,settings)}wrapper[method](new_content);if(effect.showEffect!="show")new_content.hide();if($(".ajax-new-content",new_content).length>0){$(".ajax-new-content",new_content).hide();new_content.show();$(".ajax-new-content",new_content)[effect.showEffect](effect.showSpeed)}else if(effect.showEffect!=
"show")new_content[effect.showEffect](effect.showSpeed);if(new_content.parents("html").length>0){var settings=response.settings||ajax.settings||Drupal.settings;Drupal.attachBehaviors(new_content,settings)}},remove:function(ajax,response,status){var settings=response.settings||ajax.settings||Drupal.settings;Drupal.detachBehaviors($(response.selector),settings);$(response.selector).remove()},changed:function(ajax,response,status){if(!$(response.selector).hasClass("ajax-changed")){$(response.selector).addClass("ajax-changed");
if(response.asterisk)$(response.selector).find(response.asterisk).append(' <span class="ajax-changed">*</span> ')}},alert:function(ajax,response,status){alert(response.text,response.title)},css:function(ajax,response,status){$(response.selector).css(response.argument)},settings:function(ajax,response,status){if(response.merge)$.extend(true,Drupal.settings,response.settings);else ajax.settings=response.settings},data:function(ajax,response,status){$(response.selector).data(response.name,response.value)},
invoke:function(ajax,response,status){var $element=$(response.selector);$element[response.method].apply($element,response.arguments)},restripe:function(ajax,response,status){$("> tbody > tr:visible, > tr:visible",$(response.selector)).removeClass("odd even").filter(":even").addClass("odd").end().filter(":odd").addClass("even")},add_css:function(ajax,response,status){$("head").prepend(response.data);var match,importMatch=/^@import url\("(.*)"\);$/igm;if(document.styleSheets[0].addImport&&importMatch.test(response.data)){importMatch.lastIndex=
0;while(match=importMatch.exec(response.data))document.styleSheets[0].addImport(match[1])}},updateBuildId:function(ajax,response,status){$('input[name="form_build_id"][value="'+response["old"]+'"]').val(response["new"])}}})(jQuery);;
