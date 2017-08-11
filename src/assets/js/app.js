import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// Switch the comments on these two lines if you want to import all Foundation modules (not recommended for filesize purposes)
//import Foundation from 'foundation-sites';
import './lib/foundation-explicit-pieces';

$(document).foundation();
