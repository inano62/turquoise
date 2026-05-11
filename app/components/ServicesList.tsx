import ServiceCard from "./ServiceCard";
type ServicesListProps = {
  services: any[];
};

export default function ServicesList({ services }: ServicesListProps) {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">サービス一覧</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
}