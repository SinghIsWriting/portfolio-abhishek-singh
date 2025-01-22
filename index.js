// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Active navigation link highlighting
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  });

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      navbar.style.transform = "translateY(0)";
      return;
    }

    if (currentScroll > lastScroll) {
      // Scrolling down
      navbar.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      navbar.style.transform = "translateY(0)";
    }
    lastScroll = currentScroll;
  });

  //contact section
  const form = document.querySelector("form");

  (function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "8CptoMN61Q6GKtlqC",
    });
  })();

  window.onload = function () {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm("service_r4t9m6c", "template_0jswlwb", this).then(
          () => {
            form.reset();
            console.log("SUCCESS!");
            alert("Your message successfully send!");
          },
          (error) => {
            console.log("FAILED...", error);
            alert("Something went wrong!");
          }
        );
      });
  };

  // function sent() {
  //   // e.preventDefault();

  //   var name = document.getElementById("name").value;
  //   var email = document.getElementById("email").value;
  //   var subject = document.getElementById("email-subject").value;
  //   var msg = document.getElementById("message").value;

  //   console.log('Name:', name);
  //   console.log('Email:', email);
  //   console.log('Subject:', subject);
  //   console.log('Message:', msg);

  //   var body =
  //     "Name: " +
  //     name +
  //     "<br/> Email:" +
  //     email +
  //     "<br/> Message:" +
  //     msg;
  //   console.log(body);



  //   Email.send({
  //     Host: "smtp.gmail.com",
  //     Username: "favorite247place@gmail.com",
  //     Password: "ajzowaekzebmtzjw",
  //     To: email,
  //     From: "favorite247place@gmail.com",
  //     Subject: subject,
  //     Body: body,
  //   }).then((message) => {
  //     alert("Your message successfully send!");
  //     console.log(message);
  //     // if (message == "OK") {
  //     //   console.log("Message sent successfully", message);
  //     //   alert("Your message successfully send!", message);
  //     //   // swal("Successful!", "Your message successfully send!", "success");
  //     //   // name.value="";
  //     // } else {
  //     //   console.log("Message not sent", message);
  //     //   alert("Something went wrong!", message);
  //     //   // swal("Something Wrong!", "Something went wrong!", "error");
  //     // }
  //   });
  // }

  // function checkEmail() {
  //   const email = document.getElementById("email");
  //   const emailReg = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  //   if (!email.value.match(emailReg)) {
  //     if (email.value.trim() !== "") {
  //       console.log("Email is invalid");
  //     } else {
  //       console.log("Email is blank");
  //     }
  //   }
  // }

  //reset from

  // function resetForm() {
  //   const items = document.querySelectorAll(".item");

  //   // Reset input values and remove error classes
  //   items.forEach((item) => {
  //     item.value = "";
  //   });
  // }

  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   // checkEmail();
  //   sent();
  //   // resetForm();
  //   form.reset();
  // });

});
