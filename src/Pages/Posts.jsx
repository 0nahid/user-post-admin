import { Link } from "react-router-dom";

export default function Posts(props) {
  const { title, id } = props.post;
  return (
    <>
      <div className="p-5 w-full overflow-hidden sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 border">
        <div className=" text-base ">
          <h1>{title.toUpperCase()}</h1>
        </div>
        <div className=" mt-4 ">
          <Link
            to={`posts/${id}`}
            className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded"
          >
            View Post
          </Link>
        </div>
      </div>
    </>
  );
}
