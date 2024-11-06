import Hero from "./components/hero";

import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import SkillsList from "./components/skill";
import "./debi-style.css";


export default function CVonline() {
  return (   
    <section>
      <Hero/>
      <RiwayatPendidikan/>
      <RiwayatPekerjaan/>
      <SkillsList/>
    </section>
  );
}
