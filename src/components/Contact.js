import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [title, setTitle] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const form = useRef();

  const handleMailButton = (e) => {
    e.preventDefault();
    const obj = {
      email,
      title,
      message,
    };

    if (email === "" && title === "" && message === "") {
      setEmail(true);
      setMessage(true);
      setTitle(true);
    }

    localStorage.setItem("user", JSON.stringify(obj));
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    emailjs
      .sendForm(
        "service_3lg91qi",
        "template_o5r2606",
        form.current,
        "w7J_VYxupwF1nmLrS"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          console.log("message not sent");
        }
      );
    alert("Message set, thanks!!");
    setMessage("");
    setEmail("");
    setTitle("");
  };

  return (
    <section class="bg-center bg-no-repeat bg-[url('/src/pictures/endless-constellation.png')] bg-blend-multiply p-4 text-white font-RalewayExtraLight">
      <div class="md:mx-44 mx-4 flex flex-col mt-4 mb-10 md:mb-32">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h4
            id="contact"
            class="mt-2 text-2xl md:mt-11 font-medium leading-7 text-center md:text-center md:mb-4"
          >
            Contact
          </h4>
          <p class="mb-8 font-RalewayRegular  lg:mb-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">
            Please fill in the form, and I’ll get back to you as soon as
            possible....thank you
          </p>
          <form
            class="space-y-8 font-RalewayMedium"
            onSubmit={handleMailButton}
            ref={form}
          >
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-white dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="test@test.com"
                required
                name="from_name"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-white dark:text-gray-300"
              >
                Title
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Write title..."
                required
                name="to_title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-white dark:text-gray-400"
              >
                Message
              </label>
              <textarea
                required
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write message..."
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm bg-emerald-500 font-medium text-center text-white rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
