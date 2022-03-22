<template>
  <div class="contact-form">
    <div class="contact-form__header">
      Have a question? Please get in touch!
    </div>
    <form ref="form" @submit.prevent="handleSubmit" class="contact-form__form">
      <input type="hidden" name="enquiry_number" :value="enquiry_number" />
      <div class="contact-form__element">
        <label class="contact-form__label" for="name">Name</label>
        <input
          class="contact-form__input"
          id="name"
          name="from_name"
          placeholder="Enter your name..."
          required
          type="text"
          v-model="name"
        />
      </div>
      <div class="contact-form__element">
        <label class="contact-form__label" for="email">Email</label>
        <input
          class="contact-form__input email"
          id="email"
          name="user_email"
          placeholder="Enter your email..."
          required
          type="email"
          v-model="email.value"
        />
      </div>
      <div class="contact-form__element">
        <label class="contact-form__label" for="phone_number"
          >Phone Number</label
        >
        <input
          class="contact-form__input"
          id="phone_number"
          name="user_phone_number"
          placeholder="Enter contact number..."
          v-model="phone_number"
          required
        />
      </div>
      <div class="contact-form__element">
        <label class="contact-form__label" for="select"
          >What is your query about?</label
        >
        <select class="contact-form__input" name="subject" id="select">
          <option value="" disabled selected>Select your option:</option>
          <option value="Booking the band / Availability"
            >Booking the band / Availability</option
          >
          <option value="Available line-ups">Available line-ups</option>
          <option value="Special song requests">Special song requests</option>
          <option value="Something else">Something else</option>
        </select>
      </div>
      <div class="contact-form__element">
        <textarea
          class="contact-form__input"
          id="textarea"
          :maxlength="message.maxlength"
          name="message"
          placeholder="Your message here..."
          required
          rows="4"
          v-model="message.text"
        />
      </div>
      <div class="contact-form__element">
        <input class="contact-form__submit" type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "ContactForm",
  data: () => {
    return {
      name: "",
      email: {
        value: "",
        valid: false
      },
      phone_number: "",
      message: {
        text: "",
        maxlength: 255
      }
    };
  },
  computed: {
    enquiry_number() {
      return (Math.random() * 100000) | 0;
    },
    isRequiredDataPresent() {
      return this.email.valid;
    }
  },
  methods: {
    isEmailValid: function() {
      const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      this.email.valid = emailRegExp.test(this.email.value);
    },
    sendEmail() {
      emailjs
        .sendForm(
          process.env.VUE_APP_EMAIL_SERVICE,
          process.env.VUE_APP_EMAIL_CONTACT,
          this.$refs.form,
          process.env.VUE_APP_EMAIL_ID
        )
        .then(
          () => {
            this.$emit("openModal", "success");
            // @TODO Add a proper logger here
          },
          error => {
            console.log("FAILED...", error.text);
          }
        );
    },
    handleSubmit() {
      if (!this.email.valid) {
        this.$emit("openModal", "emailInvalid");
      } else {
        this.sendEmail();
      }
    }
  },
  watch: {
    "email.value": function() {
      this.isEmailValid();
    }
  }
};
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: ".contact-form";
#{$c} {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  @include copy;

  // reset default form styling
  input,
  select,
  button,
  textarea {
    font-family: inherit;
    font-size: 100%;
    box-sizing: border-box;
    padding: 1rem;
  }

  &__form {
    width: 100%;
  }

  &__header {
    margin-bottom: 1rem;
  }

  &__element {
    display: flex;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    @media screen and (max-width: $breakpoint-ptab) {
      flex-direction: column;
    }
  }

  &__input {
    flex: 1;
  }

  &__label {
    margin-right: 1rem;
    display: flex;
    align-items: center;
    @media screen and (max-width: $breakpoint-ptab) {
      justify-content: center;
    }
  }

  &__submit {
    @include cta;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
