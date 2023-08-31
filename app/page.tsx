/** Add your relevant code here for the issue to reproduce */
export const dynamic = "force-dynamic";
import Image from "next/image";
export default function Home() {
  return (
    <section>
      <h1>Test</h1>
      {Array.from({ length: 18 }).map((_, index) => (
        <Image
          key={index}
          src={`https://picsum.photos/id/${
            Math.floor(Math.random() * 1084) + 1
          }/1000/1000`}
          height={250}
          width={250}
          alt=""
        />
      ))}
    </section>
  );
}
