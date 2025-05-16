'use strict';

window.addEventListener('DOMContentLoaded', () => {
// Logout button sends back to login page
  document.getElementById('logoutBtn').addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  const imageInput = document.getElementById('imageInput');
  document.getElementById('imageUploadBtn').addEventListener('click', () => {
    imageInput.click();
  });
 
  document.getElementById('postBtn').addEventListener('click', () => {
    const content = document.getElementById('newPostContent').value.trim();
    if (content === "") return; 

// Create post elements

    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    const pic = document.createElement('img');
    pic.src = '../img/user-profile.jpg';
    pic.alt = 'You';
    pic.className = 'post-pic';
    postDiv.appendChild(pic);

    const body = document.createElement('div');
    body.className = 'post-body';

    const header = document.createElement('div');
    header.className = 'post-header';
    header.innerHTML = `<strong>Haodi Hua</strong> <span class="date">${new Date().toDateString()}</span>`;
    body.appendChild(header);

    const p = document.createElement('p');
    p.textContent = content;
    body.appendChild(p);

    const file = imageInput.files[0];
    if (file) {
      const img = document.createElement('img');
      img.className = 'post-img';
      img.src = URL.createObjectURL(file);
      body.appendChild(img);
    }

    postDiv.appendChild(body);

// Insert the new post at the top of the feed
    const feed = document.getElementById('feed');
    feed.insertBefore(postDiv, feed.firstChild);

    document.getElementById('newPostContent').value = "";
    imageInput.value = "";
  });

// Fetch 10 random users for "People you may know"

  fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
      const suggestions = document.getElementById('suggestions');
      data.results.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'suggestion';

        const avatar = document.createElement('img');
        avatar.src = user.picture.thumbnail;
        avatar.alt = user.name.first;
        userDiv.appendChild(avatar);

        const info = document.createElement('div');
        info.innerHTML = 
          `<div class="name">${user.name.first} ${user.name.last}</div>` +
          `<div class="location">${user.location.city}</div>`;
        userDiv.appendChild(info);

        const addBtn = document.createElement('button');
        addBtn.className = 'add-btn';
        addBtn.textContent = '+';
        userDiv.appendChild(addBtn);

        suggestions.appendChild(userDiv);
      });
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
});
