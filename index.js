$(document).ready(function () {
    const textAreas = $('.textarea1');
    const accuracyElements = $('.level h5:nth-child(1)');
    const wpmElements = $('.level h5:nth-child(2)');
    const wordsPerMinute = 150; // Adjust this value based on your desired words per minute.

    function calculateAccuracyAndWPM(index, id) {
        const originalText = $('.level').eq(index).find('p').text().trim();
        const userInput = textAreas.eq(index).val().trim();
        const originalWords = originalText.split(/\s+/).filter(word => word !== '');
        const userWords = userInput.split(/\s+/).filter(word => word !== '');

        // Calculate accuracy
        const correctWords = userWords.filter((word, i) => word === originalWords[i]);
        const accuracy = (correctWords.length / originalWords.length) * 100 * 2 + 4;

        console.log("correctWords" + correctWords); // Check the selected elements

        // Calculate words per minute
        const elapsedTimeInSeconds = 60; // Assuming you measure the time in seconds
        const elapsedTimeInMinutes = elapsedTimeInSeconds / 60;
        const wordsPerMinuteValue = Math.round(userWords.length / elapsedTimeInMinutes);

        console.log(`Accuracy: ${accuracy.toFixed(2)}%`);
        console.log(`Words per Minute: ${wordsPerMinuteValue}`);
        console.log(accuracyElements); // Check the selected elements
        console.log(wpmElements); // Check the selected elements

        $('#time' + id).text("Words per Minute:" + wordsPerMinuteValue);
        $('#acc' + id).text(`Accuracy: ${accuracy.toFixed(2)}%`);
    }

    // Attach event listeners to each textarea
    textAreas.on('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const index = textAreas.index(this);
            calculateAccuracyAndWPM(index, 1);
        }
    });

    // Assuming you have textArea2
    const textAreas2 = $('.textarea2');

    textAreas2.on('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const index = textAreas2.index(this);
            calculateAccuracyAndWPM(index, 2);
        }
    });
});
