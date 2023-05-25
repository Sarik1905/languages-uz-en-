const BooksEN = require("../model/booksEN");
const PageEN = require("../model/pageEN")

let getHome = async (req, res) => {
  try {
    const books = await BooksEN.find().lean();
    const pages = await PageEN.find().lean();
    res.render("home", {
      books,
      pages: pages[0],
    });
  } catch (error) {
    console.log(error);
  }
};

let getAbout = (req, res) => {
  try {
    res.render("about");
  } catch (error) {
    console.log(error);
  }
};

let getContact = (req, res) => {
  try {
    res.render("contact");
  } catch (error) {
    console.log(error);
  }
};

let getService = (req, res) => {
  try {
    res.render("service");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getHome,
  getAbout,
  getContact,
  getService,
};
