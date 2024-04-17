import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {

	const user: User = await prisma.user.create({
		data: {
			name: "Vasu Jain",
			email: "Test@test.com",
			password: "123"
		}
	})

	console.log(user)

}


main()
	.catch(e => { console.error(e.message) })
