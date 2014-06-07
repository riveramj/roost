/*
 jQuery Easing v1.3: Copyright (c) 2008 George McGinley Smith | BSD License: http://www.opensource.org/licenses/bsd-license.php
 jquery.transloadit2-v2.4.1.js: Copyright (c) 2013 Transloadit Ltd | MIT License: http://www.opensource.org/licenses/mit-license.php

 Fork this on Github: http://github.com/transloadit/jquery-sdk

 Transloadit servers allow browsers to cache jquery.transloadit2.js for 1 hour.
 keep this in mind when rolling out fixes.
 json2: Douglas Crockford | Public domain
 jQuery Tools 1.2.3: Tero Piirainen | Public domain
*/
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(d,a,f,b,c){return jQuery.easing[jQuery.easing.def](d,a,f,b,c)},easeInQuad:function(d,a,f,b,c){return b*(a/=c)*a+f},easeOutQuad:function(d,a,f,b,c){return-b*(a/=c)*(a-2)+f},easeInOutQuad:function(d,a,f,b,c){return 1>(a/=c/2)?b/2*a*a+f:-b/2*(--a*(a-2)-1)+f},easeInCubic:function(d,a,f,b,c){return b*(a/=c)*a*a+f},easeOutCubic:function(d,a,f,b,c){return b*((a=a/c-1)*a*a+1)+f},easeInOutCubic:function(d,a,f,b,c){return 1>(a/=c/2)?b/2*a*a*a+f:
b/2*((a-=2)*a*a+2)+f},easeInQuart:function(d,a,f,b,c){return b*(a/=c)*a*a*a+f},easeOutQuart:function(d,a,f,b,c){return-b*((a=a/c-1)*a*a*a-1)+f},easeInOutQuart:function(d,a,f,b,c){return 1>(a/=c/2)?b/2*a*a*a*a+f:-b/2*((a-=2)*a*a*a-2)+f},easeInQuint:function(d,a,f,b,c){return b*(a/=c)*a*a*a*a+f},easeOutQuint:function(d,a,f,b,c){return b*((a=a/c-1)*a*a*a*a+1)+f},easeInOutQuint:function(d,a,f,b,c){return 1>(a/=c/2)?b/2*a*a*a*a*a+f:b/2*((a-=2)*a*a*a*a+2)+f},easeInSine:function(d,a,f,b,c){return-b*Math.cos(a/
c*(Math.PI/2))+b+f},easeOutSine:function(d,a,f,b,c){return b*Math.sin(a/c*(Math.PI/2))+f},easeInOutSine:function(d,a,f,b,c){return-b/2*(Math.cos(Math.PI*a/c)-1)+f},easeInExpo:function(d,a,f,b,c){return 0==a?f:b*Math.pow(2,10*(a/c-1))+f},easeOutExpo:function(d,a,f,b,c){return a==c?f+b:b*(-Math.pow(2,-10*a/c)+1)+f},easeInOutExpo:function(d,a,f,b,c){return 0==a?f:a==c?f+b:1>(a/=c/2)?b/2*Math.pow(2,10*(a-1))+f:b/2*(-Math.pow(2,-10*--a)+2)+f},easeInCirc:function(d,a,f,b,c){return-b*(Math.sqrt(1-(a/=c)*
a)-1)+f},easeOutCirc:function(d,a,f,b,c){return b*Math.sqrt(1-(a=a/c-1)*a)+f},easeInOutCirc:function(d,a,f,b,c){return 1>(a/=c/2)?-b/2*(Math.sqrt(1-a*a)-1)+f:b/2*(Math.sqrt(1-(a-=2)*a)+1)+f},easeInElastic:function(d,a,f,b,c){d=1.70158;var g=0,h=b;if(0==a)return f;if(1==(a/=c))return f+b;g||(g=0.3*c);h<Math.abs(b)?(h=b,d=g/4):d=g/(2*Math.PI)*Math.asin(b/h);return-(h*Math.pow(2,10*(a-=1))*Math.sin(2*(a*c-d)*Math.PI/g))+f},easeOutElastic:function(d,a,f,b,c){d=1.70158;var g=0,h=b;if(0==a)return f;if(1==
(a/=c))return f+b;g||(g=0.3*c);h<Math.abs(b)?(h=b,d=g/4):d=g/(2*Math.PI)*Math.asin(b/h);return h*Math.pow(2,-10*a)*Math.sin(2*(a*c-d)*Math.PI/g)+b+f},easeInOutElastic:function(d,a,f,b,c){d=1.70158;var g=0,h=b;if(0==a)return f;if(2==(a/=c/2))return f+b;g||(g=0.3*c*1.5);h<Math.abs(b)?(h=b,d=g/4):d=g/(2*Math.PI)*Math.asin(b/h);return 1>a?-0.5*h*Math.pow(2,10*(a-=1))*Math.sin(2*(a*c-d)*Math.PI/g)+f:h*Math.pow(2,-10*(a-=1))*Math.sin(2*(a*c-d)*Math.PI/g)*0.5+b+f},easeInBack:function(d,a,f,b,c,g){void 0==
g&&(g=1.70158);return b*(a/=c)*a*((g+1)*a-g)+f},easeOutBack:function(d,a,f,b,c,g){void 0==g&&(g=1.70158);return b*((a=a/c-1)*a*((g+1)*a+g)+1)+f},easeInOutBack:function(d,a,f,b,c,g){void 0==g&&(g=1.70158);return 1>(a/=c/2)?b/2*a*a*(((g*=1.525)+1)*a-g)+f:b/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+f},easeInBounce:function(d,a,f,b,c){return b-jQuery.easing.easeOutBounce(d,c-a,0,b,c)+f},easeOutBounce:function(d,a,f,b,c){return(a/=c)<1/2.75?7.5625*b*a*a+f:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+f:a<2.5/2.75?
b*(7.5625*(a-=2.25/2.75)*a+0.9375)+f:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+f},easeInOutBounce:function(d,a,f,b,c){return a<c/2?0.5*jQuery.easing.easeInBounce(d,2*a,0,b,c)+f:0.5*jQuery.easing.easeOutBounce(d,2*a-c,0,b,c)+0.5*b+f}});
(function(d){function a(){}function f(a){E=[a]}function b(a,e,h){return a&&a.apply(e.context||e,h)}function c(c){function K(a){z++||(A(),B&&(G[r]={s:[a]}),L&&(a=L.apply(c,[a])),b(H,c,[a,M,c]),b(N,c,[c,M]))}function F(a){z++||(A(),B&&a!=O&&(G[r]=a),b(I,c,[c,a]),b(N,c,[c,a]))}c=d.extend({},P,c);var H=c.success,I=c.error,N=c.complete,L=c.dataFilter,C=c.callbackParameter,Q=c.callback,X=c.cache,B=c.pageCache,R=c.charset,r=c.url,w=c.data,S=c.timeout,D,z=0,A=a,p,x,J;T&&T(function(a){a.done(H).fail(I);H=
a.resolve;I=a.reject}).promise(c);c.abort=function(){!z++&&A()};if(!1===b(c.beforeSend,c,[c])||z)return c;r=r||e;w=w?"string"==typeof w?w:d.param(w,c.traditional):e;r+=w?(/\?/.test(r)?"&":"?")+w:e;C&&(r+=(/\?/.test(r)?"&":"?")+encodeURIComponent(C)+"=?");X||B||(r+=(/\?/.test(r)?"&":"?")+"_"+(new Date).getTime()+"=");r=r.replace(/=\?(&|$)/,"="+Q+"$1");B&&(D=G[r])?D.s?K(D.s[0]):F(D):(U[Q]=f,p=d(l)[0],p.id=t+Y++,R&&(p[h]=R),V&&11.6>V.version()?(x=d(l)[0]).text="document.getElementById('"+p.id+"')."+
k+"()":p[g]=g,Z&&(p.htmlFor=p.id,p.event=v),p[q]=p[k]=p[u]=function(a){if(!p[m]||!/i/.test(p[m])){try{p[v]&&p[v]()}catch(e){}a=E;E=0;a?K(a[0]):F(s)}},p.src=r,A=function(a){J&&clearTimeout(J);p[u]=p[q]=p[k]=null;y[n](p);x&&y[n](x)},y[W](p,C=y.firstChild),x&&y[W](x,C),J=0<S&&setTimeout(function(){F(O)},S));return c}var g="async",h="charset",e="",s="error",W="insertBefore",t="_jqjsp",v="onclick",k="on"+s,q="onload",u="onreadystatechange",m="readyState",n="removeChild",l="<script>",M="success",O="timeout",
U=window,T=d.Deferred,y=d("head")[0]||document.documentElement,G={},Y=0,E,P={callback:t,url:location.href},V=U.opera,Z=!!d("<div>").html("\x3c!--[if IE]><i><![endif]--\x3e").find("i").length;c.setup=function(a){d.extend(P,a)};d.jsonp=c})(jQuery);this.JSON||(this.JSON={});
(function(){function d(a){return 10>a?"0"+a:a}function a(a){c.lastIndex=0;return c.test(a)?'"'+a.replace(c,function(a){var h=e[a];return"string"===typeof h?h:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function f(e,c){var d,b,q,u,m=g,n,l=c[e];l&&"object"===typeof l&&"function"===typeof l.toJSON&&(l=l.toJSON(e));"function"===typeof s&&(l=s.call(c,e,l));switch(typeof l){case "string":return a(l);case "number":return isFinite(l)?String(l):"null";case "boolean":case "null":return String(l);
case "object":if(!l)return"null";g+=h;n=[];if("[object Array]"===Object.prototype.toString.apply(l)){u=l.length;for(d=0;d<u;d+=1)n[d]=f(d,l)||"null";q=0===n.length?"[]":g?"[\n"+g+n.join(",\n"+g)+"\n"+m+"]":"["+n.join(",")+"]";g=m;return q}if(s&&"object"===typeof s)for(u=s.length,d=0;d<u;d+=1)b=s[d],"string"===typeof b&&(q=f(b,l))&&n.push(a(b)+(g?": ":":")+q);else for(b in l)Object.hasOwnProperty.call(l,b)&&(q=f(b,l))&&n.push(a(b)+(g?": ":":")+q);q=0===n.length?"{}":g?"{\n"+g+n.join(",\n"+g)+"\n"+
m+"}":"{"+n.join(",")+"}";g=m;return q}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+d(this.getUTCMonth()+1)+"-"+d(this.getUTCDate())+"T"+d(this.getUTCHours())+":"+d(this.getUTCMinutes())+":"+d(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var b=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
c=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,g,h,e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},s;"function"!==typeof JSON.stringify&&(JSON.stringify=function(a,e,c){var d;h=g="";if("number"===typeof c)for(d=0;d<c;d+=1)h+=" ";else"string"===typeof c&&(h=c);if((s=e)&&"function"!==typeof e&&("object"!==typeof e||"number"!==typeof e.length))throw Error("JSON.stringify");return f("",{"":a})});
"function"!==typeof JSON.parse&&(JSON.parse=function(a,e){function h(a,c){var d,b,f=a[c];if(f&&"object"===typeof f)for(d in f)Object.hasOwnProperty.call(f,d)&&(b=h(f,d),void 0!==b?f[d]=b:delete f[d]);return e.call(a,c,f)}var c;a=String(a);b.lastIndex=0;b.test(a)&&(a=a.replace(b,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return c=eval("("+a+")"),"function"===typeof e?h({"":c},""):c;throw new SyntaxError("JSON.parse");})})();
(function(d){d.tools=d.tools||{version:"2013-02-15"};var a=d.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",zIndex:9998,opacity:0.8,startOpacity:0,color:"#fff"}},f,b,c,g,h;d.mask={load:function(e,s){if(c)return this;e=e||g;g=e=d.extend(d.extend({},a.conf),e);f=d("#"+e.maskId);f.length||(f=d("<div/>").attr("id",e.maskId),d("body").append(f));f.css({position:"fixed",top:0,left:0,width:"100%",height:"100%",display:"block",opacity:e.opacity,zIndex:e.zIndex,backgroundColor:e.color});
s&&s.length&&(h=s.eq(0).css("zIndex"),b=s.css({zIndex:Math.max(e.zIndex+1,"auto"==h?0:h)}));c=!0;return this},close:function(){c&&(f.fadeOut(g.closeSpeed,function(){b&&b.css({zIndex:h})}),c=!1);return this}};d.fn.mask=function(a){d.mask.load(a);return this};d.fn.expose=function(a){d.mask.load(a,this);return this}})(jQuery);
!function(d){function a(){this.timer=this.documentTitle=this.instance=this.assemblyId=null;this._options={};this.uploads=[];this.results={};this.pollStarted=this.ended=null;this.seq=this.pollRetries=0;this.started=!1;this.params=this.assembly=null;this.lastPoll=this.bytesReceivedBefore=0;this.$modal=this.$iframe=this.$fileClones=this.$files=this.$form=this.$params=null;this._clockseq=this._lastNSecs=this._lastMSecs=0}var f="https:"==document.location.protocol?"https://":"http://",b=f+"api2.transloadit.com/",
c={service:b,assets:f+"assets.transloadit.com/",onFileSelect:function(){},onStart:function(){},onProgress:function(){},onUpload:function(){},onResult:function(){},onCancel:function(){},onError:function(){},onSuccess:function(){},interval:2500,pollTimeout:8E3,poll404Retries:15,pollConnectionRetries:3,wait:!1,processZeroFiles:!0,triggerUploadOnFileSelection:!1,autoSubmit:!0,modal:!0,exclude:"",fields:!1,params:null,signature:null,region:"us-east-1",debug:!0},g=!1;d.fn.transloadit=function(){var h=Array.prototype.slice.call(arguments),
e,c;if(0!==this.length)if(1<this.length)this.each(function(){d.fn.transloadit.apply(d(this),h)});else{(1==h.length&&"object"==typeof h[0]||void 0===h[0])&&h.unshift("init");e=h.shift();"init"==e?(c=new a,h.unshift(this),this.data("transloadit.uploader",c)):c=this.data("transloadit.uploader");if(!c)throw Error("Element is not initialized for transloadit!");e=c[e].apply(c,h);return void 0===e?this:e}};a.prototype.init=function(a,e){this.$form=a;this.options(d.extend({},c,e||{}));var b=this;a.bind("submit.transloadit",
function(){b.validate();b.detectFileInputs();b._options.processZeroFiles||0!==b.$files.length?b.getBoredInstance():b.submitForm();return!1});if(this._options.triggerUploadOnFileSelection)a.on("change",'input[type="file"]',function(){a.trigger("submit.transloadit")});a.on("change",'input[type="file"]',function(){b._options.onFileSelect(d(this).val(),d(this))});this.includeCss()};a.prototype.getBoredInstance=function(){function a(){d.jsonp({url:c,timeout:e._options.pollTimeout,callbackParameter:"callback",
success:function(a){a.error?(e.ended=!0,a.url=c,e.renderError(a),e._options.onError(a)):(e.instance=a.api2_host,e.start())},error:function(d,v){if(g&&e._options.service===b&&"https://"!==f)g=!1,e._findBoredInstanceUrl(function(d,b){d?(e.ended=!0,d={error:"BORED_INSTANCE_ERROR",message:"Could not find a bored instance. "+d.message},e.renderError(d),e._options.onError(d)):(c=f+"api2."+b+"/instances/bored",a())});else{e.ended=!0;var k={error:"CONNECTION_ERROR",message:"There was a problem connecting to the upload server",
reason:"JSONP request status: "+v,url:c};e.renderError(k);e._options.onError(k)}}})}var e=this;this.instance=null;var c=this._options.service+"instances/bored",g=!0;a();this._options.modal&&this.showModal()};a.prototype._findBoredInstanceUrl=function(a){var e=this;d.ajax({url:"http://infra-"+this._options.region+".transloadit.com.s3.amazonaws.com/cached_instances.json",datatype:"json",timeout:3E3,success:function(c){c=e._shuffle(c.uploaders);e._findResponsiveInstance(c,0,a)},error:function(e,c){a(Error("Could not query S3 for cached uploaders"))}})};
a.prototype._findResponsiveInstance=function(a,e,c){if(!a[e])return c(Error("No responsive uploaders"));var b=this,t=a[e];d.jsonp({url:f+t,timeout:3E3,callbackParameter:"callback",success:function(a){c(null,t)},error:function(d,f){b._findResponsiveInstance(a,e+1,c)}})};a.prototype._shuffle=function(a){for(var e=[],c,d=0;d<a.length;d++)c=Math.floor(Math.random()*(d+1)),e[d]=e[c],e[c]=a[d];return e};a.prototype.start=function(){var a=this;this.ended=this.started=!1;this.seq=this.pollRetries=this.bytesReceivedBefore=
0;this.uploads=[];this.results={};this.assemblyId=this._genUuid();this.$fileClones=d().not(document);this.$files.each(function(){var e=d(this).clone(!0);a.$fileClones=a.$fileClones.add(e);e.insertAfter(this)});this.$iframe=d('<iframe id="transloadit-'+this.assemblyId+'" name="transloadit-'+this.assemblyId+'"/>').appendTo("body").hide();var e=f+this.instance+"/assemblies/"+this.assemblyId+"?redirect=false";if(this._options.formData){this._options.formData.append("params",this.$form.find("input[name=params]").val());
var c=new XMLHttpRequest;c.open("POST",e);c.send(this._options.formData)}else{this.$uploadForm=d('<form enctype="multipart/form-data" />').attr("action",e).attr("target","transloadit-"+this.assemblyId).attr("method","POST").append(this.$files).appendTo("body").hide();e="[name=params], [name=signature]";!0===this._options.fields?e="*":"string"===typeof this._options.fields&&(e+=", "+this._options.fields);var b=this.$form.find(":input[type!=file]").filter(e),e=b.filter("select"),b=b.filter(function(){return!d(this).is("select")}),
b=b.filter("[type!=submit]"),b=this.clone(b);this._options.params&&!this.$params&&(b=b.add('<input name="params" value=\''+JSON.stringify(this._options.params)+"'>"));this._options.signature&&(b=b.add('<input name="signature" value=\''+this._options.signature+"'>"));if("object"==typeof this._options.fields)for(c in this._options.fields)b=b.add('<input name="'+c+"\" value='"+this._options.fields[c]+"'>");b.prependTo(this.$uploadForm);e.each(function(){d('<input type="hidden"/>').attr("name",d(this).attr("name")).attr("value",
d(this).val()).prependTo(a.$uploadForm)});this.$uploadForm.submit()}this.lastPoll=+new Date;setTimeout(function(){a._poll()},300)};a.prototype.clone=function(a){var e=a.clone();a=a.filter("textarea");for(var c=e.filter("textarea"),b=0;b<a.length;++b)d(c[b]).val(d(a[b]).val());return e};a.prototype.detectFileInputs=function(){var a=this.$form.find("input[type=file]").not(this._options.exclude);this._options.processZeroFiles||(a=a.filter(function(){return""!==this.value}));this.$files=a};a.prototype.validate=
function(){if(this._options.params)this.params=this._options.params;else{var a=this.$form.find("input[name=params]");if(!a.length){alert("Could not find input[name=params] in your form.");return}this.$params=a;try{this.params=JSON.parse(a.val())}catch(e){alert("Error: input[name=params] seems to contain invalid JSON.");return}}this.params.redirect_url?this.$form.attr("action",this.params.redirect_url):this._options.autoSubmit&&this.$form.attr("action")==this._options.service+"assemblies"&&alert("Error: input[name=params] does not include a redirect_url")};
a.prototype._poll=function(a){var e=this;if(!this.ended){var c=/(mozilla)(?:.*? rv:([\w.]+))?/.exec(navigator.userAgent),c=c&&c[1];this.documentTitle=document.title;c&&!this.documentTitle&&(document.title="Loading...");this.pollStarted=+new Date;var c=this.instance.replace(/\.transloadit\.com/,"")+"-status.transloadit.com",b=f+c+"/assemblies/"+this.assemblyId+(a||"?seq="+this.seq);d.jsonp({url:b,timeout:e._options.pollTimeout,callbackParameter:"callback",success:function(a){if(!e.ended)if(e.assembly=
a,"ASSEMBLY_NOT_FOUND"==a.error)e.pollRetries++,e.pollRetries>e._options.poll404Retries?(document.title=e.documentTitle,e.ended=!0,e.renderError(a),e._options.onError(a)):setTimeout(function(){e._poll()},400);else if(a.error)e.ended=!0,e.renderError(a),document.title=e.documentTitle,e._options.onError(a);else{e.seq=a.last_seq;e.started||(e.started=!0,e._options.onStart(a));e.pollRetries=0;var c="ASSEMBLY_EXECUTING"===a.ok,b="ASSEMBLY_CANCELED"===a.ok,d="ASSEMBLY_COMPLETED"===a.ok;e._options.onProgress(a.bytes_received,
a.bytes_expected,a);for(var f=0;f<a.uploads.length;f++)e._options.onUpload(a.uploads[f],a),e.uploads.push(a.uploads[f]);for(var h in a.results)for(e.results[h]=e.results[h]||[],f=0;f<a.results[h].length;f++)e._options.onResult(h,a.results[h][f],a),e.results[h].push(a.results[h][f]);b?(e.ended=!0,document.title=e.documentTitle,e._options.onCancel(a)):(e.renderProgress(a),d||!e._options.wait&&c?(e.ended=!0,document.title=e.documentTitle,a.uploads=e.uploads,a.results=e.results,e._options.onSuccess(a),
e._options.modal&&e.cancel(),e.submitForm()):(a=e.pollStarted-+new Date,e.timer=setTimeout(function(){e._poll()},a<e._options.interval?e._options.interval:a),e.lastPoll=+new Date))}},error:function(a,c){if(!e.ended)if(e.pollRetries++,e.pollRetries>e._options.pollConnectionRetries){document.title=e.documentTitle;e.ended=!0;var d={error:"CONNECTION_ERROR",message:"There was a problem connecting to the upload server",reason:"JSONP request status: "+c,url:b};e.renderError(d);e._options.onError(d)}else setTimeout(function(){e._poll()},
350)}})}};a.prototype.stop=function(){document.title=this.documentTitle;this.ended=!0};a.prototype.cancel=function(){if(!this.ended){var a=this;this.$params&&this.$params.prependTo(this.$form);this.$fileClones.each(function(c){c=d(a.$files[c]).clone(!0);var b=d(this);c.insertAfter(b);b.remove()});clearTimeout(a.timer);this._poll("?method=delete");"Microsoft Internet Explorer"==navigator.appName&&this.$iframe[0].contentWindow.document.execCommand("Stop");setTimeout(function(){a.$iframe.remove()},500)}this._options.modal&&
(d.mask.close(),this.$modal.remove())};a.prototype.submitForm=function(){"multipart/form-data"===this.$form.attr("enctype")&&this.$form.removeAttr("enctype");null!==this.assembly&&d("<textarea/>").attr("name","transloadit").text(JSON.stringify(this.assembly)).prependTo(this.$form).hide();this._options.autoSubmit&&this.$form.unbind("submit.transloadit").submit()};a.prototype.showModal=function(){this.$modal=d('<div id="transloadit"><div class="content"><a href="#close" class="close">Cancel</a><p class="status"></p><div class="progress progress-striped active"><div class="bar"><span class="percent"></span></div></div><label>Starting upload ...</label><p class="error"></p><div class="error-details-toggle"><a href="#">Details</a></div><p class="error-details"></p></div></div>').appendTo("body");
d.extend(this.$modal,{$content:this.$modal.find(".content"),$close:this.$modal.find(".close"),$label:this.$modal.find("label"),$progress:this.$modal.find(".progress"),$percent:this.$modal.find(".progress .percent"),$progressBar:this.$modal.find(".progress .bar"),$error:this.$modal.find(".error"),$errorDetails:this.$modal.find(".error-details"),$errorDetailsToggle:this.$modal.find(".error-details-toggle")});var a=this;this.$modal.$close.click(function(){a.cancel()});this.$modal.$error.hide();this.$modal.$errorDetails.hide();
this.$modal.$errorDetailsToggle.hide();this.$modal.expose({api:!0,maskId:"transloadit_expose",opacity:0.9,loadSpeed:250,closeOnEsc:!1,closeOnClick:!1});this.$modal.$close.click(function(){a.cancel();return!1})};a.prototype.renderError=function(a){if(this._options.modal){this.$modal.$content.addClass("content-error");this.$modal.$progress.hide();this.$modal.$label.hide();var c=a.error+": "+a.message+"<br /><br />",c=c+(a.reason||"");if(-1===["CONNECTION_ERROR","BORED_INSTANCE_ERROR","ASSEMBLY_NOT_FOUND"].indexOf(a.error))this.$modal.$error.html(c).show();
else{this.$modal.$error.html("There was an internal error.<br />Please try your upload again.").show();var b=this,g=null;d.getJSON(f+"jsonip.com/",function(a){g=a.ip}).always(function(){var t={endpoint:a.url,instance:b.instance,assembly_id:b.assemblyId,ip:g,time:b.getUTCDatetime(),agent:navigator.userAgent,poll_retries:b.pollRetries,error:c};d.post(f+"status.transloadit.com/client_error",t);var v=[],k;for(k in t)v.push(k+": "+t[k]);t="If you would like our help to troubleshoot this, please email us this information:<br /><br />";
b.$modal.$errorDetails.hide().html(t+v.join("<br />"));b.$modal.$errorDetailsToggle.show().find("a").off("click").on("click",function(a){a.preventDefault();b.$modal.$errorDetails.toggle()})})}}};a.prototype.renderProgress=function(a){if(this._options.modal){var c=a.bytes_received/a.bytes_expected*100;100<c&&(c=0);var b=a.bytes_received-this.bytesReceivedBefore,d=+new Date-this.lastPoll,f=100===c?1E3:2*this._options.interval,g="Processing files";100!=c&&(g=(a.bytes_received/1024/1024).toFixed(2)+" MB / "+
(a.bytes_expected/1024/1024).toFixed(2)+" MB ("+(b/1024/(d/1E3)).toFixed(1)+" kB / sec)");this.$modal.$label.text(g);var k=parseInt(this.$modal.$progress.css("width"),10);this.bytesReceivedBefore=a.bytes_received;if(!(0>=b)){var q=this;this.$modal.$progressBar.stop().animate({width:c+"%"},{duration:f,easing:"linear",progress:function(a,c,b){a=(100*parseInt(q.$modal.$progressBar.css("width"),10)/k).toFixed(0);100<a&&(a=100);13<a&&q.$modal.$percent.text(a+"%")}})}}};a.prototype.includeCss=function(){!g&&
this._options.modal&&(g=!0,d('<link rel="stylesheet" type="text/css" href="'+this._options.assets+'css/transloadit2-v2.4.1.css" />').appendTo("head"))};a.prototype.getUTCDatetime=function(){var a=new Date,a=new Date(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds()),c=function(a){return 10>a?"0"+a:a},b=a.getTimezoneOffset(),d=(0<b?"-":"+")+c(parseInt(b/60,10));0!==b%60&&(d+=c(b%60));0===b&&(d="Z");return a.getFullYear()+"-"+c(a.getMonth()+1)+"-"+c(a.getDate())+
"T"+c(a.getHours())+":"+c(a.getMinutes())+":"+c(a.getSeconds())+d};a.prototype._genUuid=function(a,c,b){function d(a,c){var b=c||0,e=u;return e[a[b++]]+e[a[b++]]+e[a[b++]]+e[a[b++]]+e[a[b++]]+e[a[b++]]+e[a[b++]]+e[a[b++]]+e[a[b++]]+e[a[b++]]+e[a[b++]]+e[a[b++]]+e[a[b++]]+e[a[b++]]+e[a[b++]]+e[a[b++]]}a=a||{};b=c&&b||0;var f=c||[],g=Array(16),k=function(){for(var a=0,b;16>a;a++)0===(a&3)&&(b=4294967296*Math.random()),g[a]=b>>>((a&3)<<3)&255;return g}(),q=[k[0]|1,k[1],k[2],k[3],k[4],k[5]];this._clockseq=
(k[6]<<8|k[7])&16383;for(var k=null!=a.clockseq?a.clockseq:this._clockseq,u=[],m=0;256>m;m++)u[m]=(m+256).toString(16).substr(1);var m=null!=a.msecs?a.msecs:(new Date).getTime(),n=null!=a.nsecs?a.nsecs:this._lastNSecs+1,l=m-this._lastMSecs+(n-this._lastNSecs)/1E4;0>l&&null==a.clockseq&&(k=k+1&16383);(0>l||m>this._lastMSecs)&&null==a.nsecs&&(n=0);if(1E4<=n)throw Error("uuid.v1(): Can't create more than 10M uuids/sec");this._lastMSecs=m;this._lastNSecs=n;this._clockseq=k;m+=122192928E5;n=(1E4*(m&268435455)+
n)%4294967296;f[b++]=n>>>24&255;f[b++]=n>>>16&255;f[b++]=n>>>8&255;f[b++]=n&255;m=m/4294967296*1E4&268435455;f[b++]=m>>>8&255;f[b++]=m&255;f[b++]=m>>>24&15|16;f[b++]=m>>>16&255;f[b++]=k>>>8|128;f[b++]=k&255;a=a.node||q;for(q=0;6>q;q++)f[b+q]=a[q];return c?c:d(f)};a.prototype.options=function(a){if(0===arguments.length)return this._options;d.extend(this._options,a)};a.prototype.option=function(a,b){if(1==arguments.length)return this._options[a];this._options[a]=b}}(window.jQuery);
