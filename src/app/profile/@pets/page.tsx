import profileStyles from "../profile.module.scss";
import petsStyles from "./pets.module.scss";

import React from "react";
import { NavButton, Pets } from "./ui";
import { getPets } from "@/lib";

async function PetsPage() {
  const pets = await getPets(undefined);
  return (
    <div className={petsStyles["pets"]}>
      <div className={petsStyles["head-wrapper"]}>
        <h2 className={profileStyles["title"]}>My pets:</h2>
        <NavButton />
      </div>
      <Pets pets={pets || []} />
    </div>
  );
}

export default PetsPage;
