function VerifyEmail() {
  return (
    <div className=" mx-auto p-4 h-full flex flex-col justify-center gap-8 text-center">
      <div>
        <h1 className="text-2xl font-semibold">{`What brings you to dribby?`}</h1>
        <h2 className="text-sm text-slate-500">
          {`Select the options that best describes you. Don't worry, you can explore other options later.`}
        </h2>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex gap-6 justify-center flex-col md:flex-row md:mt-24"></div>
        <div className="mt-12">
          <div className="font-bold">
            Anything else? You can select multipile
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
