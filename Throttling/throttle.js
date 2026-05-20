// Cancel every request for a particular period of time.

function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

function sendChatMessage(message) {
  console.log(`Sending Message`, message);
}

const sendChatMesssageWithSlowMode = throttle(sendChatMessage, 2 * 1000);

sendChatMesssageWithSlowMode("Hi");
sendChatMesssageWithSlowMode("Hello");
sendChatMesssageWithSlowMode("Hello Ji");
sendChatMesssageWithSlowMode("Ye throttle kya hota hai");
sendChatMesssageWithSlowMode("Ye Js kaha se padhe");
