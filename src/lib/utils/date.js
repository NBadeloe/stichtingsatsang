export function formatDate(dateString) {
    // Verwijder de T en zet deze in een constante
    const dateStr = dateString.replace("T", " ");

    var date = new Date(dateStr);
    var newDate = new Intl.DateTimeFormat('nl-NL', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'Europe/Amsterdam'
    }).format(date);

    return newDate;
}

// const datum = "2024-09-03T18:00:00+02:00";

// console.log(formatDate(datum));
// Verwachte output: "dag datum maand jaar om 24h tijd"
