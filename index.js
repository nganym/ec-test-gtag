const message = document.querySelector(".thank-you-message");

document.querySelector("#unhashed-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;

  //... create your form object with the form inputs
  let formObject = {
    email: form.email.value,
    phone: form.phone.value,
  };

  gtag("event", "conversion", {
    allow_custom_scripts: true,
    send_to: "DC-11107970/conve0/ectes0+standard",
    user_data: {
      email: formObject.email,
      phone_number: formObject.phone,
    },
  });

  // window.dataLayer = window.dataLayer || [];
  // window.dataLayer.push({
  //   event: "annaPurchaseEC",
  //   customerEmail: formObject.email,
  //   customerPhone: formObject.phone,
  // });

  console.log("Unhashed Customer Email Sent", formObject.email);
  console.log("Unhashed Customer Phone Sent", formObject.phone);

  message.innerText = "Successfully submit unhashed form";
});

document
  .querySelector("#hashed-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;

    //... create your form object with the form inputs
    let formObject = {
      email: await hash(form.email.value),
      phone: await hash(form.phone.value),
    };

      gtag("event", "conversion", {
    allow_custom_scripts: true,
    send_to: "DC-11107970/conve0/ectes0+standard",
    user_data: {
      sha256_email_address: formObject.email,
      sha256_phone_number: formObject.phone,
    },
  });

    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: "annaPurchaseEC",
    //   customerEmail: formObject.email,
    //   customerPhone: formObject.phone,
    // });

    console.log("Hashed Customer Email Sent", formObject.email);
    console.log("Hashed Customer Phone Sent", formObject.phone);

    message.innerText = "Successfully submit hashed form";
  });

document.querySelector("#undefined-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;




  gtag("event", "conversion", {
    allow_custom_scripts: true,
    send_to: "DC-11107970/conve0/ectes0+standard",
    user_data: {
      email: undefined,
      phone_number: undefined,
    },
  });

  // window.dataLayer = window.dataLayer || [];
  // window.dataLayer.push({
  //   event: "annaPurchaseEC",
  //   customerEmail: formObject.email,
  //   customerPhone: formObject.phone,
  // });

  console.log("Unhashed Customer Email Sent", formObject.email);
  console.log("Unhashed Customer Phone Sent", formObject.phone);

  message.innerText = "Successfully submit undefined form";
});

async function hash(string) {
  const utf8 = new TextEncoder().encode(string);
  const hashBuffer = await crypto.subtle.digest("SHA-256", utf8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((bytes) => bytes.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}
