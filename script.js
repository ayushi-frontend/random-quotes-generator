// async function getquotes() {
//     try {
//           const response = await fetch("https://dummyjson.com/quotes/random");
//     const quotes = await response.json();

//     let quotebox = document.getElementById("quotes")
//     let quotesauthor = document.getElementById("author")

//     quotebox.innerHTML= `"${quotes.quote}"` 
//     quotesauthor.innerHTML=`"${quotes.author}"`  
//     } catch (error) {
//         console.log("Api fetching error")
//     }
// }   
// getquotes();
async function getquotes() {
    try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        const data = await response.json();

        let quotescontainer = document.getElementById("quotes")
        let author = document.getElementById("author")

        quotescontainer.innerHTML = `"${data.quote}`
        author.innerHTML = `"${data.author}`
    } catch (error) {
        console.log("error", error)
    }
}