function generateFibonacci() {
    var numTerms = parseInt(document.getElementById("numTerms").value);
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous content

    if (numTerms <= 0) {
        outputDiv.innerHTML = "Please enter a positive integer.";
        return;
    }

    var fibSeq = [0, 1];
    for (var i = 2; i < numTerms; i++) {
        fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
    }

    outputDiv.innerHTML = "Fibonacci Sequence: " + fibSeq.join(", ");
}
