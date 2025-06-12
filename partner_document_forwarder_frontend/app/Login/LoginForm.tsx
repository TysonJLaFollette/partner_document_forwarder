import Image from "next/image";

export default function LoginForm() {
  return (
    <div className="bg-black/[.05]">
      <div className="">
        <h2>
          Login
        </h2>
        <p>Sorry friend, you have to log in to experience this demo. If you were directed here but weren't provided login credentials, please speak with Tyson LaFollette.</p>
        <label>Username</label>
        <input></input>
        <label>Password</label>
        <input></input>
        <button>Log In</button>
      </div>
    </div>
  );
}
