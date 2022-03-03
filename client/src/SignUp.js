import { useEffect, useState } from "react";
import {Form, FormGroup, Input, Label,Button} from "reactstrap";
const axios = require('axios').default;

const URL = "http://localhost:4000/SignUp";

function SignUp(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secret, setSecret] = useState("");
    const [loading, setLoading] = useState(false);

    async function submitData(e) {
        e.preventDefault();

        setLoading(true);
        const response = await axios.post(URL, {
            email: email,
            password: password,
            secret: secret
        })
        
        setLoading(false);
        props.setCurr("signIn");
    }

    return <Form inline onSubmit={submitData}>
        {loading && "LOADING"}
    <FormGroup floating>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Label for="exampleEmail">
        Email
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}

      />
      <Label for="examplePassword">
        Password
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
        id="exampleSecret"
        name="secret"
        placeholder="Secret"
        type="secret"
        onChange={(e) => setSecret(e.target.value)}

      />
      <Label for="exampleSecret">
        Secret
      </Label>
    </FormGroup>
    <Button type={"submit"}>
      Submit
    </Button>
  </Form>
}   


export{
    SignUp
}