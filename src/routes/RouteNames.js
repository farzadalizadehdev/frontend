import ContactsList from "../components/pages/contactList/ContactList"
import Contact from "../components/pages/contact/Contact"

export const ContactRoutes = [
    {
        index: '1',
        path: '/contacts',
        exact: true,
        Component: ContactsList 
    },
    {
        index: '2',
        path: '/contact/:contactId',
        exact: true,
        Component: Contact
    }
]