export class Env {
  public static readonly ENV: string = process.env.ENV ?? "qa";

  public static readonly LOG_LEVEL: string = process.env.LOG_LEVEL ?? "info";

  public static readonly URL_GOLDMINE: string = process.env.URL_GOLDMINE ?? "https://goldmine.qa.kaptest.com/autotest";
}
