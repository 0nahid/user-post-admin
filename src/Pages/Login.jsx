import useAuth from "../Hooks/useAuth";

export default function Login() {
  const { signInWithGoogle } = useAuth();
  return (
    <div className=" bg-gray-300">
      <div className="container h-screen flex justify-center items-center m-auto">
        <div className="w-1/4 p-8 bg-white rounded-lg max-w-6xl pb-10">
          <div className="flex justify-center mb-4">
            {" "}
            <h1 className="font-bold">LOGIN HERE</h1>{" "}
          </div>{" "}
          <button className="uppercase h-12 mt-3 text-white w-full rounded bg-blue-800 hover:bg-blue-900">
            <i className="fa fa-facebook mr-2"></i>Facebook
          </button>{" "}
          <div className="flex justify-between items-center mt-3">
            <hr className="w-full" />{" "}
            <span className="p-2 text-gray-400 mb-1">OR</span>
            <hr className="w-full" />
          </div>{" "}
          <button
            onClick={signInWithGoogle}
            className="uppercase h-12 mt-3 text-white w-full rounded bg-red-800 hover:bg-red-900"
          >
            <i className="fa fa-google mr-2"></i>Google
          </button>
        </div>
      </div>
    </div>
  );
}