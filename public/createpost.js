const res = require("express/lib/response");

const title = document.getElementById("title").value.trim();
const ingredients = document.getElementById("ingredients").value.trim();
const post_body = document.getElementById("post-content").value.trim();


async function createPostHandler(event) {

    if (title && ingredients && post_body && user_id) {
        const response = await fetch("/api/post", {
            method: 'post',
            body: JSON.stringify({
                title,
                post_body,
                ingredients,
                user_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }

        });

        if (response.ok) {
                document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        };
    };
};

document.querySelector('#create-new-post').addEventListener('click', createPostHandler);