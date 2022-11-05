declare module "*.jpg" {
  const value: any;
  export = value;
}

declare module "@env" {
  export const SERVER_URL: string;
}
