interface DeviderProps {
  text: string;
}

export const Devider = ({ text }: DeviderProps) => {
  return (
    <div className="relative flex justify-center my-2">
      <p className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></p>

      <h2 className="relative z-10 bg-white font-semibold dark:bg-zinc-800 px-6">
        {text}
      </h2>
    </div>
  );
};
