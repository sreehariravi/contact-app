import { useEffect, useState } from "react";
import {Form, FormGroup, Input, Label,Button} from "reactstrap";
const axios = require('axios').default;

const URL = "http://localhost:4000/CreateContact";
const GETC_URL = "http://localhost:4000/GetContacts";

function Contact(props) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(fetchContacts
        , [])

    async function fetchContacts() {
        const response = await axios.post(GETC_URL, {
            userEmail: localStorage.getItem("userEmail")
        })

        if (Array.isArray(response.data)) setContacts(response.data);
    }

    async function submitData(e) {
        e.preventDefault();
        setLoading(true);
        const response = await axios.post(URL, {
            email: email,
            name: name,
            phone : phone,
            userEmail : localStorage.getItem("userEmail")
        })
        
        fetchContacts();

        setLoading(false);
    }

    return <Form inline onSubmit={submitData}>
        {loading && "LOADING"}
    <FormGroup floating>
      <Input
        id="name"
        name="name"
        placeholder="name"
        type="name"
        onChange={(e) => setName(e.target.value)}
      />
      <Label for="name">
        Name
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="email"
        name="email"
        placeholder="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}

      />
      <Label for="email">
        Email
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="phone"
        name="phone"
        placeholder="Phone"
        type="text"
        onChange={(e) => setPhone(e.target.value)}

      />
      <Label for="phone">
        Phone
      </Label>
    </FormGroup>
    <Button type={"submit"}>
      Save
    </Button>

    <table>
        <tr>
            <td style={{border: "2px solid black"}}>
                Name
            </td>
            <td style={{border: "2px solid black"}}>
                Email
            </td>
            <td style={{border: "2px solid black"}}>
                Phone
            </td>
        </tr>
    {contacts.map((c, i) => {
        return <tr key={i}>
            <td style={{border: "2px solid black"}}>
                {c.name}
            </td>
            <td style={{border: "2px solid black"}}>
                {c.email}
            </td>
            <td style={{border: "2px solid black"}}>
                {c.phone}
            </td>
        </tr>
    })}
    </table>
  </Form>
}   


export{
    Contact
}