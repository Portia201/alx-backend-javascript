/**
 * Contains the miscellaneous route handlers.
 * @author Portia Aphane <https://github.com/Portia201>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
