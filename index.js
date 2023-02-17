import { parse } from "csv-parse";
import { createReadStream } from "node:fs";

function isHabitablePlanet(planet) {
  return (
    planet.koi_disposition === "CONFIRMED" &&
    planet.koi_insol > 0.36 &&
    planet.koi_insol < 1.11 &&
    planet.koi_prad < 1.6
  );
}

const habitablePlanets = [];
createReadStream("./kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (chunk) => {
    if (isHabitablePlanet(chunk)) {
      habitablePlanets.push(chunk);
    }
  })
  .on("error", (err) => {
    console.log("error: ", err);
  })
  .on("end", () => {
    console.log(habitablePlanets.map((planet) => planet.kepler_name));
    console.log("Reading from stream is done.");
  });
