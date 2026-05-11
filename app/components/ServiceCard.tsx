export default function ServiceCard({ service }: any) {
  return (
    <a
      href={`/u/${service.slug}`}
      className="block bg-white rounded-xl shadow hover:shadow-lg transition p-4"
    >
      <img
        src={service.thumbnail || "/noimage.png"}
        alt={service.title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />

      <h3 className="text-lg font-semibold">{service.title}</h3>
      <p className="text-gray-600 text-sm mt-1">{service.description}</p>

      <div className="mt-3 font-bold text-emerald-600">
        ¥{service.price.toLocaleString()}
      </div>
    </a>
  );
}