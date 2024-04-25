import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const productsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-[600px] flex flex-col justify-start">
      <aside className="w-full flex items-center gap-2 mb-5">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Сортувати за:" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Зростання ціни</SelectItem>
            <SelectItem value="dark">Зниження ціни</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Виробник:" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Виробник 1</SelectItem>
            <SelectItem value="dark">Виробник 2</SelectItem>
            <SelectItem value="dark">Виробник 3</SelectItem>
            <SelectItem value="dark">Виробник 4</SelectItem>
          </SelectContent>
        </Select>
      </aside>
      <div className="h-full flex justify-center items-center">{children}</div>
    </section>
  );
};

export default productsLayout;
