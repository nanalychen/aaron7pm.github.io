(function(e){var t={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper"},n=e(window),r=e(document),i=[],s=n.height(),o=function(){var e=n.scrollTop(),t=r.height(),o=t-s,u=e>o?o-e:0;for(var a=0;a<i.length;a++){var f=i[a],l=f.stickyWrapper.offset().top,c=l-f.topSpacing-u;if(e<=c){if(f.currentTop!==null){f.stickyElement.css("position","").css("top","").removeClass(f.className);f.stickyElement.parent().removeClass(f.className);f.currentTop=null}}else{var h=t-f.stickyElement.outerHeight()-f.topSpacing-f.bottomSpacing-e-u;if(h<0){h=h+f.topSpacing}else{h=f.topSpacing}if(f.currentTop!=h){f.stickyElement.css("position","fixed").css("top",h).addClass(f.className);f.stickyElement.parent().addClass(f.className);f.currentTop=h}}}},u=function(){s=n.height()},a={init:function(n){var r=e.extend(t,n);return this.each(function(){var t=e(this);stickyId=t.attr("id");wrapper=e("<div></div>").attr("id",stickyId+"-sticky-wrapper").addClass(r.wrapperClassName);t.wrapAll(wrapper);var n=t.parent();n.css("height",t.outerHeight());i.push({topSpacing:r.topSpacing,bottomSpacing:r.bottomSpacing,stickyElement:t,currentTop:null,stickyWrapper:n,className:r.className})})},update:o};if(window.addEventListener){window.addEventListener("scroll",o,false);window.addEventListener("resize",u,false)}else if(window.attachEvent){window.attachEvent("onscroll",o);window.attachEvent("onresize",u)}e.fn.sticky=function(t){if(a[t]){return a[t].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof t==="object"||!t){return a.init.apply(this,arguments)}else{e.error("Method "+t+" does not exist on jQuery.sticky")}};e(function(){setTimeout(o,0)})})(jQuery)