function updateHeadline(title, picture, content) {
    document.getElementById('headlineTitle').innerHTML = title;
    document.getElementById('headlinePicture').setAttribute('src', picture);
    document.getElementById('headlineContent').innerHTML = content;
}

updateHeadline(
    'Default Title',
    'assets/images/default_image.png',
    'Sit fugiat aute aute magna. Voluptate adipisicing ullamco nostrud esse. Exercitation fugiat consequat sunt aliquip adipisicing proident nulla deserunt aute ut fugiat. Laboris cillum qui sit in adipisicing quis irure nostrud quis veniam. Qui et id non culpa culpa cillum reprehenderit ut mollit.Labore occaecat enim cupidatat cupidatat enim adipisicing dolor officia elit deserunt. Lorem culpa sint tempor nostrud ipsum aliqua veniam ipsum do aute proident. Do fugiat consectetur tempor adipisicing amet officia non in voluptate. Ea aliqua fugiat adipisicing Lorem exercitation eiusmod pariatur deserunt amet et dolore exercitation consequat.'
);

document.getElementById('changeHeadlineButton').addEventListener('click', function () {
    fetch('/ajax/random/article')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(data => {
            updateHeadline(data.title, data.picture, data.content)
        })
});


document.getElementById('searchHeadline').addEventListener('keydown', function (e) {
    let search = e.target.value;

    fetch("ajax/search/articles?search=" + search)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(data => {
            let liste = document.getElementById('resultList')
            liste.innerHTML = '';

            data.forEach(article => {
                let li = document.createElement('li')
                let a = document.createElement('a')
                a.href = "/article?id="+article.id
                a.innerText = article.title
                li.appendChild(a)
                liste.append(li)
            })
        })
});