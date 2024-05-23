document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", function () {
    const form = document.getElementById("discForm");
    const questions = form.querySelectorAll(".question");
    const responses = form.querySelectorAll('input[type="radio"]:checked');
    let isComplete = questions.length === responses.length;

    if (!isComplete) {
      alert("กรุณาทำแบบทดสอบให้ครบทุกข้อ ก่อนส่งแบบทดสอบ!");
      return;
    }

    const counts = { D: 0, I: 0, S: 0, C: 0 };
    responses.forEach((response) => {
      counts[response.value]++;
    });

    let maxType = "D"; // Default to 'D'
    let maxValue = counts.D;

    for (const type in counts) {
      if (counts[type] > maxValue) {
        maxType = type;
        maxValue = counts[type];
      }
    }

    // Save results to local storage
    localStorage.setItem("resultType", maxType);
    window.location.href = "results.html"; // Redirect to results page
  });
});
