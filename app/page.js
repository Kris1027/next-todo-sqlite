import { getTasks } from "./api/getTasks";

export default async function Home() {
  const tasks = await getTasks();

  console.log(tasks);

  return <main>start</main>;
}
