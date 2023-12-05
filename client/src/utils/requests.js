export async function getBlogPosts() {
  try {
    const response = await fetch("http://localhost:8080/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error; // Re-throw the error for the calling code to handle if needed
  }
}
