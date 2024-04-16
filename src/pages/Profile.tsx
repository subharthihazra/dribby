import React, { useState } from "react";
import avatar from "../assets/avatar.png";
import cause_1 from "../assets/cause_1.png";
import cause_2 from "../assets/cause_2.png";
import cause_3 from "../assets/cause_3.png";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [curform, setCurform] = useState<number>(1);

  return (
    <div className="flex flex-col h-full">
      <div className="m-4">
        <div className="font-pacifico text-2xl font-thin text-dribby-primarycolor">
          Dribby
        </div>
        {curform === 1 && <Form1 setCurform={setCurform} />}
        {curform === 2 && <Form2 />}
      </div>
    </div>
  );
}

function Form1({ setCurform }: any) {
  const [file, setFile] = useState<string | undefined>();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
  }

  return (
    <div className=" max-w-lg mx-auto p-4 h-full flex flex-col justify-center gap-8">
      <div>
        <h1 className="text-2xl font-semibold">{`Welcome! Let's create your profile`}</h1>
        <h2 className="text-sm text-slate-500">
          Let others get to know you better! You can do these later
        </h2>
      </div>
      <form
        method="POST"
        className="flex flex-col gap-8"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex flex-col gap-4">
          <label
            className="block text-lg text-black font-bold mb-2"
            htmlFor="avatar"
          >
            Add an Avatar
          </label>
          <PhotoSelect file={file} handleChange={handleChange} name="avatar" />
        </div>
        <div className="mb-4">
          <label className="block " htmlFor="location">
            <h1 className="text-lg text-black font-bold mb-2">
              Add your Location
            </h1>
            <h2 className="text-sm text-gray-500 mb-2">Enter a location</h2>
          </label>
          <Input type="text" name="location" id="location" placeholder="" />
        </div>

        <button
          className="flex justify-center w-52 py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium bg-dribby-primarycolor text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dribby-primarycolor"
          type="submit"
          onClick={() => setCurform(2)}
        >
          Next
        </button>
      </form>
    </div>
  );
}

function Form2() {
  const navigate = useNavigate();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
  }

  return (
    <div className=" mx-auto p-4 h-full flex flex-col justify-center gap-8 text-center">
      <div>
        <h1 className="text-2xl font-semibold">{`What brings you to dribby?`}</h1>
        <h2 className="text-sm text-slate-500">
          {`Select the options that best describes you. Don't worry, you can explore other options later.`}
        </h2>
      </div>
      <form
        method="POST"
        className="flex flex-col gap-8"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-6 justify-center flex-col md:flex-row md:mt-24">
          <CustomRadio
            name="cause1"
            id="cause1"
            text={`I'm a designer looking to share my work`}
            description={`If you're a designer eager to showcase your creations and gain exposure, this option is for you.`}
            src={cause_1}
          />
          <CustomRadio
            name="cause2"
            id="cause2"
            text={`I'm looking to hire a designer`}
            description={`If you're in search of talented designers to bring your ideas to life, select this option.`}
            src={cause_2}
          />
          <CustomRadio
            name="cause3"
            id="cause3"
            text={`I'm looking for design inspiration`}
            description={`If you're seeking fresh ideas and creative inspiration for your projects, choose this option.`}
            src={cause_3}
          />
        </div>
        <div className="mt-12">
          <div className="font-bold">
            Anything else? You can select multipile
          </div>
          <button
            className="flex justify-center mx-auto w-52 py-2 px-4 mt-5 border border-transparent rounded-md shadow-sm text-md font-medium bg-dribby-primarycolor text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dribby-primarycolor"
            type="submit"
            onClick={() => navigate("/verifyemail")}
          >
            Finish
          </button>
        </div>
      </form>
    </div>
  );
}

function CustomRadio({ id, name, text, src, description }: any) {
  return (
    <div className=" w-60 md:h-64 relative place-self-center">
      <label className="" htmlFor={id}>
        <input type="checkbox" id={id} name={name} className="peer hidden" />
        <div className=" absolute bottom-0 w-full top-0 peer-checked:top-24 md:peer-checked:top-0 border-[1px] border-[#00000055] rounded-lg peer-checked:border-dribby-primarycolor peer-checked:border-2 z-[-1] transition-all"></div>
        <div className="overflow-hidden m-3 h-36 flex rounded-lg md:peer-checked:translate-y-[-80px] transition-all">
          <img src={src} className="w-full h-full object-cover" alt="cause 1" />
        </div>
        <div className="m-3 md:peer-checked:translate-y-[-80px] transition-all text-lg text-black font-bold">
          {text}
        </div>
        <div className="m-3 h-0 md:peer-checked:translate-y-[-80px] peer-checked:h-[80px] transition-all text-sm text-slate-700 overflow-hidden">
          <div className="">{description}</div>
        </div>
      </label>
    </div>
  );
}

function PhotoSelect({ file, handleChange, name }: any) {
  return (
    <div className="flex gap-8 flex-col sm:flex-row">
      <div>
        <img
          src={file || avatar}
          className=" w-36 h-36 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <label htmlFor={name} className=" cursor-pointer w-fit flex">
            <div className="py-2 px-8 rounded-md text-sm font-semibold border-slate-500 border-2 bg-white text-black w-fit">
              Select Image
            </div>
          </label>
          <input
            type="file"
            onChange={handleChange}
            name={name}
            id={name}
            className="hidden"
          />
        </div>
        <div className=" text-slate-500">Or choose one of our defaults</div>
      </div>
    </div>
  );
}

function Input({
  id,
  placeholder,
  type,
  name,
}: {
  id: string;
  placeholder: string;
  type: string;
  name: string;
}) {
  return (
    <input
      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-400 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-dribby-primarycolor focus:border-slate-800 sm:text-md"
      id={id}
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
}

export default Profile;
