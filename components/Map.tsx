export const Map = () => {
  return (
    <div className="overflow-hidden col-span-2 rounded-lg bg-zinc-200/50 dark:bg-transparent">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d917.1809866370722!2d32.0623804464076!3d49.44332278654281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1713874384127!5m2!1sru!2sua"
        className="w-full h-[150px] md:h-[300px] lg:h-[400px]"
      ></iframe>
    </div>
  );
};
