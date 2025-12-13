// eslint-disable-next-line storybook/no-renderer-packages
import {Meta,StoryObj} from "@storybook/react";
import { IconCart } from "@/app/_components/icons/icons"
import { Input } from "./input";
const meta:Meta<typeof Input>={
    component:Input,
    tags:["autodocs"]
}

export default meta;


type StoryObject=StoryObj<typeof Input>;


export const InputVariant:StoryObject={
    render:()=>(
        <>
            <Input variant="primary" compsize="md" placeholder="primary" />
            <Input variant="secondary" compsize="md" placeholder="secondary" />
            <Input variant="success" compsize="md" placeholder="success" />
            <Input variant="danger" compsize="md" placeholder="danger" />
            <Input variant="warning" compsize="md" placeholder="warning" />
            <Input variant="info" compsize="md" placeholder="info" />
        </>
    )
};



export const InputShape:StoryObject={
    render:()=>(
        <>
            <Input variant="primary" shape="wide" placeholder="primary" />
            <Input variant="secondary" shape="wide" placeholder="secondary" />
            <Input variant="success" shape="wide" placeholder="success" />
            <Input variant="danger" shape="wide" placeholder="danger" />
            <Input variant="warning" shape="wide" placeholder="warning" />
        </>
    )
};

export const InputSize: StoryObject = {
  render: () => (
    <>
      <Input variant="primary" compsize="xs" placeholder="extra small" />
      <Input variant="primary" compsize="sm" placeholder="small" />
      <Input variant="primary" compsize="md" placeholder="medium" />
      <Input variant="primary" compsize="lg" placeholder="large" />
      <Input variant="primary" compsize="xl" placeholder="extra large" />
    </>
  ),
};

export const InputDisabled: StoryObject = {
  render: () => (
    <>
      <Input variant="primary" placeholder="primary disabled" disabled />
      <Input variant="secondary" placeholder="secondary disabled" disabled />
      <Input variant="danger" placeholder="danger disabled" disabled />
    </>
  ),
};

export const InputWithHelperText: StoryObject = {
  render: () => (
    <>
      <Input
        variant="info"
        label="Email"
        placeholder="Enter your email..."
        helperText="We'll never share your email"
      />
      <Input
        variant="danger"
        label="Password"
        placeholder="Enter password..."
        helperText="Must be at least 8 characters"
      />
    </>
  ),
};
export const InputWithIcon: StoryObject = {
  render: () => (
    <>
      <Input
        variant="success"
        placeholder="With icon"
        byIcon
        icon={<IconCart width={18} height={18} />}
      />
      <Input
        variant="warning"
        placeholder="Warning icon"
        byIcon
        icon={<IconCart width={18} height={18} />}
      />
    </>
  ),
};