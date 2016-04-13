<?php
/**
 * @file
 * HTML template functions.
 */

/**
 * Implements hook_preprocess_html().
 * Meta tags https://drupal.org/node/1468582#comment-5698732
 */
function sisacr_preprocess_html(&$variables) {
  $meta_charset = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'charset' => 'utf-8',
    ),
  );
  drupal_add_html_head($meta_charset, 'meta_charset');

  $meta_x_ua_compatible = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'http-equiv' => 'X-UA-Compatible',
      'content' => 'IE=edge',
    ),
  );
  drupal_add_html_head($meta_x_ua_compatible, 'meta_x_ua_compatible');

  $meta_mobile_optimized = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'MobileOptimized',
      'content' => 'width',
    ),
  );
  drupal_add_html_head($meta_mobile_optimized, 'meta_mobile_optimized');

  $meta_handheld_friendly = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'HandheldFriendly',
      'content' => 'true',
    ),
  );
  drupal_add_html_head($meta_handheld_friendly, 'meta_handheld_friendly');

  $meta_viewport = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'viewport',
      'content' => 'width=device-width, initial-scale=1', #1024
    ),
  );
  drupal_add_html_head($meta_viewport, 'meta_viewport');

  /*$meta_cleartype = array(
    '#tag' => 'meta',
    '#attributes' => array(
      'http-equiv' => 'cleartype',
      'content' => 'on',
    ),
  );
  drupal_add_html_head($meta_cleartype, 'meta_cleartype');*/

   // Use html5shiv.
  if (theme_get_setting('html5shim')) {
    $element = array(
      'element' => array(
        '#tag' => 'script',
        '#value' => '',
        '#attributes' => array(
          'type' => 'text/javascript',
          'src' => file_create_url(drupal_get_path('theme', 'sisacr') . '/js/html5shiv-printshiv.js'),
        ),
      ),
    );
    $html5shim = array(
      '#type' => 'markup',
      '#markup' => "<!--[if lt IE 9]>\n" . theme('html_tag', $element) . "<![endif]-->\n",
    );
    drupal_add_html_head($html5shim, 'sonambulo_html5shim');
  }

  // Use Respond.js.
  if (theme_get_setting('respond_js')) {
    drupal_add_js(drupal_get_path('theme', 'sisacr') . '/js/respond.min.js', array('group' => JS_LIBRARY, 'weight' => -100));
  }

  // Use normalize.css
  if (theme_get_setting('normalize_css')) {
    drupal_add_css(drupal_get_path('theme', 'sisacr') . '/css/normalize.css', array('group' => CSS_SYSTEM, 'weight' => -100));
  }
}

/**
 * Implements hook_html_head_alter().
 */
function sisacr_html_head_alter(&$head_elements) {

  // Remove system content type meta tag.
  unset($head_elements['system_meta_content_type']);
}

/**
 * Implements hook_page_alter().
 * https://gist.github.com/jacine/1378246
 */
function sisacr_page_alter(&$page) {
  // Remove all the region wrappers.

  foreach (element_children($page) as $key => $region) {
    if (!empty($page[$region]['#theme_wrappers'])) {
      $page[$region]['#theme_wrappers'] = array_diff($page[$region]['#theme_wrappers'], array('region'));
    }
  }
  // Remove the wrapper from the main content block.
  if (!empty($page['content']['system_main'])) {
    $page['content']['system_main']['#theme_wrappers'] = array_diff($page['content']['system_main']['#theme_wrappers'], array('block'));
  }
}

function sisacr_preprocess_field(&$variables) {

  $node = '';
  $title_attr = '';
  $field = '';
  $title = '';

  if ($variables['field_name_css'] == 'title'){
    $node = node_load($variables['element']['#object']->nid);
    $field = field_view_field('node', $node, 'field_meta_title');
    $title = $variables['items'][0]['#markup'];
  }

  if(!empty($field)){
    $title_attr = $field['#items'][0]['value'];
    $title = str_replace("<h1", "<h1 title='".$title_attr."'", $title);
    $variables['items'][0]['#markup'] = $title;
  } 
}

function sisacr_preprocess_node(&$vars) {
  // Add a striping class.
  $vars['classes_array'][] = 'node-' . $vars['zebra'];  
}

function sisacr_preprocess_block(&$vars, $hook) {
  // Add a striping class.
  $vars['classes_array'][] = 'block-' . $vars['zebra'];
}

function sisacr_menu_link(array $variables) {
//add class for li
   $variables['element']['#attributes']['class'][] = 'menu-' . $variables['element']['#original_link']['mlid'];
//add class for a
   $variables['element']['#localized_options']['attributes']['class'][] = 'menu-' . $variables['element']['#original_link']['mlid'];
//dvm($variables['element']);
  return theme_menu_link($variables);
}

function sisacr_preprocess_page(&$vars) {
    // - page--example.tpl.php  
  $node = '';
  $title_attr = '';
  $field = '';

  if (isset($vars['node'])){
    $node = $vars['node'];
    $field = field_view_field('node', $node, 'field_meta_title');
  }

  if(!empty($field))
    $title_attr = $field['#items'][0]['value'];
  
  $vars['title_attributes_array']['title'][] = $title_attr;

  if (isset($vars['node'])) {
    $vars['theme_hook_suggestion'] = 'page__'.$vars['node']->type; //
  }
}

function sisacr_form_alter(&$form, $form_state, $form_id){
  
  if($form["#id"]=='views-exposed-form-busqueda-busqueda-productos-metales' || $form["#id"]=='views-exposed-form-busqueda-busqueda-productos-impresion' || $form["#id"]=='views-exposed-form-busqueda-busqueda-productos-soldadura' || $form["#id"]=='views-exposed-form-busqueda-busqueda-productos-baranda'){
      $form['title']['#attributes']=array('placeholder'=> array('Búsqueda de productos'));
  }
}