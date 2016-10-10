
(function (window) {
    byeSpeaker = {};


    byeSpeaker.speakWord = (function speak(names) {
        var speakWord = "Good Bye";

        var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

           for (var i = 0; i < names.length; i++) {

            
            var firstLetter = names[i].charAt(0).toLowerCase();
           
            if (firstLetter === 'j') {
                console.log(speakWord + " " + (names[i]));
            }
            
            window.byeSpeaker = byeSpeaker;
        }
       
    })();

})(window);