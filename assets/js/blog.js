document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the blog posts from localStorage
    const posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    // Get the container where the posts will be displayed
    const postsContainer = document.getElementById("posts-list");

    // Render the posts on the page
    renderPosts(posts);

    // Add event listener for the "New Post" button
    const backButton = document.getElementById("back-btn");
    if (backButton) {
        backButton.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    // Add event listener for the "Clear All Posts" button
    const clearPostsButton = document.getElementById("clear-posts-btn");
    if (clearPostsButton) {
        clearPostsButton.addEventListener("click", clearAllPosts);
    }
});

// Function to render posts on the page
function renderPosts(posts) {
    const postsContainer = document.getElementById("posts-list");
    if (posts.length === 0) {
        postsContainer.innerHTML = "<p>No blog posts available. Please add a new post.</p>";
        return;
    }

    // Clear any existing content
    postsContainer.innerHTML = "";

    // Loop through the posts and create HTML elements for each post
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.className = "post";

        const titleElement = document.createElement("h2");
        titleElement.textContent = post.title;
        postElement.appendChild(titleElement);

        const authorElement = document.createElement("p");
        authorElement.textContent = `By: ${post.username}`;
        postElement.appendChild(authorElement);

        const contentElement = document.createElement("p");
        contentElement.textContent = post.content;
        postElement.appendChild(contentElement);

        const dateElement = document.createElement("small");
        dateElement.textContent = `Posted on: ${new Date(post.date).toLocaleDateString()}`;
        postElement.appendChild(dateElement);

        // Append the post element to the container
        postsContainer.appendChild(postElement);
    });
}

// Function to clear all blog entries
function clearAllPosts() {
    // Confirm before clearing all posts
    if (confirm("Are you sure you want to clear all blog posts?")) {
        // Clear the posts from localStorage
        localStorage.removeItem("blogPosts");

        // Clear the posts from the page
        document.getElementById("posts-list").innerHTML = "<p>No blog posts available. Please add a new post.</p>";
    }
}