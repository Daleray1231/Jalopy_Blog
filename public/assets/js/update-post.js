
document.addEventListener('DOMContentLoaded', function () {
    const reviews = [];

    function displayContent() {
        const reviewList = document.getElementById('review-list');
        reviewList.innerHTML = '';

        for (let i = 0; i < review.length; i++) {
            const listItem = document.createElement('li');
            listItem.innerHTML = review[i];
            reviewList.appendChild(listItem);
        }
    }

    reviews.forEach(review => {
        const reviewElement = document.createElement('p');
        reviewElement.textContent = `review: ${review}`;

    });
})


const addReviewBtn = document.getElementById('add-review-btn');
addReviewBtn.addEventListener('click', function (event) {
    const reviewInput = document.getElementById('review-input');
    const newReview = reviewInput.value.trim();

    if (newReview !== ' ') {
        review.push(newReview);

        displayContent();

        reviewInput.value = '';
    }
});