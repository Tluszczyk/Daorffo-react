// modules

// components
import { useContactForm } from "../ContactFormProvider";

// styles
import "./ContactFormElement.scss";
import "./ContactFormElement_desktop.scss";
import "./ContactFormElement_mobile.scss";

interface ContactFormElementProps {
	gridColumnSpan?: number;
	gridRowSpan?: number;

	type: "input" | "textarea" | "submit" | "heading";
	name?: string;
	
	required?: boolean;
	placeholder?: string;
	value?: string;
}

const ContactFormElement = (props: ContactFormElementProps) => {
	const { updateFormValue } = useContactForm();
	const onChange = (e: any) => {
		updateFormValue(e.target.name, e.target.value);
	};

	var element = <></>

	switch (props.type) {
		case "input":
			element = <input className="contact-form-element" type="text" onChange={onChange} name={props.name} placeholder={props.placeholder} required={props.required} />
			break;

		case "textarea":
			element = <textarea className="contact-form-element" onChange={onChange} name={props.name} placeholder={props.placeholder} value={props.value} required={props.required} />
			break;
			
		case "submit":
			element = <button className="contact-form-element" > {props.value} </button>
			break;

		case "heading":
			element = <span className="contact-form-element"> {props.value} </span>
			break;
	}

	return (
		<div className="contact-form-element-wrapper" style={{
			gridColumnStart: `span ${props.gridColumnSpan ?? 1}`,
			gridRowStart: `span ${props.gridRowSpan ?? 1}`,
		}}>
			{element}
		</div>
	);
};

export default ContactFormElement;
