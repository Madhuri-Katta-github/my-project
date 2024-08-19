import { Alert, Button, Label, TextInput, Spinner } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      // setErrorMessage("Please fill all the form details");
      dispatch(signInFailure("Please fill all the form details"));
    }

    try {
      // setLoading(true);
      // setErrorMessage(null);
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        // setErrorMessage(data.message);
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        // setErrorMessage(null);
        // setLoading(false);
        dispatch(signInSuccess());
        navigate("/");
      }
    } catch (error) {
      // setErrorMessage(error.message);
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <form
      className="flex max-w-md flex-col gap-4 mx-auto mt-8"
      onSubmit={handleSubmit}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput id="email" type="email" required onChange={handleChange} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput
          id="password"
          type="password"
          required
          onChange={handleChange}
        />
      </div>
      <Button type="submit" gradientDuoTone="redToYellow">
        {loading ? <Spinner /> : "Sign In"}
      </Button>
      <div className="flex gap-2 text-sm mt-5">
        <span>Dont Have an account?</span>
        <Link to="/sign-up" className="text-blue-500">
          Sign up
        </Link>
      </div>
      {errorMessage && (
        <Alert className="mt-5" color="failure">
          {errorMessage}
        </Alert>
      )}
    </form>
  );
}
