//simpan ke dalam file adsx.js

const DIRECTLINK_ADS ="https://ingredientwritten.com/bb120q87k?key=321334c3d6953e68e01852e8de133755";

var scripts = [
	"https://ingredientwritten.com/bc/90/c7/bc90c7d6c0f997b9f29a9d84374ecab1.js",//popunder js
	"https://ingredientwritten.com/9397dc242ae9fce609e5794607474a51/invoke.js",//banner js
];

for (index = 0; index < scripts.length; ++index) {
    var script = document.createElement('script');
    script.src = scripts[index];
    script.type='text/javascript';
    var done = false;
    script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
            done = true;
            //promptForUserEntries();
        }
    };  
    document.getElementsByTagName("body")[0].appendChild(script);
}