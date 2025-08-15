import z from 'zod';

const APIRegisterSchema = z.object({
	email: z.email(),
	name: z.string().min(5),
	usage: z.string().optional(),
	privacyCheckbox: z.boolean(),
});

export { APIRegisterSchema };
