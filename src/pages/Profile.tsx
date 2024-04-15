import React, { useState } from "react";
import avatar from "../assets/avatar.png";
import HeaderLogo from "../components/HeaderLogo";
import cause_1 from "../assets/cause_1.png";
import cause_2 from "../assets/cause_2.png";
import cause_3 from "../assets/cause_3.png";

function Profile() {
  const [curform, setCurform] = useState<number>(1);

  return (
    <div className="flex flex-col h-full">
      <div className="m-4">
        <HeaderLogo themeColor="dribby-primary-color" />
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
        <div className="mb-4">
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
          className="flex justify-center w-52 py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium bg-dribby-primary-color text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dribby-primary-color"
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
        <div className="flex gap-6 justify-center mt-24">
          <CustomRadio
            name="cause"
            id="cause1"
            text={`I'm a designer looking to share my work`}
            src={cause_1}
          />
          <CustomRadio
            name="cause"
            id="cause2"
            text={`I'm looking to hire a designer`}
            src={cause_2}
          />
          <CustomRadio
            name="cause"
            id="cause3"
            text={`I'm looking for design inspiration`}
            src={cause_3}
          />
        </div>
        <button
          className="flex justify-center mx-auto w-52 py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium bg-dribby-primary-color text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dribby-primary-color"
          type="submit"
        >
          Finish
        </button>
      </form>
    </div>
  );
}

function CustomRadio({ id, name, text, src }: any) {
  return (
    <div className=" w-60 h-64 relative ">
      <label className="block text-lg text-black font-bold" htmlFor={id}>
        <input type="radio" id={id} name={name} className="peer hidden" />
        <div className=" absolute top-0 w-full h-full border-[1px] border-[#00000055] rounded-lg peer-checked:border-dribby-primary-color peer-checked:border-2 transition-colors"></div>
        <div className="overflow-hidden m-3 h-36 flex rounded-lg peer-checked:translate-y-[-80px] transition-all">
          <img src={src} className="w-full h-full object-cover" alt="cause 1" />
        </div>
        <div className="m-3 peer-checked:translate-y-[-80px] transition-all">
          {text}
        </div>
      </label>
    </div>
  );
}

function PhotoSelect({ file, handleChange, name }: any) {
  return (
    <div className="flex gap-8">
      <div>
        <img
          src={file || avatar}
          className=" w-36 h-36 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <label htmlFor={name} className=" cursor-pointer w-fit flex">
            <div className="py-2 px-4 rounded-md text-sm font-semibold border-slate-500 border-2 bg-white text-black w-fit">
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
      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-400 rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-dribby-primary-color focus:border-slate-800 sm:text-md"
      id={id}
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
}

export default Profile;
