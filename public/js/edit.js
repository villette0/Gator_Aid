const editButtonHandler = async (event) => {
    event.preventDefault();
        const title = document.querySelector('#title');
        const sighting = document.querySelector('#sighting');
        const description = document.querySelector('#description');
        const date = document.querySelector('#date');
      const id = document.querySelector('#post-id');
      const postId = id.getAttribute('data-id');
  
      if (title && sighting && description && date) {
          console.log(postId);
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, sighting, description, date}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to edit post');
      }
    }
  };

  document
        .querySelector('.edit-form')
        .addEventListener('submit', editButtonHandler);
