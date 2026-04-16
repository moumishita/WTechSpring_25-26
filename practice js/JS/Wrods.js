
function AnalyzeText()
{
    let textinput = document.getElementById("textarea").value;

    let charcount = textinput.length;

    let words = textinput.split(" ");
    let wordCount = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            wordCount++;
        }
    }
    let reversedText = "";
    for (let j = textinput.length - 1; j >= 0; j--) {
        reversedText += textinput[j];
    }
    document.getElementById("charCount").innerText = charCount;
    document.getElementById("wordCount").innerText = wordCount;
    document.getElementById("reversedDisplay").innerText = reversedText;
    return false;

}