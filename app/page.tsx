import Hero from "./components/Hero";
import ServicesList from "./components/ServicesList";

async function getServices() {
  try {
    const res = await fetch("http://localhost:3000/api/services", {
      cache: "no-store",
    });

    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (e) {
    return [];
  }
}

export default async function Page() {
  const services = await getServices();

  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <ServicesList services={services} />
    </main>
  );
}