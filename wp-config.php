<?php
define( 'DB_NAME', 'u614051033_sposito' );
define( 'DB_USER', 'u614051033_sposito' );
define( 'DB_PASSWORD', 'A@bb22071996' );
define( 'DB_HOST', '' );
define( 'DB_CHARSET', 'utf8mb4' );
define( 'DB_COLLATE', '' );

define( 'AUTH_KEY',         'aB LPy`vE#fwqUWs.44QnAe{Rc^J){5k)}emSf~p]?=4c// )YAQr#LFe<;~VVak' );
define( 'SECURE_AUTH_KEY',  '=3~}OMaHj!XZ?zQ,/+XTdjY<ZPU[!:A+PxB,P1|5sw9lo9%*9QZ[1Q^KIniDDJ&u' );
define( 'LOGGED_IN_KEY',    'K;P=P,3w1-us5eX-nHJAWvbbMRE&35{Uf8V->fBq1~pOq0eD^HmF7Y%?Azn<Y-^C' );
define( 'NONCE_KEY',        'Ja=4rZrYfoTShG&XDN)Yy`k-!Ho6V,%;d4_v=&P=s@+qo>K /Vk{?hG[*Aw+oi9B' );
define( 'AUTH_SALT',        'gJItM#xi6U8%p,-f|h57^2yp7_8NY*B%6VfU!?E}vHWwdg:+(oa^bmF@bxgy>#=G' );
define( 'SECURE_AUTH_SALT', 'r|U[|Chg|)y!z7t+60<`)/f#003y%W@Q+S-HAxsLkjnzdR@lFPT]tT%,V?_}_]q$' );
define( 'LOGGED_IN_SALT',   '>rOcE0D)vG]*}6wbYIU3B<&?~znvU}i8jC[ >QMB/dthJ.LSeg+8GhlgaR;.tU,<' );
define( 'NONCE_SALT',       '1hp8r&]!E|y@M}J:iW*5IH}$n_xM&,eJ%SsR4)TsQ($$%} Yy?=>/vw[[Ro cZWC' );

$table_prefix = 'wp_';

define( 'WP_DEBUG', false );

define( 'WP_ALLOW_MULTISITE', true );
define( 'MULTISITE', true );
define( 'SUBDOMAIN_INSTALL', true );
define( 'DOMAIN_CURRENT_SITE', 'sposito.dev' );
define( 'PATH_CURRENT_SITE', '/' );
define( 'SITE_ID_CURRENT_SITE', 1 );
define( 'BLOG_ID_CURRENT_SITE', 1 );

if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

require_once ABSPATH . 'wp-settings.php';
