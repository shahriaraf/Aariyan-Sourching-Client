export default async function getAllData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL_ALL}find-products`,
      { next: { revalidate: 0 } }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch products:${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
}