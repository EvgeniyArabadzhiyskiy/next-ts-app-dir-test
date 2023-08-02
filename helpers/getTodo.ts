export async function getTodo(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,
  //  {cache: 'no-store'}
   );
  return res.json();
}
