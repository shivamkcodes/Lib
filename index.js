console.log("library");

class Book{
    constructor(name,author,type){
    this.name=name;
    this.author=author;
    this.type=type;
    }
}

class Display{
    
    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tablebody');
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                           
                        </tr>`;
        tableBody.innerHTML += uiString;
    }  

    
    clear(){
        let libraryform=document.getElementById("libraryform")
        libraryform.reset();
    }

    validate(book){
        if(book.name.length<2  || book.author.length<2){
            return false
        }
        else{
            return true;
        }
    }

    
    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                                
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);
    
    }
}

// add event listner

let libraryform=document.getElementById('libraryform');
libraryform.addEventListener('submit',libraryformsubmit)

// function new(){
//     let tableBody1=localStorage.getItem('tablebody');
//     if(tableBody1==null){
//         tableobj=[]
//     }
//     else{
//         tableobj=JSON.parse(tableBody1);
//     }
//     tableobj.push()
// }

function libraryformsubmit(e){
    let name=document.getElementById('bookName').value;
    let author=document.getElementById('authorName').value;
    let type;


    let fiction=document.getElementById('fiction');
    let programming=document.getElementById('Programming');
    let story=document.getElementById('Story');


    if(fiction.checked){
        type=fiction.value;

    }

    else if(programming.checked){
        type=programming.value;
    }

    else if(story.checked){
        type=story.value;
    }
    // console.log(story.value);
    let book=new Book(name,author,type)
    
    console.log(book)

    let display=new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear(book);
        display.show('success','your book has been successfully added!!!!');

    }
    else{
        display.show('danger','sorry!! we cannot add this book');

    }
    
    e.preventDefault();


}