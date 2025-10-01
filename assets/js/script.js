/*
  Kurzbeschreibung:
  - Implementiert eine einfache Suchfunktion für die Startseite
  - Setzt das aktuelle Jahr und die letzte Aktualisierung (Datum + Uhrzeit) im Footer
*/

// Suchfunktion
// --------------------------------
// Holt das Eingabefeld (Suchleiste) und die Liste mit Begriffen
var searchInput = document.getElementById('search');
var termList = document.getElementById('termList');

if (searchInput && termList) {
    // Diese Funktion filtert alle Einträge in der Liste anhand des eingegebenen Textes
    function filterList() {
        // Den aktuellen Suchtext holen
        var value = searchInput.value;
        // Falls nichts eingegeben ist, mit leerem String weiterarbeiten
        if (!value) {
            value = '';
        }
        // In Kleinbuchstaben umwandeln, damit Groß-/Kleinschreibung egal ist
        value = value.toLowerCase();

        // Die Kinder von #termList sind entweder <a>- oder <li>-Elemente
        var items = termList.children; 
        // for-Schleife zum auslesen der Elemente
        for (var i = 0; i < items.length; i++) {
            var element = items[i]; // aktuelles DOM-Element
            var text = '';
            if (element && element.textContent) {
                text = element.textContent.toLowerCase();
            }
            // Wenn der Suchtext im Element vorkommt, anzeigen, sonst nicht
            if (text.indexOf(value) !== -1) {
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
        }
    }

    // Auf Eingaben in der Suchleiste reagieren und direkt filtern
    searchInput.addEventListener('input', function() {
        filterList();
    });
}


// Footer – Datum und Uhrzeit setzen
// --------------------------------
// Setzt das aktuelle Jahr YYYY und die letzte Aktualisierung DD.MM.YYYY, hh:mm
document.addEventListener('DOMContentLoaded', function() {
    // aktuelles Datum/Uhrzeit vom Browser
    var d = new Date(); // aktuelles Datum
    var dd = String(d.getDate()).padStart(2, '0');
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var yyyy = d.getFullYear();
    var hh = String(d.getHours()).padStart(2, '0');
    var min = String(d.getMinutes()).padStart(2, '0');

    // Jahr aktualisieren (© YEAR ...)
    var yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = String(yyyy);
    }

    // Letzte Aktualisierung setzen (z. B. 01.10.2025, 14:37)
    var lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = dd + '.' + mm + '.' + yyyy + ', ' + hh + ':' + min;
    }
});

