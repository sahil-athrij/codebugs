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

        this.createbutton();
        this.createeditor();
        this.createform();
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

        var selectoption =     `<select onchange="tabs['`+this.filename+`'].changelanguage(value)" class = "languageselect">
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

        var editorbody = document.getElementById("editor_location");
        editorbody.appendChild(this.container);


        this.editor = ace.edit(this.filename+'editor');
        this.editor.setTheme("ace/theme/monokai");
        this.editor.session.setMode("ace/mode/javascript");

        this.savebutton = document.createElement("button");
        this.savebutton.innerHTML = "save";
        this.savebutton.setAttribute("onclick","tabs['" +this.filename+"'].savefile()");
        document.body.appendChild(this.savebutton)


    }

    changelanguage(language) {
        console.log("hello");
        this.editor.session.setMode("ace/mode/"+language);
    }

    createform(){
        var internal =  `<form action = "/cgi-bin/form.py" method = "post" target = "_blank" style= "display:none">
                            <textarea name = "textcontent" cols = "40" rows = "4" id = "textarea`+this.filename+`">
                            
                            </textarea>
                            <input type = "submit" value = "Submit" id = "send`+this.filename+`"/>
                        </form>`;

        this.form  = document.createElement("div");
        this.form.innerHTML = internal;
        this.form.setAttribute("id",this.filename+"form");
        var forms = document.getElementById("hiddenforms");
        forms.appendChild(this.form);
        console.log("Ehhlo");

    }

    savefile(){
        var fo = document.getElementById("textarea"+this.filename);
        fo.innerText = this.editor.getValue();
        var bu = document.getElementById("send"+this.filename)
        bu.click();
    }

}
tabs = {};

function addtab(event) {
    var name = new tab(event);
    tabs[name.filename] = name

}