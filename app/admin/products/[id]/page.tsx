import Form from "./Form";

export function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Редагування продукту ${params.id}`,
  };
}

export default function ProductEditPage({
  params,
}: {
  params: { id: string };
}) {
  return <Form productId={params.id} />;
}
