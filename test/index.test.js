const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

const { rickMock, mortyMock } = require("./mocks");

const correctEmail = "ejemplo@gmail.com";
const falseEmail = "hola@mail.com";
const correctPassword = "1Password";

describe("Tests de Rutas", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const { body } = await agent.get("/rickandmorty/character/1");
      expect(body).toHaveProperty("id");
      expect(body).toHaveProperty("name");
      expect(body).toHaveProperty("species");
      expect(body).toHaveProperty("gender");
      expect(body).toHaveProperty("origin");
      expect(body).toHaveProperty("image");
      expect(body).toHaveProperty("status");
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/9000").expect(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("Responde con status:200", async () => {
      await agent
        .get(
          `/rickandmorty/login?email=${correctEmail}&password=${correctPassword}`
        )
        .expect(200);
    });
    it("Responde con status:500", async () => {
      await agent
        .get(`/rickandmorty/login?email=${falseEmail}&password=123`)
        .expect(200);
    });
  });

  describe("POST /rickandmorty/fav", () => {
    it("Responde con un arreglo correctamente", async () => {
      await agent.post("/rickandmorty/fav").send({ character: rickMock });
      const response = await agent
        .post("/rickandmorty/fav")
        .send({ character: mortyMock });
      expect(response.body.length).toBe(2);
      expect(response.body).toEqual([rickMock, mortyMock]);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si no encuentra un personaje para borrar, debe devolver todos los personajes", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/3");
      expect(body).toContainEqual(mortyMock);
      expect(body).toContainEqual(rickMock);
    });
    it("Elimina correctamente el personaje", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/1");
      expect(body).not.toContainEqual(rickMock);
      
    });

    // beforeEach(async () => {
    //   await agent.post("/rickandmorty/fav").send({ character: rickMock });
    //   await agent.post("/rickandmorty/fav").send({ character: mortyMock });
    // });
    // it("Se elimina correctamente el personaje", async () => {
    //   const response = await agent.delete("/rickandmorty/fav/1");
    //   expect(response.body.length).toBe(1);
    //   expect(response.body).toEqual([mortyMock]);
    // });
  });
});
