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

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("loginModal");
  const openBtn = document.getElementById("openLogin");
  const closeBtn = document.querySelector(".close-btn");

  // Open the modal
  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });

  // Close with the close button
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close when clicking outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

/*profile js for colors */
document.addEventListener("DOMContentLoaded", function () {
  const colorThemes = {
    orange: {
      "--color-Name-1": "rgb(236, 104, 56)",
      "--color-grad2": "rgb(168, 48, 0)",
      "--color-grad3": "rgb(255, 81, 0)",
      "--color-bg4": "rgba(250, 177, 135, 0.5)",
      "--color-border5": "rgba(253, 134, 91, 0.69)",
      "--color-barBtn6": "rgba(238, 93, 41, 0.582)",
      "--color-gifBG7": "rgba(255, 135, 23, 0.5)",
      "--color-topfreds8": "rgba(247, 133, 57, 0.5)",
      "--color-abtMeBG9": "rgba(255, 103, 48, 0.37)",
      "--color-pets10": "rgba(231, 112, 0, 0.4)",
      "--color-blogs11": "rgba(255, 106, 52, 0.4)",
    },
    pink: {
      "--color-Name-1": "rgb(243, 85, 182)",
      "--color-grad2": "rgb(172, 27, 140)",
      "--color-grad3": "rgb(241, 164, 241)",
      "--color-bg4": "rgba(233, 53, 218, 0.4)",
      "--color-border5": "rgb(155, 28, 134)",
      "--color-barBtn6": "rgb(139, 58, 115)",
      "--color-gifBG7": "rgba(238, 155, 195, 0.4)",
      "--color-topfreds8": "rgba(250, 82, 236, 0.5)",
      "--color-abtMeBG9": "rgba(134, 56, 108, 0.5)",
      "--color-pets10": "rgba(255, 53, 211, 0.4)",
      "--color-blogs11": "rgba(255, 118, 203, 0.4)",
    },
    green: {
      "--color-Name-1": "rgb(76, 187, 23)",
      "--color-grad2": "rgb(35, 99, 6)",
      "--color-grad3": "rgb(198, 255, 171)",
      "--color-bg4": "rgba(75, 187, 23, 0.5)",
      "--color-border5": "rgb(94, 219, 100)",
      "--color-barBtn6": "rgb(52, 161, 52)",
      "--color-gifBG7": "rgba(28, 85, 28, 0.5)",
      "--color-topfreds8": "rgba(17, 168, 83, 0.6)",
      "--color-abtMeBG9": "rgba(147, 197, 114, 0.5)",
      "--color-pets10": "rgba(85, 231, 0, 0.4)",
      "--color-blogs11": "rgba(173, 255, 118, 0.4)",
    },
    grey: {
      "--color-Name-1": " rgb(54, 54, 54)",
      "--color-grad2": "rgb(20, 20, 20)",
      "--color-grad3": "rgb(184, 184, 184)",
      "--color-bg4": "rgba(110, 110, 110, 0.6)",
      "--color-border5": "rgb(105, 105, 105)",
      "--color-barBtn6": "rgb(66, 66, 66)",
      "--color-gifBG7": "rgba(107, 107, 107, 0.6)",
      "--color-topfreds8": "rgba(131, 131, 131, 0.5)",
      "--color-abtMeBG9": "rgba(37, 37, 37, 0.5)",
      "--color-pets10": "rgba(131, 131, 131, 0.8)",
      "--color-blogs11": "rgba(212, 212, 212, 0.8)",
    },
  };

  const customizeBtn = document.getElementById("customize-btn");
  const colorOptions = document.getElementById("color-options");

  customizeBtn.addEventListener("click", () => {
    colorOptions.style.display =
      colorOptions.style.display === "none" ? "flex" : "none";
  });

  document.querySelectorAll(".color-swatch").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const color = e.target.getAttribute("data-color");
      const theme = colorThemes[color];
      for (const variable in theme) {
        document.documentElement.style.setProperty(variable, theme[variable]);
      }
    });
  });
});

/*COLOR CHANGER FOR THE HEART */
const colorMap = {
  orange: 'https://i.postimg.cc/wvWMTwhz/orangeheart.gif',
  pink: 'https://i.postimg.cc/RFCqBkJG/pinkheart.gif',
  green: 'https://i.postimg.cc/mryhKLkt/greenheart.gif',
  grey: 'https://i.postimg.cc/d0YLWkqb/greyheart.gif'
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.color-swatch2').forEach(btn => {
    btn.addEventListener('click', () => {
      const color = btn.getAttribute('data-color');
      const imgSrc = colorMap[color];
      if (imgSrc) {
        document.getElementById('heart-img').src = imgSrc;
      }
    });
  });
});
