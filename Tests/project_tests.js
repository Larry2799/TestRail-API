import { functions } from "../Api/services.js";

describe("Test requests to TestRail", () => {
  it("Add project", async () => {
    await functions.createProject();
  });

  it("Get project by ID", async () => {
    const response = await functions.getProject(6);
    console.log(response.data);
  });

  it("Delete project by ID", async () => {
    await functions.deleteProject(7);
  });
});
