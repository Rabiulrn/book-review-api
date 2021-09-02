
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    // numFound Count
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => totalResult(data))                                              
    const totalResult = data =>{
        const foundCount = document.getElementById('num-found');
        foundCount.innerHTML = `total result found All:${data.numFound} `;
    }
    //empty search
    if (searchText == '') {
        console.log('please inseart something');
    }
    else {
        // load data
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs))                  
                              
    }
}

const displaySearchResult = books => {
    console.log(books)
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (books.length == 0) {
        console.log('no result found');
        const errMsg = document.getElementById('error-message');
        errMsg.innerHTML = `no result found`;
    }
    // errMsg.textContent = '';
    let c = 0;
    books.forEach(book => {
        // console.log(book.author_name[0]);
        // const index = indexOf('book');
        c = c + 1;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card-body">
                ${loadCover(book.cover_i)}
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">${book.author_name?.[0]}
                <p class="card-text">${book.publisher?.[0]}
                 <p class="card-text">${book.first_publish_year}</p>
            </div>
        
        `;
        searchResult.appendChild(div);
    })
    const foundCount = document.getElementById('found-count');
    foundCount.innerHTML = `total result found :${c} `;
    
}
const loadCover = coverId => {
    const url = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCoverImage(data));
}
const displayCoverImage = coverIds =>{

    console.log(coverIds);
    const searchResult = document.getElementById('search-result');
    const div = document.createElement('div');
    div.innerHTML =`<img src="${coverIds.cover_i}-M.jpg" class="card-img-top" alt="...">`
    searchResult.appendChild(div);
}














// {/* <p class="card-text">index:${c}</p> */}
//<p class="card-text">${book.author_name[0]}</p>
//<p class="card-text">${book.publisher[0]}</p>
// <p class="card-text">${book.author_name?.[0]}</p>