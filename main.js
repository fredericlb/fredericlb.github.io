$(main);

function main() {
    var _this = this;
    var overlay = $("<div class='overlay'>").appendTo(document.body);

    i18next.init({ fallbackLng: 'en' }, function (t) {
        $("#root").i18n();

        setTimeout(function () {
            var msn = new Masonry(document.getElementById("root"), {
                columnWidth: 320,
                itemSelector: "div.item",
                gutter: 20,
                stamp: "div.head"
            });

            var updateLanguage = function (lang) {
                i18next.setLng(lang, function () {
                    $("#root").i18n();
                    msn.layout();
                });
            };

            $(".lang-fr").click(updateLanguage.bind(_this, "fr"));
            $(".lang-en").click(updateLanguage.bind(_this, "en"));

            overlay.remove();
        }, 0);
        //        msn.layout();
    });
}
//# sourceMappingURL=main.js.map
