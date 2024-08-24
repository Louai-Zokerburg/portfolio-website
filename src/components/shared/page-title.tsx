const PageTitle = ({ title }: { title: string }) => {
  const [firstWord, ...restOfTitle] = title.split(" ");

  return (
    <div className="flex flex-col justify-center items-start gap-y-2 w-full mt-[5vh] lg:mt-[15vh]">
      <h1 className="font-bold text-2xl lg:text-4xl">
        <span className="text-primary-color">{firstWord + " "}</span>
        {restOfTitle.join(" ")}
      </h1>
      <span className="h-[3px] rounded-full w-[15%] bg-primary-color"></span>
    </div>
  );
};

export default PageTitle;
