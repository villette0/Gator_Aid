const editButtonHandler = async (event) => {
    event.preventDefault();
        const title = document.querySelector('#title').value.trim();
        const sighting = document.querySelector('#sighting').value.trim();
        const description = document.querySelector('#description').value.trim();
        const date = document.querySelector('#date').value.trim();
      const id = document.querySelector('#post-id');
      const postId = id.getAttribute('data-id');
  
      if (title && sighting && description && date) {
          console.log(postId);
          console.log(title);
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({ title, sighting, description, date }),
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
