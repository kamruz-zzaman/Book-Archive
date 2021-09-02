
const loadData = () => {
    const input = document.getElementById('input');
    const inputValue = input.value;
    const url = `https://openlibrary.org/search.json?q=${inputValue}`
    input.value = '';
    fetch(url)
        .then(res => res.json())
        .then(data => getData(data));


}

const getData = books => {
    const bookDocs = books.docs;
    bookDocs.forEach(bookDetails => {
        console.log(bookDetails);
        const imgUrl = `https://covers.openlibrary.org/b/id/${bookDetails.cover_i}-M.jpg`
        console.log(bookDetails.cover_i);
        const card = document.getElementById('card');
        const div = document.createElement('div');
        div.classList = ("col");
        if (bookDetails.author_name === undefined && bookDetails.first_publish_year == undefined) {
            div.innerHTML = `
            <div class="card h-100 ">
                <img height="500px" width="400px" src="${imgUrl}" class="mx-auto"  alt="${bookDetails.author_name}">
                <div class="card-body">
                    <h5 class="card-title">${bookDetails.title}</h5>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Author Name: Unknown</li>
                         <li class="list-group-item">First Publish Year: Not Found</li>
                    </ul>
            </div>`
            card.appendChild(div);
        }
        else if (bookDetails.author_name === undefined) {
            div.innerHTML = `
            <div class="card h-100 ">
                <img height="500px" width="400px" src="${imgUrl}" class="mx-auto"  alt="${bookDetails.author_name}">
                <div class="card-body">
                    <h5 class="card-title">${bookDetails.title}</h5>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Author Name: Unknown</li>
                         <li class="list-group-item">First Publish Year: ${bookDetails.first_publish_year}</li>
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
                    </ul >
            </div > `
            card.appendChild(div);
        }
    });

}