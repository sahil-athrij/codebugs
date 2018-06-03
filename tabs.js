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





class tab {

    constructor(){
        this.filename = prompt("Please enter file name", "file ");

        this.createbutton(this.filename);
        this.createeditor(this.filename);
        openfile(event,this.filename);
        return this
    }

    createbutton(){
        this.button = document.createElement("button");
        this.button.setAttribute("id", this.filename+"tab");
        this.button.innerHTML = this.filename;
        this.button.setAttribute("class", "tablinks");
        this.button.setAttribute("onclick","openfile(event,'" +this.filename+"' )");
        var tabs = document.getElementById("tabs");
        //Append the element in page (in span).
        tabs.appendChild(this.button);
    }

    createeditor(){
        this.container = document.createElement("div");

        this.container.setAttribute("id",this.filename);
        this.container.setAttribute("class","tabcontent");

        this.editordiv = document.createElement("div");
        this.editordiv.setAttribute("id",this.filename+"editor");
        this.editordiv.setAttribute("class","editor");

        var selectoption =     `<select onchange="tabs['`+this.filename+`'].changelanguage(value)">
                            <option  value="python">Python</option>
                            <option  value="c++">C++</option>
                            <option  value="javascript">Javascript</option>
                            <option  value="java">java</option>
                            </select>`;




        this.editordiv.innerText =  `function foo(items) {
        var x = \"All this is syntax highlighted\";
        return x;}`;

        this.container.innerHTML = selectoption;
        this.container.appendChild(this.editordiv);

        document.body.appendChild(this.container);


        this.editor = ace.edit(this.filename+'editor');
        this.editor.setTheme("ace/theme/monokai");
        this.editor.session.setMode("ace/mode/javascript");


    }

    changelanguage(language) {
        console.log("hello");
        this.editor.session.setMode("ace/mode/"+language);
    }
}
tabs = {};

function addtab(event) {
    var name = new tab(event);
    tabs[name.filename] = name

}