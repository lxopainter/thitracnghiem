function calculateScore() {
    const form = document.getElementById('quizForm');
    const resultElement = document.getElementById('result');

    // Các câu trả lời đúng cho từng ý
    const correctAnswers = {
        q1_a: 'true',  // Thay thế với câu trả lời đúng cho Ý A
        q1_b: 'false', // Thay thế với câu trả lời đúng cho Ý B
        q1_c: 'true',  // Thay thế với câu trả lời đúng cho Ý C
        q1_d: 'false'  // Thay thế với câu trả lời đúng cho Ý D
    };

    let correctCount = 0;

    // Kiểm tra số lượng câu trả lời đúng cho từng ý
    for (let key in correctAnswers) {
        const selectedAnswer = form.querySelector(`input[name=${key}]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[key]) {
            correctCount++;
        }
    }

    // Tính điểm
    let score;
    if (correctCount === 4) {
        score = 1.0;
    } else if (correctCount === 3) {
        score = 0.5;
    } else if (correctCount === 2) {
        score = 0.25;
    } else if (correctCount === 1) {
        score = 0.1;
    } else {
        score = 0.0;
    }

    resultElement.textContent = `Điểm số của bạn là: ${score}`;
}
