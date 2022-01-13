import { Button, ButtonSpinner } from '@chakra-ui/button';
export default function Home() {
  return (
    <div className="max-w-full min-h-screen bg-green-800">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>
        <ButtonSpinner></ButtonSpinner>
      </Button>
    </div>
  );
}
