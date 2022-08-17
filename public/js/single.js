const createNewComment = async (event => {
    event.preventDefault();

    const comment = document.querySelector('#comment-input').value.trim();
    const post = document.querySelector('.single-post-container');
    const postId = post.getAttribute('data-id');

    if (comment && post-id) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment, postId }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create comment');
        }
    }
});