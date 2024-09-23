import { getChatID, getMessageDate, sanitizeMessage } from "../chat";
import { mockUserID, mockUserToChatID } from "./mocks";
import { format, isToday } from "date-fns";

jest.mock("date-fns", () => ({
  format: jest.fn(),
  isToday: jest.fn(),
}));

describe("getChatID", () => {
  test("should return correct chat id for any order", () => {
    const result1 = getChatID(mockUserID, mockUserToChatID);
    const result2 = getChatID(mockUserToChatID, mockUserID);

    expect(result1).toBe(`${mockUserToChatID}-${mockUserID}`);
    expect(result2).toBe(`${mockUserToChatID}-${mockUserID}`);
  });
});

describe("sanitizeMessage", () => {
  test("should remove leading and trailing whitespace", () => {
    expect(sanitizeMessage("  Hello World!  ")).toBe("Hello World!");
  });

  test("should remove HTML tags", () => {
    expect(sanitizeMessage("<p>Hello <strong>World!</strong></p>")).toBe(
      "Hello World!",
    );
  });

  test("should limit message length to 500 characters", () => {
    const longMessage = "a".repeat(600);
    expect(sanitizeMessage(longMessage).length).toBe(500);
  });

  test("should handle empty strings", () => {
    expect(sanitizeMessage("")).toBe("");
  });

  test("should return unchanged valid input", () => {
    expect(sanitizeMessage("Hello, World!")).toBe("Hello, World!");
  });
});

describe("getMessageDate", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should return an empty string if no timestamp is provided", () => {
    expect(getMessageDate()).toBe("");
  });

  test("should format date correctly for today", () => {
    const timestamp = Date.now();
    const expectedTime = "10:00 AM"; // Replace with your expected time
    (isToday as jest.Mock).mockReturnValue(true);
    (format as jest.Mock).mockReturnValue(expectedTime);

    expect(getMessageDate(timestamp)).toBe(expectedTime);
    expect(isToday).toHaveBeenCalledWith(new Date(timestamp));
    expect(format).toHaveBeenCalledWith(new Date(timestamp), "hh:mm a");
  });

  test("should format date correctly for a date not today", () => {
    const pastDate = new Date("2023-01-01T10:00:00Z").getTime();
    const expectedDate = "01/01/2023 10:00 AM"; // Replace with your expected formatted date
    (isToday as jest.Mock).mockReturnValue(false);
    (format as jest.Mock).mockReturnValue(expectedDate);

    expect(getMessageDate(pastDate)).toBe(expectedDate);
    expect(isToday).toHaveBeenCalledWith(new Date(pastDate));
    expect(format).toHaveBeenCalledWith(
      new Date(pastDate),
      "MM/dd/yyyy hh:mm a",
    );
  });
});
