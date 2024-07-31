import { Button,Label, TextInput } from "flowbite-react";

export default function SignIn() {
  return (
    <form className="flex max-w-md flex-col gap-4 mx-auto mt-8">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Username"/>
        </div>
        <TextInput
          id="username"
          type="text"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          id="email"
          type="email"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput id="password" type="password" required />
      </div>
      
      <Button type="submit" gradientDuoTone="redToYellow">
        Submit
      </Button>
    </form>
  );
}
