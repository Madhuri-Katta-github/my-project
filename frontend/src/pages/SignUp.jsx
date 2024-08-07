import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <form className="flex max-w-md flex-col gap-4 mx-auto mt-8">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Username" />
        </div>
        <TextInput id="username" type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput id="email" type="email" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput id="password" type="password" required />
      </div>

      <Button type="submit" gradientDuoTone="redToYellow">
        Sign Up
      </Button>
      <div className="flex gap-2 text-sm mt-5">
        <span>Do Have an account?</span>
        <Link to="/sign-in" className="text-blue-500">
          Sign In
        </Link>
      </div>
    </form>
  );
}
