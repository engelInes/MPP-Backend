import bookcontroller from "./src/controlers/booksList";

export async function populateDatabase(CriticList) {
  for (let i = 0; i < 1000; i++) {
    const book = await bookcontroller.generateRandomBook();
    console.log(
      "#" + i.toString() + " " + book.title.toString() + " was created!\n"
    );
  }

  for (let i = 0; i < 10000; i++) {
    const critic = await CriticList.createCritic();
    CriticList.addCritic(critic);

    //devicesRepository.addDevice(device);
    console.log(
      "#" +
        i.toString() +
        " " +
        critic.criticName.toString() +
        " was created for " +
        critic.bookId.toString() +
        "!\n"
    );
  }
}
