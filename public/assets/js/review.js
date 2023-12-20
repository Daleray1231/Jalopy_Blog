document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');

    reviewForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const titleValue = document.getElementById('title').value;
        const bodyValue = document.getElementById('body').value;

        try {
            const response = await fetch('/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: titleValue,
                    body: bodyValue,
                    carId: window.location.href.split('/').pop(),
                }),
            });

            if (response.ok) {
                // Reload the page or update the reviews dynamically
                window.location.reload();
            } else {
                console.error('Failed to submit review');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    });
});

