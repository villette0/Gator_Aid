// const editBtnEl = document.getElementById('edit-button')

// const editPost = async (event) => {
//     event.preventDefault();
    
//     document.location.replace('/edit-post');
//     }


//   document
//     .querySelector('edit-button')
//     addEventListener('submit', editPost);

//     var recallCity = (event.target.innerHTML);
//     console.log(recallCity);

    const editButtonHandler = async (event) => {
        if (event.target.hasAttribute('data-id')) {
          const id = event.target.getAttribute('data-id');
      
          const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
          });
      
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to edit post');
          }
        }
      };

   const delButtonHandler = async (event) => {
        if (event.target.hasAttribute('data-id')) {
          const id = event.target.getAttribute('data-id');
      
          const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to delete project');
          }
        }
      };
      
      
      document
        .querySelector('.delete-button')
        .addEventListener('click', delButtonHandler);

        document
        .querySelector('.edit-button')
        .addEventListener('click', editButtonHandler);
    
