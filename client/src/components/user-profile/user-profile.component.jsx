import { getUser, getAuthorBlogs } from "../../utils/requests/requests.utils";

export function UserProfile({ userName, userEmail }) {
  const user = getUser(userEmail);
  const blogs = getAuthorBlogs(user.authorId);

  return (
    <div>
      <h1>Hello, {userName} </h1>
    </div>
  );
}
