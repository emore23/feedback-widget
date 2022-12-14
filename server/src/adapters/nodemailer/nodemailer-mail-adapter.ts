import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "51b6fecff1e2d2",
    pass: "a8ce1f15180088"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({ subject, body }: SendMailData) {
		await	transport.sendMail({
			from: 'Equipe Feedget <oi@feedget.com>',
			to: 'Estefani Moré <iurymarmore@gmail.com>',
			subject,
			html: body,
		});
	};
}