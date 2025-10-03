import { Input } from "../_components/input";



export default function Home() {
  return (
      <div className="p-8 space-y-6 bg-gray-100 min-h-screen">
      
      {/* ساده */}
      <Input
        id="simple"
        label="Simple Input"
        placeholder="Enter text..."
        variant="info"
        color="primary"
        compsize="xm"
      />

      {/* با آیکون */}
      <Input
        id="with-icon"
        label="Input with Icon"
        placeholder="Search..."
        byIcon={true}
     
        variant="secondary"
        color="secondary"
        compsize="xl"
      />

      {/* با helper text */}
      <Input
        id="helper-text"
        label="Input with Helper"
        placeholder="Enter email..."
        helperText="Email is required"
        variant="success"
        color="danger"
        compsize="xs"
      />

      {/* غیر فعال */}
      <Input
        id="disabled"
        label="Disabled Input"
        placeholder="Cannot type..."
        isdisabled={true}
        variant="danger"
        color="success"
        compsize="sm"
      />

      {/* سایز بزرگ */}
      <Input
        id="large"
        label="Large Input"
        placeholder="Large size..."
        variant="info"
        color="warning"
        compsize="lg"
      />
    </div>
  );
}
