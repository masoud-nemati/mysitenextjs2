
import { Button } from "../_components/button"

import { Input } from "../_components/input";
import { IconAccount, IconCart, IconEmail } from "../_components/icons/icons"

export default function Home() {
  return (
    <div className="p-8 space-y-6 bg-gray-100 min-h-screen">

      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="success">success</Button>
      <Button variant="danger">danger</Button>
      <Button variant="warning">warning</Button>
      <Button variant="info">info</Button>


      {/* ساده */}
      <Input
        id="simple"
        label="Simple Input"
        placeholder="Enter text..."
        variant="info"
        color="primary"
        compsize="xm"
        byIcon={true}
        icon={<IconEmail width={18} height={18} color="black" />}
      />

      {/* با آیکون */}
      <Input
        id="with-icon"
        label="Input with Icon"
        placeholder="Search..."
        byIcon={true}
        variant="secondary"
        color="yellow"
        compsize="xl"

        icon={<IconAccount width={18} height={18} color="red" />}
      />

      {/* با helper text */}
      <Input
        id="helper-text"
        label="Input with Helper"
        placeholder="Enter email..."
        helperText="Email is required"
        variant="info"
        color="other"
        compsize="xs"
        byIcon={true}
        icon={<IconCart width={18} height={18} />}
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
      <Input
        id="test"
        label="test input"
        placeholder="تست میکنم"
        variant="danger"
        color="green"
        compsize="md"
        helperText="دارم تست میکنم"

      />






    </div>
  );
}
