const firebaseLogger = {
  log: (message) => {
    console.log("🔥📈 FIREBASE:", message);
  },
  error: (message) => {
    console.error("🔥📈 FIREBASE:", message);
  },
};

module.exports = { firebaseLogger };
