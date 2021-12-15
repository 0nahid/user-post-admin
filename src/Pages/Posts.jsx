import { Link } from "react-router-dom";

export default function Posts(props) {
  const { title, id } = props.post;
  return (
    <>
      <div className="my-2 p-5 px-2 w-full overflow-hidden sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4">
        <div>
          <h1>{title.toUpperCase()}</h1>
        </div>
        <div>
          <Link to={`posts/${id}`} style="background-color:blue ; border: none; color: white; padding: 5px 10px;">View Post</Link>
        </div>
      </div>
    </>
  );
}
