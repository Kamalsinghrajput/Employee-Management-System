import { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("")
  };
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw]">
      <div className="flex flex-col justify-center  items-center gap-7 bg-[#03001C] h-[500px] p-[30px] rounded-2xl">
        <div>Log In</div>

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-4 "
          action=""
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-[1px] rounded-2xl py-[5px] px-[10px] w-[300px] outline-none"
            type="email"
            placeholder="Enter your email"
          />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            required
            className="border-[1px] rounded-2xl py-[5px] px-[10px] w-[300px] outline-none"
            type="password"
            placeholder="Enter your password"
          />
          <div className="flex justify-between w-[300px]">
            <div>
              <input type="checkbox" />
              Remember me
            </div>
            <div>
              <a href="">Forgot password</a>
            </div>
          </div>
          <button className="bg-[#008170] rounded-2xl py-[5px] px-[10px] w-[300px]">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
