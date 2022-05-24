const title = document.getElementById("title").value.trim();
const ingredients = document.getElementById("ingredients").value.trim();
const postContent = document.getElementById("post-content").value.trim();

if (title && ingredients && instructions) {
    const response = await fetch("/api/post-routes", {
        method: 'post',
        body: JSON.stringify({
            title,
            ingredients,
            postContent
        }),
        headers: {
            'Content-Type': 'application/json'
        }

    });

    if (response.ok) {
        async function createPostHandler(event) {

        };
    } else {
        alert(response.statusText);
    };
};


document.querySelector('#create-new-post').addEventListener('click', createPostHandler);