$(document).ready(function () {
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
    $('#sort-selector').change(function () {
        var selector = $(this);
        var currentUrl = new URL(window.location);

        var selectedVal = selector.val();
        if (selectedVal != "reset") {
            var sort = selectedVal.split("_")[0];
            var direction = selectedVal.split("_")[1];

            currentUrl.searchParams.set("sort", sort);
            currentUrl.searchParams.set("direction", direction);

            window.location.replace(currentUrl);
        } else {
            currentUrl.searchParams.delete("sort");
            currentUrl.searchParams.delete("direction");

            window.location.replace(currentUrl);
        }
    })
    // Shopping bag update quantity on click
    $('.update-link').click(function (e) {
        var form = $(this).prev('.update-form');
        form.submit();
    })

    $("#id_category").addClass("browser-default");

    $("#id_country").addClass("browser-default");


});
