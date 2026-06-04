export async function GET() {
    const res = await fetch('http://localhost:3001/citrus');
    const data = await res.json();
    return Response.json(data);
}