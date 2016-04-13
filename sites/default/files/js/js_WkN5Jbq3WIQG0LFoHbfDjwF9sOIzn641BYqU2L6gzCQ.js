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
(function($){Drupal.behaviors.devel={attach:function(context,settings){$(".krumo-footnote .krumo-call").once().before('<img style="vertical-align: middle;" title="Click to expand. Double-click to show path." src="'+settings.basePath+'misc/help.png"/>');var krumo_name=[];var krumo_type=[];function krumo_traverse(el){krumo_name.push($(el).html());krumo_type.push($(el).siblings("em").html().match(/\w*/)[0]);if($(el).closest(".krumo-nest").length>0)krumo_traverse($(el).closest(".krumo-nest").prev().find(".krumo-name"))}
$(".krumo-child > div:first-child",context).dblclick(function(e){if($(this).find("> .krumo-php-path").length>0)$(this).find("> .krumo-php-path").remove();else{krumo_traverse($(this).find("> a.krumo-name"));var krumo_path_string="";for(var i=krumo_name.length-1;i>=0;--i){if(krumo_name.length-1==i)krumo_path_string+="$"+krumo_name[i];if(typeof krumo_name[i-1]!=="undefined"){if(krumo_type[i]=="Array"){krumo_path_string+="[";if(!/^\d*$/.test(krumo_name[i-1]))krumo_path_string+="'";krumo_path_string+=
krumo_name[i-1];if(!/^\d*$/.test(krumo_name[i-1]))krumo_path_string+="'";krumo_path_string+="]"}if(krumo_type[i]=="Object")krumo_path_string+="->"+krumo_name[i-1]}}$(this).append('<div class="krumo-php-path" style="font-family: Courier, monospace; font-weight: bold;">'+krumo_path_string+"</div>");krumo_name=[];krumo_type=[]}})}}})(jQuery);;
(function ($) {

 // Scroll to given element
  Drupal.ajax.prototype.commands.ajaxCommentsScrollToElement = function(ajax, response, status) {
    try {
      pos = $(response.selector).offset();
      $('html, body').animate({ scrollTop: pos.top}, 'slow');
    }
    catch (e) {
      console.log('ajaxComments-ScrollToElementError: ' + e.name);
    }
  };

  /**
   * Add the dummy div if they are not exist.
   * On the server side we have a current state of node and comments, but on client side we may have a outdated state
   * and some div's may be not present
   */
  Drupal.ajax.prototype.commands.ajaxCommentsAddDummyDivAfter = function(ajax, response, status) {
    try {
      if (!$(response.selector).next().hasClass(response.class)) {
        $('<div class="' + response.class + '"></div>').insertAfter(response.selector);
      }
    }
    catch (e) {
      console.log('ajaxComments-AddDummyDivAfter: ' + e.name);
    }
  };

  /*
   * These function may be removed when bug #736066 is fixed
   * At this time, ajax.js automatically wrap comment content into div when we use ajax_command_NAME functions,
   * and this is not good for us because this broke html layout
   */

  /**
   * Own implementation of ajax_command_replace()
   * see bug: https://www.drupal.org/node/736066
   */
  Drupal.ajax.prototype.commands.ajaxCommentsReplace = function(ajax, response, status) {
    try {
      // Removing content from the wrapper, detach behaviors first.
      var wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var settings = response.settings || ajax.settings || Drupal.settings;
      Drupal.detachBehaviors(wrapper, settings);

      $(response.selector).replaceWith(response.html);

      // Attach all JavaScript behaviors to the new content, if it was successfully
      // added to the page, this if statement allows #ajax['wrapper'] to be
      // optional.
      var settings = response.settings || ajax.settings || Drupal.settings;
      Drupal.attachBehaviors(response.data, settings);
    }
    catch (e) {
      console.log('ajaxComments-Replace: ' + e.name)
    }
  };

  /**
   * Own implementation of ajax_command_before()
   * see bug: https://www.drupal.org/node/736066
   */
  Drupal.ajax.prototype.commands.ajaxCommentsBefore = function(ajax, response, status) {
    try {
      $(response.html).insertBefore(response.selector);

      // Attach all JavaScript behaviors to the new content, if it was successfully
      // added to the page, this if statement allows #ajax['wrapper'] to be
      // optional.
      var settings = response.settings || ajax.settings || Drupal.settings;
        Drupal.attachBehaviors(response.data, settings);
      }
      catch (e) {
        console.log('ajaxComments-Before: ' + e.name)
      }
  };

  /**
   * Own implementation of ajax_command_after()
   * see bug: https://www.drupal.org/node/736066
   */
  Drupal.ajax.prototype.commands.ajaxCommentsAfter = function(ajax, response, status) {
    try {
      $(response.html).insertAfter(response.selector);

      // Attach all JavaScript behaviors to the new content, if it was successfully
      // added to the page, this if statement allows #ajax['wrapper'] to be
      // optional.
      var settings = response.settings || ajax.settings || Drupal.settings;
      Drupal.attachBehaviors(response.data, settings);
    }
    catch (e) {
      console.log('ajaxComments-After: ' + e.name)
    }
  };

  /**
   * Own implementation of ajax_command_insert()
   * see bug: https://www.drupal.org/node/736066
   */
  Drupal.ajax.prototype.commands.ajaxCommentsPrepend = function(ajax, response, status) {
    try {
      $(response.selector).prepend(response.html);

      // Attach all JavaScript behaviors to the new content, if it was successfully
      // added to the page, this if statement allows #ajax['wrapper'] to be
      // optional.
      var settings = response.settings || ajax.settings || Drupal.settings;
      Drupal.attachBehaviors(response.data, settings);
    }
    catch (e) {
      console.log('ajaxComments-Prepend: ' + e.name)
    }
  };

  /**
   * Own implementation of ajax_command_append()
   * see bug: https://www.drupal.org/node/736066
   */
  Drupal.ajax.prototype.commands.ajaxCommentsAppend = function(ajax, response, status) {
    try {
      $(response.selector).append(response.html);

      // Attach all JavaScript behaviors to the new content, if it was successfully
      // added to the page, this if statement allows #ajax['wrapper'] to be
      // optional.
      var settings = response.settings || ajax.settings || Drupal.settings;
      Drupal.attachBehaviors(response.data, settings);
    }
    catch (e) {
      console.log('ajaxComments-Append: ' + e.name)
    }
  };

  /**
   * Own Bind Ajax behavior for comment links.
   */
  Drupal.behaviors.ajaxCommentsBehavior = {
    attach: function(context, settings) {
      // Bind Ajax behavior to all items showing the class.
      $('.use-ajax-comments:not(.ajax-processed)').addClass('ajax-processed').each(function () {
        var element_settings = {};
        // Clicked links look better with the throbber than the progress bar.
        element_settings.progress = { 'type': 'throbber' };

        // For anchor tags, these will go to the target of the anchor rather
        // than the usual location.
        if ($(this).attr('href')) {
          element_settings.url = $(this).attr('href').replace('comment', 'ajax_comment');
          element_settings.event = 'click';
        }
        var base = $(this).attr('id');
        Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
      });
    }
  };


}(jQuery));
;
