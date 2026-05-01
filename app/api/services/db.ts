export async function getCollections() {
  const res = await fetch("/api/collections", { credentials: "include" });
  return res.json();
}

export async function getCollection(name: string) {
  const res = await fetch(`/api/collections/${name}`, { credentials: "include" });
  return res.json();
}

export async function deleteCollection(name: string) {
  await fetch(`/api/collections/${name}`, {
    method: "DELETE",
    credentials: "include",
  });
}

export async function deleteDocument(collection: string, id: string) {
  await fetch(`/api/collections/${collection}/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
}
