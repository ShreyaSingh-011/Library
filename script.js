
const addBtn = document.querySelector("#bttn");
const closeBtn= document.querySelector(".close-btn");



addBtn.addEventListener("click", () => {
    const popUp= document.querySelector('.backdrop');
    popUp.classList.toggle("closed");
});


closeBtn.addEventListener("click", () => {
    const popUp=document.querySelector('.backdrop');
    popUp.classList.toggle("closed");
});

const createForm=document.getElementById("add-book-form");

const readBtn=document.querySelector(".read-btn");

 let read=false;

 readBtn.addEventListener("click",()=>{
    read=!read;
    readBtn.classList.toggle("read-btn-unread");
    readBtn.classList.toggle("read-btn-read");
 })


createForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const title=document.getElementById("title");
    const author=document.getElementById("author");
    const pages=document.getElementById("pages");

    addBook(title.value,author.value,pages.value);
        title.value="";
        author.value="";
        pages.value="";
        if(read){
            read = false;
            readBtn.classList.toggle("read-btn-unread");
            readBtn.classList.toggle("read-btn-read");
        }
        console.log("reset");


        const popUp=document.querySelector('.backdrop');
        popUp.classList.toggle("closed");
    

})

function addBook(title,author,pages,read){
    const bookSection=document.querySelector(".book-section");

    const bookHolder=document.createElement("div");
    bookHolder.classList.add("book-holder");

    const bookDetails=document.createElement("div");
    bookDetails.classList.add("book-details");

    const bookHeading=document.createElement("book-heading");
    bookHeading.classList.add("book-heading");
    bookHeading.textContent=title;

    const bookAuthor=document.createElement("div");
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent=author;

    const bookPages = document.createElement("div");
    bookPages.classList.add("book-pages");
    bookPages.textContent = pages;

    bookDetails.appendChild(bookHeading);
    bookDetails.appendChild(bookAuthor);
    bookDetails.appendChild(bookPages);
    const readImageDiv = document.createElement("div");
    readImageDiv.classList.add("read-img"); 

    const readImage = document.createElement("img");
    if(read)
        readImage.classList.add("read-img-btn-read");
    else
        readImage.classList.add("read-img-btn-unread");
    readImage.src = "images/asset 3.svg";
    readImage.alt = "read";
    readImageDiv.appendChild(readImage);

    const deleteButton = document.createElement("div");
    deleteButton.classList.add("delete-btn");

    const deleteImage = document.createElement("img");
    deleteImage.src = "images/close.svg";
    deleteImage.alt = "delete";
    deleteImage.classList.add('book-delete');

    deleteButton.appendChild(deleteImage);

    bookHolder.appendChild(bookDetails);
    bookHolder.appendChild(readImageDiv);
    bookHolder.appendChild(deleteButton);

    bookSection.appendChild(bookHolder);

    deleteButton.addEventListener("click", () => {
        bookHolder.remove();
    });

    readImage.addEventListener("click",()=>{
        readImage.classList.toggle("read-img-btn-read");
        readImage.classList.toggle("read-img-btn-unread");
    })
}




