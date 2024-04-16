import { MdEmail } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

function VerifyEmail() {
  const emailId = `john.doe@example.com`;
  return (
    <div className=" max-w-2xl mx-4 sm:mx-auto p-4 h-full flex flex-col justify-center gap-8 text-center">
      <div className="text-md text-slate-500 flex flex-col gap-3">
        <h1 className="text-2xl font-semibold text-black">{`Please verify your  email...`}</h1>
        <div className="relative w-max mx-auto px-1">
          <div className=" text-7xl text-zinc-400">
            <MdEmail />
          </div>
          <div className=" text-2xl text-dribby-primarycolor ring-4 ring-white absolute top-0 right-0 bg-white rounded-full">
            <FaCheckCircle />
          </div>
        </div>
        <h2 className="">
          {`Please verify your email address. We've sent a confirmation email to:`}
        </h2>
        <h1 className=" font-semibold text-black">{emailId}</h1>
        <h2>{`Click the confirmation link in that email to begin using Dribbble.`}</h2>
        <h2>
          {`Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If
you still don't see it, you can `}
          <a className="font-bold text-dribby-primarycolor cursor-pointer">{`resend the confirmation email.`}</a>
        </h2>
        <h2>
          {`Wrong email address? `}
          <a className="font-bold text-dribby-primarycolor cursor-pointer">{`Change it.`}</a>
        </h2>
      </div>
    </div>
  );
}

export default VerifyEmail;
