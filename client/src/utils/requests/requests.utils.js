const SERVER = "http://localhost:8080";

export async function getBlogPosts() {
  try {
    const response = await fetch(`${SERVER}/blogs`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getBlogPost(blogId) {
  try {
    const response = await fetch(`${SERVER}/blog/${blogId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAuthorDetails(authorId) {
  try {
    const response = await fetch(`${SERVER}/author/${authorId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAuthorBlogs(authorId) {
  try {
    const response = await fetch(`${SERVER}/authorBlogs/${authorId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(userObj) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj),
  };
  try {
    const response = await fetch(`${SERVER}/users`, options);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getUser(userEmail) {
  try {
    const response = await fetch(`${SERVER}/users/${userEmail}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
