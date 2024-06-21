type Accounts = Array<string>;
type OpenOrClose = "open" | "close";
interface Details {
  createAt: Date;
  updateAt: Date;
}

interface Page {
  title: string;
  likes: number;
  accounts: Accounts;
  status: OpenOrClose;
  details?: Details;
}
const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
