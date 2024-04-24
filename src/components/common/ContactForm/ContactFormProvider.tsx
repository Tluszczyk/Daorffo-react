import { useState, createContext, useContext, ReactNode } from "react";

export const ContactFormContext = createContext({
    formValues: {},
    updateFormValue: (key: string, value: string) => {}
});

const ContactFormProvider = ({ children }: { children: ReactNode }) => {
    const [ formValues, setFormValues ] = useState({});

    const updateFormValue = (key: string, value: string) => {
        setFormValues({ ...formValues, [key]: value });
    };

    const value = {
        formValues,
        updateFormValue
    };

    return <ContactFormContext.Provider value={value}>{children}</ContactFormContext.Provider>;
};

export const useContactForm = () => {
    return useContext(ContactFormContext);
}

export default ContactFormProvider;