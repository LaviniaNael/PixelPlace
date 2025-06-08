document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".interactions").forEach((container) => {
    const likeBtn = container.querySelector(".like-btn");
    const heartImg = container.querySelector(".heart-toggle");
    const commentBtn = container.querySelector(".comment-btn");
    const commentSection = container.nextElementSibling;

    const commentInput = commentSection.querySelector(".comment-input");
    const commentSubmit = commentSection.querySelector(".comment-submit");
    const commentList = commentSection.querySelector(".comment-list");

    function toggleLike() {
      const isLiked = heartImg.classList.toggle("liked");
      heartImg.src = isLiked ? "/assets/red_heart.jpg" : "/assets/heart.jpg";
      likeBtn.classList.toggle("liked");
    }

    likeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      toggleLike();
    });

    heartImg.addEventListener("click", toggleLike);

    commentBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (commentSection) {
        const isVisible = commentSection.style.display === "block";
        commentSection.style.display = isVisible ? "none" : "block";
      }
    });
    commentSubmit.addEventListener("click", () => {
      const text = commentInput.value.trim();
      if (text !== "") {
        const newComment = document.createElement("p");
        newComment.textContent = text;
        commentList.appendChild(newComment);
        commentInput.value = ""; // Clear input
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".add").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.textContent = "Accepted";
      btn.style.color = "#ccc";
      btn.style.pointerEvents = "none";
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".add_new").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.textContent = "Request Sent";
      btn.style.color = "#ccc";
      btn.style.pointerEvents = "none";
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('loginModal');
  const openBtn = document.getElementById('openLogin');
  const closeBtn = document.querySelector('.close-btn');

  // Open the modal
  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex'; 
  });

  // Close with the close button
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close when clicking outside the modal content
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

