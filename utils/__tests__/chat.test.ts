import { getChatID } from "../chat";
import { mockUserID, mockUserToChatID } from "./mocks";

describe("getChatID", () => {
  test("should return correct chat id", () => {
    const result = getChatID(mockUserID, mockUserToChatID);

    expect(result).toBe(`${mockUserID}-${mockUserToChatID}`);
  });
});
