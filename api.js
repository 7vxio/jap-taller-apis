function getData() {
    const apiKey = 'd68536a0-0bc6-4465-ba93-95940a516ba5';
    const apiUrl = 'https://api.harvardartmuseums.org/object';
    const url = `${apiUrl}?apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayData(data) {
    const title = data.records[0].title;
    const culture = data.records[0].culture;
    const dated = data.records[0].dated;
    const url = data.records[0].url;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <h2>${title}</h2>
        <p><strong>Cultura:</strong> ${culture}</p>
        <p><strong>Fecha:</strong> ${dated}</p>
        <p><strong>Enlace a obra:</strong> <a href="${url}">www.harvardartmuseums.org</a></p>
    `;
}
