import CarDetail from "../../_views/CarDetail";

type Props = {
  params: {
    carId: string;
  };
};

export default function Page({ params: { carId } }: Props) {
  return <CarDetail carDocumentId={carId} />;
}
