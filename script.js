//select popup box popup over lay button
var popupoverlay=document.querySelector(".popup_overlay");
var popupbox=document.querySelector(".popup_box");
var addpopup=document.getElementById("add_popup");
addpopup.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
}
);
//select cancel button
var cancelpopup=document.getElementById("cancel_popup");
cancelpopup.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})
//select container,addbook,booktitle,bookauthor,bookdiscirption
var container=document.querySelector(".container");
var addbook=document.getElementById("add_book");
var booktitle=document.getElementById("book_title_input");
var bookauthor=document.getElementById("book_author_input");
var bookdiscription= document.getElementById("book_discription_input");
addbook.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","book_container");
    div.innerHTML=`<h2>${booktitle.value}</h2></br>
    <h5>${bookauthor.value}</h5></br>
    <p>${bookdiscription.value}</P></br>
    <button  onclick="b1(event)">Delete</button>`;
    container.append(div);
    popupoverlay.style.display="none";
    popupbox.style.display="none";

})

function b1(event){
    event.target.parentElement.remove();

};