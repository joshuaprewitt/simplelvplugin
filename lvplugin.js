var simplelvPlugin = Object.create({
   checkActivePlugin: function() {
      // The hash property contains the number sign.
      if (window.location.hash === '#simplelvplugin') {
         var setActivePluginCallback = function(viewspaceDom) {
            // Setting innerHtml does not work so use elements.
            var element = document.createElement('iframe');
            element.setAttribute('height', '100%');

            // This could point to an html file installed with out package.
            //var prefix = location.protocol + '//' + location.hostname + ':' + location.port;
            element.setAttribute('src', '/packages/local/simplelvplugin/index.html');
            element.setAttribute('width', '100%');

            if (viewspaceDom.firstChild) {
               // Replacing the child is faster than setting innerHtml to empty string.
               viewspaceDom.replaceChild(viewspaceDom.firstChild, element);
            }
            else {
               viewspaceDom.appendChild(element);
            }
         };
         Skyline.Api.setActivePlugin('simplelvplugin', null, 'simplelvPlugin.pluginTitle', setActivePluginCallback, this);
      }
   }
});

window.addEventListener('hashchange', simplelvPlugin.checkActivePlugin);

// Check if the page loaded with the hash.
simplelvPlugin.checkActivePlugin();