type Props = {
  params: { products: string };
};

const page = ({ params: { products } }: Props) => {
  return <div>{products}</div>;
};

export default page;
