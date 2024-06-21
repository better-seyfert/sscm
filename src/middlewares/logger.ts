import { type Command, createMiddleware } from "seyfert";

export const loggerMiddleware = createMiddleware<void>((middle) => {
	console.log(
		`${middle.context.author.username} (${middle.context.author.id}) ran /(${(middle.context.command as Command).name}`,
	);

	middle.next();
});
