async function createPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const post_body = document.querySelector("#post-content").value.trim();
    const ingredients = document.querySelector("#ingredients").value.trim();

        const response = await fetch("/api/post/", {
            method: 'POST',
            body: JSON.stringify({
                title,
                post_body,
                ingredients
            }),
            headers: {
                'Content-Type': 'application/json'
            }

        });

        if (response.ok) {
                document.location.replace('/');
        } else {
            alert(response.statusText);
        };
    console.log('click')
};

document.querySelector('.btn').addEventListener('click', createPostHandler);