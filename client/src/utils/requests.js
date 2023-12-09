export async function getBlogPosts() {
  try {
    const response = await fetch("http://localhost:8080/blogs");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getBlogPost(id) {
  try {
    const response = await fetch(`http://localhost:8080/blog/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAuthorDetails(id) {
  try {
    const response = await fetch(`http://localhost:8080/author/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
