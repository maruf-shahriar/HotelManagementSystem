const bcrypt = require('bcryptjs');

(async () => {
  const pass = await bcrypt.hash('PASSWORD', 8);
  console.log(pass);
})();
