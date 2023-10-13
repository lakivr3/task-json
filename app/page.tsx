import Table from "./components/Table";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ChakraBaseProvider theme={theme}>
        <Table />
      </ChakraBaseProvider>
    </main>
  );
}
