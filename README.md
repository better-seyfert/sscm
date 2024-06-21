# SSCM (super seyfert common middlewares)
> Common middlewares for Seyfert.

## Installation
```bash
bun add sscm
```

or pnpm...
```bash
pnpm add sscm
```

## Usage
```ts
import { Client, ParseMiddlewares, ParseClient } from "seyfert";
import middlewares from "sscm"; // or export one by one, as you need.

const seyfertClient = new Client();

seyfertClient.setServices({
    middlewares
});

declare module "seyfert" {
  interface UsingClient extends ParseClient<Client<true>> {}

  // Register the middlewares on seyfert types
  interface RegisteredMiddlewares
    extends ParseMiddlewares<typeof middlewares> {}
}
```
ez, innit?

## Middleware list
- Logger middleware — Logs command author information, useful for testing.

## Contributing
I appreciate contributions a lot, you are welcome to do so! 🥰