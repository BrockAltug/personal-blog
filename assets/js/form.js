document.addEventListener("DOMContentLoaded", () => {
    // Get the form element
    const form = document.getElementById("blog-form");

    // Add event listener to handle form submission
    form.addEventListener("submit", handleFormSubmit);
});

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values from the form
    const username = document.getElementById("username").value.trim();
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    // Validate form inputs
    if (!username || !title || !content) {
        alert("Please complete all fields before submitting."); // Display error message if any field is empty
        return;
    }

    // Create a blog post object
    const blogPost = {
        username,
        title,
        content,
        date: new Date().toISOString() // Optional: Add a timestamp
    };

    // Retrieve existing posts from localStorage or initialize an empty array
    let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    // Add the new post to the array
    posts.push(blogPost);

    // Save the updated posts array to localStorage
    localStorage.setItem("blogPosts", JSON.stringify(posts));

    // Redirect to the blog page after successful submission
    window.location.href = "blog.html";
}