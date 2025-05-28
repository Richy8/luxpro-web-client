// const { EventEmitter } = require("fbemitter");
import { v4 as uuidv4 } from "uuid";

class ServiceUtils {
  timestamp = new Date().getTime();
  //   emitter = new EventEmitter();

  urlHash(url: string) {
    return url.includes("?")
      ? `${url}&timestamp=${this.timestamp}`
      : `${url}?timestamp=${this.timestamp}`;
  }

  getRedirectPath(user: {
    is_verified: boolean;
    is_onboarded: boolean;
    email: string;
  }): string {
    if (user.is_verified && user.is_onboarded) return "/overview";
    if (user.is_verified && !user.is_onboarded) return "/welcome";
    return `/verify-email?email=${encodeURIComponent(user.email)}`;
  }

  setCookie(name: string, value: string, days: number) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(
      value
    )}; expires=${expires}; path=/`;
  }

  formatNumber(value: number, trailingZeroes: boolean = true): string {
    if (value >= 1_000_000) {
      // Format for 1 million and above
      const millions = value / 1_000_000;
      return millions.toFixed(1) + "M";
    } else if (value >= 1_000) {
      // Format for thousands and append '.00'
      return `${value.toLocaleString()}${trailingZeroes ? ".00" : ""}`;
    } else {
      // Format for less than 1000 and append '.00'
      return value.toFixed(2);
    }
  }

  formatNumberWithCommas(number: number) {
    if (typeof number !== "number") {
      throw new Error("Input must be a number");
    }
    return number.toLocaleString("en-US");
  }

  getStorage({
    storage_name,
    storage_type = "string",
  }: {
    storage_name: string;
    storage_type?: "string" | "object";
  }): string | object | null {
    if (typeof window === "undefined") return null;
    const stored_data = localStorage.getItem(storage_name);
    return storage_type === "string"
      ? stored_data
      : stored_data
      ? JSON.parse(stored_data)
      : null;
  }

  setStorage({
    storage_name,
    storage_value,
    storage_type = "string",
  }: {
    storage_name: string;
    storage_value: string | number | object;
    storage_type?: "string" | "object";
  }): void {
    if (typeof window === "undefined") return;
    if (storage_type === "string") {
      localStorage.setItem(storage_name, storage_value as string);
    } else {
      localStorage.setItem(storage_name, JSON.stringify(storage_value));
    }
  }

  removeStorage(storage_name: string): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(storage_name);
  }

  generateUUID(): string {
    return uuidv4();
  }

  generateUniqueId(length: number) {
    const chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    const array = new Uint8Array(length);

    try {
      crypto.getRandomValues(array);
    } catch (error) {
      console.error(
        "crypto.getRandomValues failed, using Math.random instead",
        error
      );
      return Array.from(
        { length },
        () => chars[Math.floor(Math.random() * chars.length)]
      ).join("");
    }

    return Array.from(array, (byte) => chars[byte % chars.length]).join("");
  }

  encodeString(string: string): string {
    return btoa(
      `${this.generateUniqueId(5)}+${string}+${this.generateUniqueId(5)}`
    );
  }

  decodeString(encoded_string: string): string {
    return atob(encoded_string).split("+")[1];
  }

  truncateString(str: string, maxLength: number = 20): string {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  }

  getInitials(fullName: string): string {
    const names = fullName.trim().split(/\s+/);
    if (names.length < 2) return "";

    const [firstName, lastName] = names.slice(0, 2);
    return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
  }

  createAndClickAnchor(href: string, target = "_self") {
    const anchor = document.createElement("a");

    anchor.href = href;
    anchor.target = target;

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  formatCurrency(amount: number) {
    if (amount < 1000000) {
      return amount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }

    // Create an Intl.NumberFormat instance with the specified options
    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      notation: "compact",
      compactDisplay: "short",
    });

    // Format the number using the created formatter
    let formattedNumber = formatter.format(amount);

    // Replace 'B' with 'Billion' and 'T' with 'Trillion'
    formattedNumber = formattedNumber
      .replace(/M$/, "Million")
      .replace(/B$/, "Billion")
      .replace(/T$/, "Trillion");

    return formattedNumber;
  }

  /**
   * Unslugifies a string.
   * Replaces hyphens and underscores with spaces,
   * and capitalizes the first letter of each word.
   *
   * @param {string} slug The slug string to unslugify.
   * @returns {string} The unslugified string.
   *
   * @example
   * unslugifyText("hello-world"); // "Hello World"
   * unslugifyText("another_example_slug"); // "Another Example Slug"
   * unslugifyText("single"); // "Single"
   * unslugifyText("  leading-and-trailing-spaces  "); // "Leading And Trailing Spaces"
   * unslugifyText("test-with-123-numbers"); // "Test With 123 Numbers"
   * unslugifyText(""); // ""
   */
  unslugifyText(slug: string): string {
    if (typeof slug !== "string" || slug.trim() === "") {
      return ""; // Handle empty or non-string inputs gracefully
    }

    // 1. Replace hyphens and underscores with spaces.
    const words = slug.replace(/[-_]/g, " ");

    // 2. Trim leading/trailing spaces that might result from multiple separators or original spacing.
    const trimmedWords = words.trim();

    // 3. Capitalize the first letter of each word.
    //    Split by space, capitalize each part, then join back.
    const unslugified = trimmedWords
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return unslugified;
  }
}

const serviceUtils = new ServiceUtils();
export default serviceUtils;
