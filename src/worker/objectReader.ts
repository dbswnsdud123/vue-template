import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { RandomTextGenerator } from "@/service/randomTextGenerator";

@injectable()
export class ObjectReader {
  constructor(
    @inject("SummonerGetter") private randomTextGenerator: RandomTextGenerator
  ) {
    this.randomTextGenerator = randomTextGenerator;
  }

  public extractText = async () => {
    const responseObject = await this.randomTextGenerator.get();
    return responseObject.fact;
  };
}
