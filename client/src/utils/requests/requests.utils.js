const SERVER = "http://localhost:8080/api/v1";

export async function getBlogPosts() {
  try {
    const response = await fetch(`${SERVER}/blogs/all`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getBlogPost(blogId) {
  try {
    const response = await fetch(`${SERVER}/blogs/${blogId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createBlog(blogObj) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogObj),
  };
  try {
    const response = await fetch(`${SERVER}/blogs/`, options);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getAuthorDetails(authorId) {
  try {
    const response = await fetch(`${SERVER}/authors/${authorId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAuthorBlogs(authorId) {
  try {
    const response = await fetch(`${SERVER}/authors/authorBlogs/${authorId}`);
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

export async function deleteDraft(draftId) {
  try {
    const response = await fetch(`${SERVER}/drafts/deleteDraft/${draftId}`, {
      method: "DELETE",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getDraft(draftId) {
  try {
    const response = await fetch(`${SERVER}/drafts/getDraft/${draftId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getDraftsByAuthor(authorId) {
  try {
    const response = await fetch(`${SERVER}/drafts/authorDrafts/${authorId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createOrUpdateDraft(draftObj) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(draftObj),
  };
  try {
    const response = await fetch(`${SERVER}/drafts/updateDraft`, options);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getNewDraftId() {
  try {
    const response = await fetch(`${SERVER}/drafts/draftsCount`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
