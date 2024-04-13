import React, { useState } from "react";
import avatar from "../assets/avatar.png";
import HeaderLogo from "../components/HeaderLogo";

function Profile() {
  const [file, setFile] = useState<string | undefined>();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }
  return (
    <div className="flex flex-col h-full">
      <div className="m-4">
        <HeaderLogo themeColor="dribby-primary-color" />
      </div>
      <div className=" max-w-lg mx-auto p-4 h-full flex flex-col justify-center gap-8">
        <div>
          <h1 className="text-2xl font-semibold">{`Welcome! Let's create your profile`}</h1>
          <h2 className="text-sm text-slate-500">
            Let others get to know you better! You can do these latter
          </h2>
        </div>
        <form method="POST" className="flex flex-col gap-8">
          <div className="mb-4">
            <label
              className="block text-lg text-black font-bold mb-2"
              htmlFor="avatar"
            >
              Add an Avatar
            </label>
            <PhotoSelect
              file={file}
              handleChange={handleChange}
              name="avatar"
            />
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
          >
            Next
          </button>
        </form>
      </div>
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
