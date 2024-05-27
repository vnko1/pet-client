import { Sponsors } from "./ui";
import { JSONParser } from "@/utils";

export default async function Friends() {
  // const res = await getSponsors();

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="title">Our friends</h1>
          <Sponsors sponsors={JSONParser([])} />
        </div>
      </section>
    </main>
  );
}
