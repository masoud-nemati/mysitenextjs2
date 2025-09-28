import { Input } from "../_components/input";



export default function Home() {
  return (
     <div className="p-4 space-y-4">
 

      <Input 
        label="Email"
        type="email"
        helpertext="Enter a valid email"
        isfullwidth
        color="error"
        compsize="large"
        variant="primary"
        isoutline
      />

      <Input 
        label="Password"
        type="password"
        helpertext="Enter your password"
        isfullwidth
        color="success"
        compsize="medium"
        variant="secondary"
        isoutline={false}
      />

      <Input 
        label="Username"
        type="text"
        helpertext="Choose a username"
        isfullwidth
        color="success"
        compsize="small"
        variant="primary"
        isoutline
      />

       <Input 
        label="نام خانوادگی"
        type="text"
        helpertext="last name"
        isfullwidth
        color="warning"
        compsize="lg"
        variant="filled"
        isoutline
      />

    </div>
  );
}
