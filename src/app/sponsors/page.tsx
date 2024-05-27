import { getSponsors } from "@/lib";
import { JSONParser } from "@/utils";

import { Sponsors } from "./ui";

export default async function Friends() {
  const res = await getSponsors(undefined);

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="title">Our friends</h1>
          <Sponsors sponsors={JSONParser(res)} />
        </div>
      </section>
    </main>
  );
}
