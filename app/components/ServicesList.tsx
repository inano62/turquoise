import ServiceCard from "./ServiceCard";

type ServicesListProps = {
    services: any[];
};

export default function ServicesList({ services }: ServicesListProps) {
    return (
        <section className="px-6 py-16 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">
                事業内容
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {services.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        </section>
    );
}
