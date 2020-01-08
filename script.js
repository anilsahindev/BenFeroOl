
(function() { 

    var getRaps = new XMLHttpRequest(),
        verseCount = 4,
        lineCount = 4,
        rap_file = "./rap.txt",
        lineLenght = 4,
        lineMaxLenght = 5,
        createNewSong = document.getElementById("benFeroOl");
        wordsForLine = [],
        rap = "",
        rapLine = "";

    var  verseNumberCreate =function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRaps.open('GET', "rap.txt", false);
    getRaps.send();

    rap = getRaps.responseText;

    rapLine = rap.split("\n");

    for (oneVerse in rapLine) {
        rapLine[oneVerse] = rapLine[oneVerse].replace("\n", "");
        rapLine[oneVerse] = rapLine[oneVerse].replace("****", "");
        lineWordsCount = rapLine[oneVerse].split(" ");

        for (verseWords in lineWordsCount) {
            lineWordsCount[verseWords] = lineWordsCount[verseWords].replace("\n", "");
            wordsForLine.push(lineWordsCount[verseWords].toLowerCase());
        }
    }
    var verseCreateFour = function() {
        lineLimit = verseNumberCreate(lineLenght, lineMaxLenght);
        verseEnd = "";
        for (i = 0; i < lineLimit; i++) {
            randomNumber = verseNumberCreate(0, wordsForLine.length - 1);
            verseEnd += wordsForLine[randomNumber] + " ";
        }
        verseEnd = verseEnd.charAt(0).toUpperCase() + verseEnd.slice(1);
        return verseEnd
    }


    var verseCreate = function() {
        var line = "";
        for (x = 0; x < lineCount; x++) {
            line += verseCreateFour() + "<br>";
        }
        return line;
    }

    var createNewSong = function() {
        var newSong = "";
        for (y = 0; y < verseCount; y++) {
            newSong += verseCreate() + "<br>";
        }
        console.log(newSong);
        document.getElementById('sarkim').innerHTML = newSong;
    }

    var createSongName = function() {
        title = wordsForLine[verseNumberCreate(0, wordsForLine.length - 1)] + " " + wordsForLine[verseNumberCreate(0, wordsForLine.length - 1)] + " " + wordsForLine[verseNumberCreate(0, wordsForLine.length - 1)];
        document.getElementById('sarkiAdi').innerHTML = title.toUpperCase();
    }

    createSongName();
    createNewSong();

    var btn = document.getElementById("benFeroOl");
    btn.addEventListener("click", function(){
        createSongName();
        createNewSong();
    })




})();