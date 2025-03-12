<?php
/**
 * Title: Latest Posts
 * Slug: blockskit-medical-health/latest-posts
 * Categories: theme
 * Keywords: blog posts
 */
?>
<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|xx-large","bottom":"var:preset|spacing|xx-large","left":"var:preset|spacing|x-small","right":"var:preset|spacing|x-small"},"margin":{"top":"0","bottom":"0"}}},"backgroundColor":"surface","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-surface-background-color has-background" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--xx-large);padding-right:var(--wp--preset--spacing--x-small);padding-bottom:var(--wp--preset--spacing--xx-large);padding-left:var(--wp--preset--spacing--x-small)"><!-- wp:columns {"style":{"spacing":{"blockGap":{"top":"var:preset|spacing|large","left":"var:preset|spacing|x-large"}}}} -->
<div class="wp-block-columns"><!-- wp:column {"verticalAlignment":"center","width":"41%","style":{"spacing":{"blockGap":"var:preset|spacing|medium"}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:41%"><!-- wp:heading {"level":3,"style":{"typography":{"fontStyle":"normal","fontWeight":"800","lineHeight":"1.1"}},"fontSize":"xxx-large","fontFamily":"manrope"} -->
<h3 class="wp-block-heading has-manrope-font-family has-xxx-large-font-size" style="font-style:normal;font-weight:800;line-height:1.1"><?php esc_html_e( 'Keep Update With News &amp; Blog.', 'blockskit-medical-health' ); ?></h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"medium"} -->
<p class="has-medium-font-size"><?php esc_html_e( 'Necessitatibus hymenaeos facilis earum feugiat neque nihil beatae soluta a, sodales quam possimus sed suspendisse voluptas imperdiet ipsam posuere bibendum ipsa.', 'blockskit-medical-health' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|large"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group"><!-- wp:heading {"level":6} -->
<h6 class="wp-block-heading"><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-primary-color">+</mark> <?php esc_html_e( 'Update News', 'blockskit-medical-health' ); ?></h6>
<!-- /wp:heading -->

<!-- wp:heading {"level":6} -->
<h6 class="wp-block-heading"><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-primary-color">+</mark> <?php esc_html_e( 'Update Articles', 'blockskit-medical-health' ); ?></h6>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"style":{"border":{"radius":"30px"},"spacing":{"padding":{"left":"var:preset|spacing|medium","right":"var:preset|spacing|medium","top":"var:preset|spacing|x-small","bottom":"var:preset|spacing|x-small"}}}} -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" style="border-radius:30px;padding-top:var(--wp--preset--spacing--x-small);padding-right:var(--wp--preset--spacing--medium);padding-bottom:var(--wp--preset--spacing--x-small);padding-left:var(--wp--preset--spacing--medium)"><?php esc_html_e( 'View All News', 'blockskit-medical-health' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"59%"} -->
<div class="wp-block-column" style="flex-basis:59%"><!-- wp:query {"queryId":0,"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false}} -->
<div class="wp-block-query"><!-- wp:post-template {"style":{"spacing":{"blockGap":"var:preset|spacing|medium"}},"layout":{"type":"grid","columnCount":2}} -->
<!-- wp:post-featured-image {"style":{"spacing":{"margin":{"bottom":"0"},"padding":{"top":"0","bottom":"0","left":"0","right":"0"}},"border":{"radius":{"topLeft":"20px","topRight":"20px","bottomLeft":"0px","bottomRight":"0px"}}}} /-->

<!-- wp:group {"style":{"border":{"radius":{"bottomLeft":"20px","bottomRight":"20px"}},"spacing":{"padding":{"top":"var:preset|spacing|small","bottom":"var:preset|spacing|small","left":"var:preset|spacing|small","right":"var:preset|spacing|small"}}},"backgroundColor":"accent-text","layout":{"type":"constrained"}} -->
<div class="wp-block-group has-accent-text-background-color has-background" style="border-bottom-left-radius:20px;border-bottom-right-radius:20px;padding-top:var(--wp--preset--spacing--small);padding-right:var(--wp--preset--spacing--small);padding-bottom:var(--wp--preset--spacing--small);padding-left:var(--wp--preset--spacing--small)"><!-- wp:post-title {"isLink":true,"style":{"spacing":{"padding":{"top":"0","bottom":"0"},"margin":{"bottom":"var:preset|spacing|x-small"}},"typography":{"fontStyle":"normal","fontWeight":"700","letterSpacing":"0px"}},"fontSize":"large","fontFamily":"manrope"} /-->

<!-- wp:post-date {"isLink":true,"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|xx-small"}}},"fontSize":"x-small"} /-->

<!-- wp:post-excerpt {"moreText":"LEARN MORE","excerptLength":13,"className":"link-no-underline","style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"}}},"typography":{"textDecoration":"none"},"spacing":{"margin":{"bottom":"0"}}},"fontSize":"small"} /--></div>
<!-- /wp:group -->
<!-- /wp:post-template --></div>
<!-- /wp:query --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->