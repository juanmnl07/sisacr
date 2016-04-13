<?php
if ($items){
$imagen ="";
?>
<!-- Place somewhere in the <body> of your page -->
<?php for ($i=0; $i < count($items); $i++) {
	$url = "";
$clase_especial_div="";


	if (isset($items[$i]['field_imagen_thumbnail']['#items'][0]['filename'])&&isset($items[$i]['field_imagen_real']['#items'][0]['filename'])){
			$url = '/sites/default/files/'.str_replace("public://","",$items[$i]['field_imagen_real']['#items'][0]['uri']);

		}
if (isset($items[$i]['field_imagen_thumbnail']['#items'][0]['title'])){
$clase_especial_div=$items[$i]['field_imagen_thumbnail']['#items'][0]['title'];
}
		if($i==(count($items)-1)){
			$last="logo-pasamano-last";
		}else{
		$last="";
		}
		if($i==0){
			$first="logo-pasamano-first";
		}else{
		$first="";
		}
		if($url != ''){

			$imagen .= "<div class=\"logo-pasamano logo-pasamano-".($i+1)." ".$first." ".$last." ".$clase_especial_div." \">
			<div class='logo-pasamanos-imagen'><a href=\"".$url."\" class='colorbox pasamanos-popup'><img src=\"/sites/default/files/".str_replace("public://","",$items[$i]['field_imagen_thumbnail']['#items'][0]['uri'])."\" /></a></div>
			<div class='logo-pasamanos-nombre'><p>".$items[$i]['field_nombre_pasamano']['#items'][0]['value']."</p></div>
			</div>";
		}else{
			$imagen .= "<div class=\"logo-pasamano logo-pasamano-".($i+1)." ".$first." ".$last." ".$clase_especial_div."\">
			<div class='logo-pasamanos-imagen'><img src=\"/sites/default/files/".str_replace("public://","",$items[$i]['field_imagen_thumbnail']['#items'][0]['uri'])."\" /></div>
			<div class='logo-pasamanos-nombre'><p>".$items[$i]['field_nombre_pasamano']['#items'][0]['value']."</p></div>
			</div>";
	}
} ?>
<div class="pasamanos">
		<div class="listado-pasamanos">
		<?php print $imagen ?>
	</div>
	<div class="pasamanos-cotizar"><a href="/contactenos">Cotizar</a></div>
</div>
<?php } ?>