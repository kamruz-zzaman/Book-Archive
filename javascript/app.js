// load data from api
const loadData = () => {
    const input = document.getElementById('input');
    const inputValue = input.value;
    const url = `https://openlibrary.org/search.json?q=${inputValue}`
    // error handle
    if (inputValue === '') {
        alert("you don't write anything")
    }

    fetch(url)
        .then(res => res.json())
        .then(data => getData(data));
    // reset input 
    input.value = '';

}
// get data/books
const getData = books => {
    const bookDocs = (books.docs);
    const card = document.getElementById('card');
    // reset card
    card.textContent = "";
    // show up to 30 books
    bookDocs.length = 30;
    // error handle
    if (books.numFound === 0) {
        alert("Don't found any Book")
    }
    else {
        bookDocs.forEach(bookDetails => {
            // load image
            const imgUrl = `https://covers.openlibrary.org/b/id/${bookDetails.cover_i}-M.jpg`
            const div = document.createElement('div');
            div.classList = ("col");
            // set data/card 
            if (bookDetails.author_name === undefined) {
                div.innerHTML = `
                <div class="card h-100 ">
                    <img height="500px" width="400px" src="${imgUrl}" class="mx-auto"  alt="${bookDetails.author_name}">
                    <div class="card-body">
                        <h5 class="card-title">${bookDetails.title}</h5>
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Author Name: Unknown</li>
                            <li class="list-group-item">First Publish Year: ${bookDetails.first_publish_year}</li>
                            <li class="list-group-item">Publisher: ${bookDetails.publisher}</li >
                        </ul>
                </div>`
                card.appendChild(div);
            }
            else if (bookDetails.first_publish_year == undefined) {
                div.innerHTML = `
                <div class="card h-100 ">
                    <img height="500px" width="400px" src="${imgUrl}" class="mx-auto"  alt="${bookDetails.author_name}">
                    <div class="card-body">
                        <h5 class="card-title">${bookDetails.title}</h5>
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Author Name: ${bookDetails.author_name}</li>
                            <li class="list-group-item">First Publish Year: Not Found</li>
                            <li class="list-group-item">Publisher: ${bookDetails.publisher}</li >
                        </ul>
                </div>`
                card.appendChild(div);
            }
            else if (bookDetails.cover_i == undefined) {
                div.innerHTML = `
                <div class="card h-100 ">
                    <img height="500px" width="400px" src="images/not-found.jpg" class="mx-auto"  alt="${bookDetails.author_name}">
                    <div class="card-body">
                        <h5 class="card-title">${bookDetails.title}</h5>
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Author Name: ${bookDetails.author_name}</li>
                            <li class="list-group-item">First Publish Year: ${bookDetails.first_publish_year}</li >
                            <li class="list-group-item">Publisher: ${bookDetails.publisher}</li >
                        </ul >
                </div > `
                card.appendChild(div);
            }
            else if (bookDetails.publisher == undefined) {
                div.innerHTML = `
                <div class="card h-100 ">
                    <img height="500px" width="400px" src="images/not-found.jpg" class="mx-auto"  alt="${bookDetails.author_name}">
                    <div class="card-body">
                        <h5 class="card-title">${bookDetails.title}</h5>
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Author Name: ${bookDetails.author_name}</li>
                            <li class="list-group-item">First Publish Year: ${bookDetails.first_publish_year}</li >
                            <li class="list-group-item">Publisher: Not Found</li >
                        </ul >
                </div > `
                card.appendChild(div);
            }
            else {
                div.innerHTML = `
                <div class="card h-100 ">
                    <img height="500px" width="400px" src="${imgUrl}" class="mx-auto"  alt="${bookDetails.author_name}">
                    <div class="card-body">
                        <h5 class="card-title">${bookDetails.title}</h5>
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Author Name: ${bookDetails.author_name}</li>
                            <li class="list-group-item">First Publish Year: ${bookDetails.first_publish_year}</li >
                            <li class="list-group-item">Publisher: ${bookDetails.publisher}</li >
                        </ul >
                </div > `
                card.appendChild(div);
            }
        });
    }
    // total search result 
    const footer = document.getElementById('footer');
    footer.innerHTML = `<p class="mb-0">Total result found:${books.numFound}</p>`
}