// ==============================
// Configurações de Emoji (WordPress)
// ==============================
window._wpemojiSettings = {
    baseUrl: "https://s.w.org/images/core/emoji/16.0.1/72x72/",
    ext: ".png",
    svgUrl: "https://s.w.org/images/core/emoji/16.0.1/svg/",
    svgExt: ".svg",
    source: {
        concatemoji: "https://www.nicolecarioca.com.br/wp-includes/js/wp-emoji-release.min.js?ver=6.8.2"
    }
};

// ==============================
// Função Age Gate (com jQuery)
// ==============================
(function($) {
    'use strict';
    $(function() {
        // Código para verificação de idade
        // Exemplo:
        // const idade = prompt("Informe sua idade:");
        // if (!idade || parseInt(idade) < 18) {
        //     alert("Conteúdo restrito para menores de 18 anos.");
        //     window.location.href = "https://www.google.com";
        // }
    });
})(jQuery);

// ==============================
// Proteção contra PrintScreen
// ==============================
function stopPrntScr() {
    var inpFld = document.createElement("input");
    inpFld.setAttribute("value", "Access Denied");
    inpFld.setAttribute("width", "0");
    inpFld.style.height = "0px";
    inpFld.style.width = "0px";
    inpFld.style.border = "0px";
    document.body.appendChild(inpFld);
    inpFld.select();
    document.execCommand("copy");
    inpFld.remove(inpFld);
}

// ==============================
// Detecção de Navegador
// ==============================
var BrowserDetect = {
    init: function() {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function(data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) !== -1) return data[i].identity;
            } else if (dataProp) return data[i].identity;
        }
    }
};

BrowserDetect.init();

// ==============================
// Lazy Loading para Elementos
// ==============================
const lazyloadRunObserver = () => {
    const lazyloadBackgrounds = document.querySelectorAll(`.e-con.e-parent:not(.e-lazyloaded)`);
    const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let lazyloadBackground = entry.target;
                if (lazyloadBackground) {
                    lazyloadBackground.classList.add('e-lazyloaded');
                }
                lazyloadBackgroundObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '200px 0px 200px 0px' });

    lazyloadBackgrounds.forEach((lazyloadBackground) => {
        lazyloadBackgroundObserver.observe(lazyloadBackground);
    });
};

// ==============================
// Eventos para disparar lazyload
// ==============================
const events = ['DOMContentLoaded', 'elementor/lazyload/observe'];
events.forEach((event) => {
    document.addEventListener(event, lazyloadRunObserver);
});
