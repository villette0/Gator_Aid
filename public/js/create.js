const createNewPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const description = document.querySelector("#description").value.trim();
    const sighting = document.querySelector("#detail").value.trim();

    if (title && description && sighting) {
        const response = await fetch(`/api/posts/`, {
            method: 'POST',
            body: JSON.stringify({ title, description, sighting }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('failed to create new post');
        }

    }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', createNewPost);