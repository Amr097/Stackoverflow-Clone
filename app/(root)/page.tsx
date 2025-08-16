import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="h1-bold font-space-grotesk hidden">Welcome to Next.js</h1>
      <h1 className="h1-bold font-inter">Welcome to Next.js (INTER)</h1>
    </>
  );
};

export default Home;
