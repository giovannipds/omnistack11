const id = crypto.randomBytes(4).toString('HEX');

const id = crypto.randomBytes(4).toString('HEX');

const crypto = require('crypto');

export default function generateUniqueId() {
  return crypto.randomBytes(4).toString('HEX');
}
