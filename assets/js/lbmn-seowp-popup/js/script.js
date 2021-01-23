jQuery(document).ready(function ($) {

    /**
     * ----------------------------------------------------------------------
     * Get Url Parametr and Select Template
     */

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    var get_parametr = getUrlParameter('utm_campaing');


    var panel_state = ' open';
    // Check the popup state using the Web Storage
    if ( localStorage.getItem('lbmn-panel') === 'closed' ) {
        panel_state = '';
    }

    var panel_template_wrapper = '<div class="lbmn-panel' + panel_state + '"><div class="toggle"></div> </div>';
    var panel_template_section_deal = '<div class="section-deal"></div>';


    var svg_icon_tick = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 13"><path fill="#59a6ca" d="M15.57 2.845L14.238 1.51c-.13-.13-.353-.13-.48 0L6.66 8.623l-3.093-3.11c-.13-.13-.352-.13-.482 0L1.75 6.845c-.128.13-.128.352 0 .48l4.67 4.67c.073.055.147.092.24.092s.167-.037.24-.093l8.67-8.67c.13-.13.13-.35 0-.48z"/></svg>';
    var panel_template_section_deal_content = '<h2>Your new website is ready!</h2>' +
    '<h3>It take a few minutes to get <strong>a FULL COPY</strong> of this demo-site in your WordPress.</h3>'  +
    '<ul>' + 
    '<li>' + svg_icon_tick + ' Automatic one-click demo import</li>' + 
    '<li>' + svg_icon_tick + ' Content and illustrations included</li>' + 
    '<li>' + svg_icon_tick + ' Fast loading and responsive</li>' + 
    '</ul>' +
    '<p>Buy this WordPress theme to <strong>save&nbsp;$190</strong> on premium plugins, illustrations and content <strong>included for free.</strong></p>';

    var panel_template_section_action = '<div class="section-action"></div>';
    var panel_action_button = '<a href="http://themeforest.net/item/seo-wp-social-media-and-digital-marketing-agency/8012838?license=regular&open_purchase_for_item_id=8012838&purchasable=source&ref=lumbermandesigns" class="action-button" target="_blank"><span class="main">Buy this SEO WP theme </span><span class="after">SALE</span></a>' + 
    '<span class="alternative-action">or <a href="http://themeforest.net/item/seowp-seo-online-marketing-social-media-agency/8012838?ref=lumbermandesigns" target="_blank">learn more about it\'s features</a></span>';

    // panel_template_section_deal_head = $(panel_template_section_deal_head).append(panel_template_section_deal_head_content);
    panel_template_section_deal = $(panel_template_section_deal).append(panel_template_section_deal_content);
    panel_template_section_action = $(panel_template_section_action).append(panel_action_button);

    var template_default = $(panel_template_wrapper).append(panel_template_section_deal,panel_template_section_action);
    jQuery(".off-canvas-wrap").after(template_default);

    // var template_default = '<div class="arrow"></div><div class="lbmn-section" style="display: none"><div class="lbmn-head"><h2>Start your online business in a day!</h2> <p>Get a FULL copy of this website on your server.</p></div><div class="lbmn-body"><ul><li>Automatic <b>one-click</b> demo import</li><li>All the content and illustrations <b>included</b></li><li><b>A+ page</b> loading performance</li><li>Fully responsive and Mobile-Friendly</li><li>Integrated with <b>WP SEO by Yoast</b></li></ul><h3>Buying our theme you save $224 on premium plugins and resources included!</h3></div></div>';

    // var template_seowp_ver_1 = '<div class="lbmn-panel"><div class="arrow"></div><div class="lbmn-section" style="display: none"><div class="lbmn-head"><h2>Start your online business in a day!</h2> <p>Get a FULL copy of this website on your server.</p></div><div class="lbmn-body"><ul><li>Automatic <b>one-click</b> demo import</li><li>All the content and illustrations <b>included</b></li><li><b>A+ page</b> loading performance</li><li>Fully responsive and Mobile-Friendly</li><li>Integrated with <b>WP SEO by Yoast</b></li></ul><h3>Buying our theme you save $224 on premium plugins and resources included!</h3></div></div><div class="lbmn-section-action"><a href="#" class="lbmn-action-button">Buy this WordPress theme <span>$59</span></a></div></div>';

    // var template_seowp_ver_2 = '<div class="lbmn-panel"><div class="arrow"></div><div class="lbmn-section" style="display: none"><div class="lbmn-head"><h2>Start your online business in a day!</h2> <p>Get a FULL copy of this website on your server.</p></div><div class="lbmn-body"><ul><li>Automatic <b>one-click</b> demo import</li><li>All the content and illustrations <b>included</b></li><li><b>A+ page</b> loading performance</li><li>Fully responsive and Mobile-Friendly</li><li>Integrated with <b>WP SEO by Yoast</b></li></ul><h3>Buying our theme you save $224 on premium plugins and resources included!</h3></div></div><div class="lbmn-section-action"><a href="#" class="lbmn-action-button">Buy this WordPress theme <span>$69</span></a></div></div>';

    // switch( get_parametr ) {
    //     case 'seowp-ver1':
    //         jQuery(".off-canvas-wrap").after(template_seowp_ver_1);
    //         break;
    //     case 'seowp-ver2':
    //         jQuery(".off-canvas-wrap").after(template_seowp_ver_2);
    //         break;
    //     default:
    //         jQuery(".off-canvas-wrap").after(template_default);
    // }

    /**
     * ----------------------------------------------------------------------
     * Add Class
     */

    jQuery(document).on( 'click', '.lbmn-panel .toggle', function(e) {

        jQuery('.lbmn-panel').toggleClass('open');


        // Rember the popup state using the Web Storage
        if (  jQuery('.lbmn-panel').hasClass('open') ) {
            localStorage.setItem('lbmn-panel', 'open');
        } else {
            localStorage.setItem('lbmn-panel', 'closed');
        }

    });

});