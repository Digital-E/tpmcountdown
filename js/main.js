document.addEventListener("DOMContentLoaded", function(event) {

    var timerId =
    countdown(
    new Date(2022, 5, 23),
    function(ts) {
     document.getElementById('pageTimer').innerHTML = ts.toHTML("strong");
    },
    countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

    countdown.setLabels(
        ' milliseconde| seconde| minute| heure| jour| semaine| mois| année| décennie| siècle| millénaire',
        ' millisecondes| secondes| minutes| heures| jours| semaines| mois| années| décennies| siècles| millénaires',
        ' et ',
        ', ',
        'maintenant');

});