 document.getElementById('error-message').style.display = 'none';
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';                                              //ager showing result remove kore notun result dekhabe
    
    if (searchText == '') {
        // please write something to display
    }
    else {
        // load data
        const url = `http://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs[0]))
            .catch(error => displayError(error));                        //error catch
    }
}
const displayError = error => {
    document.getElementById('error-message').style.display = 'block';            //error khaile error msg show.
}
const displaySearchResult = books => {
    console.log(books)
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    // if (books.length == 0) {
    //     // show no result found;
    // }
    books.forEach(book => {
         console.log(book.title);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                 <p class="card-text">${book.title}</p>
            </div>
        
        `;
        searchResult.appendChild(div);
    })
}
