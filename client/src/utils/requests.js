export async function getBlogPosts() {
  try {
    const response = await fetch("http://localhost:8080/blogs");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getBlogPost(blogId) {
  try {
    const response = await fetch(`http://localhost:8080/blog/${blogId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAuthorDetails(authorId) {
  try {
    const response = await fetch(`http://localhost:8080/author/${authorId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAuthorBlogs(authorId) {
  try {
    const response = await fetch(
      `http://localhost:8080/authorBlogs/${authorId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
