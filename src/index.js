document.addEventListener("DOMContentLoaded", () => {
    const quoteList = document.getElementById("quote-list")
    const quoteForm = document.getElementById("new-quote-form")

    fetch("http://localhost:3000/quotes?_embed=likes")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {
            createQuote(element)
        });
    })

    quoteForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let data = {
            quote: quoteForm["quote"].value,
            author: quoteForm["author"].value,
            likes: []
        }
        handleFormSubmit(data)
    })

    function createQuote(item) {
        const li = document.createElement("li")
        const html = `
            <blockquote class="blockquote">
            <p class="mb-0">${item.quote}</p>
            <footer class="blockquote-footer">${item.author}</footer>
            <br>
            <button class='btn-success'>Likes: <span>${item.likes.length}</span></button>
            <button class='btn-danger'>Delete</button>
            </blockquote>
        `
        li.innerHTML = html
        quoteList.append(li)
    }

    
})