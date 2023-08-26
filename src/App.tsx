import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BaseRoutes } from "./routes";

const queryClient = new QueryClient();
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BaseRoutes />
    </QueryClientProvider>
  );
}
