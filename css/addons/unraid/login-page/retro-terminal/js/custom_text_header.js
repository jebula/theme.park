
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>  _ \    \      ___|   |  /     \     |  /     \      ___|     \   
 |   |  _ \   \___ \   ' /     _ \    ' /     _ \   \___ \    _ \  
 ___/  ___ \        |  . \    ___ \   . \    ___ \        |  ___ \ 
_|   _/    _\ _____/  _|\_\ _/    _\ _|\_\ _/    _\ _____/ _/    _\
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
