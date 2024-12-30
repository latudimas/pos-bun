import { Html } from "@elysiajs/html";

import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Sidebar } from "../components/layout/Sidebar";
import { TopBar } from "../components/layout/TopBar";

export const HomePage = () => (
  <div class="min-h-screen bg-gray-50 flex">
    <Sidebar />

    {/* Main Content */}
    <div class="flex-1 min-w-0 ml-0 transition-margin duration-300 ease-in-out">
      <TopBar />

      {/* Page Content */}
      <div class="p-6">
        <div class="max-w-md mx-auto">
          <div class="space-y-4">
            <h1 class="text-2xl font-medium text-gray-800 text-center mb-8">
              Welcome
            </h1>
            <form
              class="space-y-4"
              hx-post="/show-message"
              hx-target="#message-display"
              hx-swap="innerHTML"
            >
              <div>
                <Input name="message" placeholder="Enter your message" />
              </div>
              <Button type="submit">Show Message</Button>
            </form>
            <div
              id="message-display"
              class="mt-6 text-center p-4 text-gray-600"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
