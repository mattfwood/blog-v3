export default async function fetcher(...params: any) {
  // @ts-ignore
  const res = await fetch(...params);

  return res.json();
}
