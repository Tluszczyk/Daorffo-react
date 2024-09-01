// modules
import { useEffect, useState } from "react";

// components
import ContactFormProvider, { useContactForm } from "./ContactFormProvider";

// styles
import "./ContactForm.scss";
import "./ContactForm_desktop.scss";
import "./ContactForm_mobile.scss";

import { WrapperProps } from "../../../common/commonProps";

interface ContactFormProps extends WrapperProps {
	numberOfColumns?: number
	numberOfRows?: number
}

const ContactForm = (props: ContactFormProps) => {

	return <ContactFormProvider>
		<ContactFormMiddleware {...props}>{props.children}</ContactFormMiddleware>
	</ContactFormProvider>
};

const ContactFormMiddleware = (props: ContactFormProps) => {
	const { formValues } = useContactForm();
	const [isLoading, setIsLoading] = useState(false);
	const [ action, setAction ] = useState("");

	useEffect(() => {
		let body = Object.entries(formValues).map(([key, value]) => `${key}:${value}`).join("%0A");

		setAction(`mailto:daorffo@daorffo.com?subject=Pytanie ze strony&body=${body}`);

	}, [formValues]);

	const onSubmit = (e: any) => {
		e.preventDefault();
		
		setIsLoading(true);

		fetch("https://api.daorffo.com:3000/send-email",{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(formValues)
		}).then(() => {
			setIsLoading(false);
		}).catch((err) => {
			setIsLoading(false);
			window.location.href = action;
		})
	};

	return <form className="contact-form" onSubmit={onSubmit} style={{ 
		display: "grid",
		gridTemplateColumns: `repeat(${props.numberOfColumns}, auto)`, 
		gridTemplateRows: `repeat(${props.numberOfRows}, auto)` 
	}}>

		{isLoading && <div className="contact-form-sending">Sending...</div>}

		{props.children}
	</form>;
}

export default ContactForm;
