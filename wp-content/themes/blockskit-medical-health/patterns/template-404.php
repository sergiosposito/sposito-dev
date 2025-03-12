<?php
 /**
  * Title: Template 404
  * Slug: blockskit-medical-health/template-404
  * Categories: template
  * Inserter: false
  */
$blockskit_medical_health_images = array(
BLOCKSKIT_MEDICAL_HEALTH_URL . 'assets/images/inner-banner-img1.jpg',
);
?>

<!-- wp:cover {"url":"<?php echo esc_url($blockskit_medical_health_images[0]); ?>","id":79,"dimRatio":80,"overlayColor":"foreground","focalPoint":{"x":0.5,"y":0},"minHeight":700,"style":{"spacing":{"padding":{"top":"var:preset|spacing|large","bottom":"var:preset|spacing|large"}}}} -->
<div class="wp-block-cover" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--large);min-height:700px"><span aria-hidden="true" class="wp-block-cover__background has-foreground-background-color has-background-dim-80 has-background-dim"></span><img class="wp-block-cover__image-background wp-image-79" alt="" src="<?php echo esc_url($blockskit_medical_health_images[0]); ?>" style="object-position:50% 0%" data-object-fit="cover" data-object-position="50% 0%"/><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|medium","bottom":"var:preset|spacing|medium"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--medium)"><!-- wp:query-title {"type":"archive","textAlign":"center"} /-->

<!-- wp:heading {"style":{"typography":{"fontSize":"clamp(4rem, 30vw, 15rem)","fontWeight":"400","lineHeight":"1"}},"className":"has-text-align-center"} -->
<h2 class="wp-block-heading has-text-align-center" style="font-size:clamp(4rem, 30vw, 15rem);font-weight:400;line-height:1">
404</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center"><?php esc_html_e( 'This page could not be found. Maybe try a search?', 'blockskit-medical-health' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:search {"label":"Search","showLabel":false,"width":75,"widthUnit":"%","buttonText":"Search","buttonUseIcon":true,"align":"center","style":{"border":{"width":"0px","style":"none"}},"backgroundColor":"primary","textColor":"light"} /--></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->