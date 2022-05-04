import { createMock } from "ts-auto-mock";

import { ObjectReader } from "@/worker/objectReader";
import { RandomTextGenerator } from "@/service/randomTextGenerator";

describe("ObjectReader", () => {
  it("extractText : expected format", async () => {
    const mockRandomTextGenerator = createMock<RandomTextGenerator>();

    mockRandomTextGenerator.get = jest.fn().mockImplementation(() => {
      return {
        fact: "this is test",
      };
    });

    const objectReader = new ObjectReader(mockRandomTextGenerator);

    const result = await objectReader.extractText();
    expect(result).toStrictEqual("this is test");
  });

  it("extractText : unexpected format", async () => {
    const mockRandomTextGenerator = createMock<RandomTextGenerator>();

    mockRandomTextGenerator.get = jest.fn().mockImplementation(() => {
      return {
        key: "this is test",
      };
    });

    const objectReader = new ObjectReader(mockRandomTextGenerator);

    const result = await objectReader.extractText();
    expect(result).toStrictEqual(undefined);
  });

  it("extractText : RandomTextGenerator server error", async () => {
    const mockRandomTextGenerator = createMock<RandomTextGenerator>();

    mockRandomTextGenerator.get = jest.fn().mockImplementation(() => {
      throw new Error("Server error");
    });

    const objectReader = new ObjectReader(mockRandomTextGenerator);

    expect(async () => {
      await objectReader.extractText();
    }).rejects.toThrowError("Server error");
  });
});
