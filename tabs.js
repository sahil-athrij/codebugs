function openfile(evt, filename) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(filename).style.display = "block";
    evt.currentTarget.className += " active";
}




function creatediv(filename){

    var div = document.createElement("div");
    div.innerHTML = "<h3>"+filename+"</h3>" +
        "<input type=\"text\" name=\""+filename+"\">";

    div.setAttribute("id",filename);
    div.setAttribute("class","tabcontent");
    document.body.appendChild(div);
}

function createeditor(filename){
    var div = document.createElement("div");

    div.setAttribute("id",filename);
    div.setAttribute("class","tabcontent");

    var editordiv = document.createElement("div");
    editordiv.setAttribute("id",filename+"editor");
    editordiv.setAttribute("class","editor");

    editordiv.innerText =  "function foo(items) {" +
"        var x = \"All this is syntax highlighted\";" +
"        return x;}";

    div.appendChild(editordiv);
    document.body.appendChild(div);


    var editor = ace.edit(filename+'editor');
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");


}

function createbutton(filename){
    var button = document.createElement("button");
    //Assign different attributes to the element.
    button.setAttribute("id", filename+"tab");
    button.innerHTML = filename;
    button.setAttribute("class", "tablinks");
    button.setAttribute("onclick","openfile(event,'" +filename+"' )");
    var tabs = document.getElementById("tabs");
    //Append the element in page (in span).
    tabs.appendChild(button);

}

function addtab(){
    var filename = prompt("Please enter file name", "file ");
    //Create an input type dynamically.


    createbutton(filename);
    createeditor(filename);
    openfile(event,filename);
}


