AngularJS RequireJS WordPress Theme
=========================

npm & gulp
-----------
npm and gulp are now part of the build  
* `npm install` - installs all necessary packages
* `bower install` - installs all third part libs
* `gulp` - sets up all the vendor and theme scripts and styles


assets v. build directory
--------------------------
I am keeping all working files in the `assets` directory which build using __gulp__ to the `build` directory for enqueue'ing by the theme.

Technologies
------------
**AngularJS**

**RequireJS** - Build project by modules

**LESS CSS** - Personal preference over SASS

**JSON API** - Required plugin for RESTful API


Install Instructions
=====================
+ Download / Pull All Files
+ FTP to your themes directory
+ Download/Install the [JSON API WordPress Plugin](http://wordpress.org/plugins/json-rest-api/)
+ Activate Theme under Appearances
+ Run `npm install`
+ Run `bower install`
+ Run `gulp`
+ Come back and fork me


Documentation
--------------   

**GLOBAL JS VARIABLES**  
__set by localize_script in functions.php__  
+ ajaxInfo.api_url - JSON-REST-API url  
+ ajaxInfo.template_directory - Current WordPress theme directory
