// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/on dojo/_base/html jimu/utils dojo/aspect dojo/keys".split(" "),function(c,e,a,f,h,g){return{a11y_init:function(){a.setAttr(this.overviewMapDijit._maximizerDiv,"tabindex",0);"LaunchpadTheme"===window.getAppConfig().theme.name&&(this._a11y_isLaunchpadTheme=!0);this._a11y_isLaunchpadTheme?(this._a11y_index||(this._a11y_index=a.getAttr(this.domNode,"tabindex"),a.removeAttr(this.domNode,"tabindex")),this._a11y_index&&a.setAttr(this.overviewMapDijit._controllerDiv,"tabindex",
parseInt(this._a11y_index,10)),f.initFirstFocusNode(this.domNode,this.overviewMapDijit._maximizerDiv)):(a.setAttr(this.overviewMapDijit._controllerDiv,"tabindex",0),f.initFirstFocusNode(this.domNode,this.overviewMapDijit._controllerDiv));f.initLastFocusNode(this.domNode,this.overviewMapDijit._maximizerDiv)},a11y_initEvents:function(){this._a11y_RAW_DOM_NODE_HEIGHT=a.getStyle(this.domNode,"height");this._closedBy508Controller=this._openedBy508Enter=!1;this._initToShow=!!this.config.overviewMap.visible;
this.own(e(this.domNode,"keydown",c.hitch(this,function(b){var d=b.target;!1===this._initToShow&&b.keyCode===g.ENTER&&a.hasClass(d,this.baseClass)&&(this._openedBy508Enter=!0);!0===this._a11y_isLaunchpadTheme||b.keyCode!==g.TAB||a.hasClass(d,this.baseClass)||(b.preventDefault(),a.hasClass(d,"ovwController")?this.overviewMapDijit._maximizerDiv.focus():a.hasClass(d,"ovwMaximizer")&&this.overviewMapDijit._controllerDiv.focus())})));this.own(e(this.domNode,"focus",c.hitch(this,function(){!0===this._closedBy508Controller||
this._a11y_isLaunchpadTheme||!1===this._initToShow&&f.isInNavMode()&&!this._openedBy508Enter&&10>=a.getStyle(this.domNode,"height")&&this.overviewMapDijit.show()})));this.own(e(this.domNode,"blur",c.hitch(this,function(){!1===this._initToShow&&f.isInNavMode()&&!this._openedBy508Enter&&!0!==this._a11y_isLaunchpadTheme&&setTimeout(c.hitch(this,function(){a.isDescendant(document.activeElement,this.domNode)||this.overviewMapDijit.hide()}),10)})));this.own(e(this.overviewMapDijit._controllerDiv,"keydown",
c.hitch(this,function(b){b.keyCode===g.ENTER&&(this.overviewMapDijit.visible?(this.overviewMapDijit.hide(),this._openedBy508Enter=!1,this._closedBy508Controller=!0,!0!==this._a11y_isLaunchpadTheme?this.domNode.focus():this.overviewMapDijit._controllerDiv.focus()):(this.overviewMapDijit.show(),!1===this._initToShow&&(this._openedBy508Enter=!0,this._closedBy508Controller=!1),!0===this._a11y_isLaunchpadTheme&&this.overviewMapDijit._maximizerDiv.focus()))})));this.own(e(this.overviewMapDijit._maximizerDiv,
"keydown",c.hitch(this,function(b){b.keyCode===g.ENTER&&this.overviewMapDijit._maximizeHandler();!0===this._a11y_isLaunchpadTheme&&this.overviewMapDijit.visible&&b.keyCode===g.ESCAPE&&(this.overviewMapDijit.hide(),this.overviewMapDijit._controllerDiv.focus())})))},a11y_forLaunchpadThemeStyle:function(){this.own(h.after(this.overviewMapDijit,"_maximizeHandler",c.hitch(this,function(){var b=this.overviewMapDijit.overviewMap.container.parentElement||this.overviewMapDijit.overviewMap.container.parentNode,
d=b.parentElement||b.parentNode;this.overviewMapDijit._maximized?(a.addClass(b,"a11y_maximized"),a.addClass(d,"a11y_maximized")):(a.removeClass(b,"a11y_maximized"),a.removeClass(d,"a11y_maximized"))}),this))}}});