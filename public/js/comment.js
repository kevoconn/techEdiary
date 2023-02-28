const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-comment').value.trim();
    const description = document.querySelector('#comment-description').value.trim();
   
  
    if (name && description) {
      const response = await fetch('/api/users', {
        method: 'PUT',
        body: JSON.stringify({ name, description }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.name-comment')
  .addEventListener('submit', newFormHandler);