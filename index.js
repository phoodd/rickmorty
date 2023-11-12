function getCharacters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json()) // Fix: Change 'respone' to 'response'
        .then(data => {
            done(data);
        });
}

getCharacters(data => {
    data.results.forEach(inimesed => {
        const article = document.createRange().createContextualFragment(
            `<article>
                <div class="image-container">
                    <img src="${inimesed.image}" alt="inimesed">
                </div>
                <h2>${inimesed.name}</h2>
                <span>${inimesed.status}</span>
            </article>`
        );

        const main = document.querySelector("main");
        main.append(article);
    });
});
