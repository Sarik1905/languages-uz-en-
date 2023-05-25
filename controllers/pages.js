const BooksEN = require("../model/booksEN");
const BooksUZ = require("../model/booksUZ");
const PageEN = require("../model/pageEN");
const PageUZ = require("../model/pageUZ");

let getHome = async (req, res) => {
  try {
    const books = await BooksUZ.find().lean();
    const pages = await PageUZ.find().lean();
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
