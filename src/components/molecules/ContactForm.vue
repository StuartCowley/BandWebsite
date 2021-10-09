<template>
	<div class="contact-form">
		<div class="contact-form__header">
			Have a question? Please get in touch!
		</div>
		<form class="contact-form__form">
			<div class="contact-form__element">
				<label class="contact-form__label" for="name">Name</label>
				<input
					id="name"
					name="name"
					placeholder="Enter your name..."
					required=""
					type="text"
					v-model="name"
				/>
			</div>
      <div class="contact-form__element">
        <label class="contact-form__label" for="email">Email</label>
        <input
          :class="{ email , error: !email.valid }"
					id="email"
					name="email"
					placeholder="Enter your email..."
					required=""
					type="email"
          v-model="email.value"
				/>
      </div>
			<div class="contact-form__element">
        <div>What would you like to ask about?</div>
        <p class="select">
          <select>
						<option value="" disabled selected>Select your option:</option>
						<option value="1">Booking the band / Availability</option>
						<option value="2">Available line-ups</option>
						<option value="3">Special song requests</option>
						<option value="4">Something else</option>
					</select>
        </p>
      </div>
			<div class="contact-form__element">
        <label class="contact-form__label" for="textarea">Your message:</label>
        <textarea
					class="contact-form__message"
					id="textarea"
					:maxlength="message.maxlength"
					name="textarea"
					placeholder="Your message here..."
					required=""
          v-model="message.text"
				/>
      </div>
      <div class="contact-form__element">
        <input type="submit" value="Submit message">
      </div>
		</form>
	</div>
</template>

<script>

export default {
	// todo finish this, similar example here https://codepen.io/netzzwerg/pen/VQKBPQ
	name: 'ContactForm',
	data: () => {
		return {
      name: "",
      email: {
        value: "",
        valid: false
      },
      message: {
        text: "",
        maxlength: 255
      },
      submitted: false,
    };
	},
	methods: {
		isEmailValid: function() {
			const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
			if (emailRegExp.test(this.email.value)) {
				this.email.valid = true;
			} else {
				this.email.valid = false;
			}
		}
	},
	watch: {
		"email.value": function() {
			this.isEmailValid()
		}
	}
}
</script>

<style lang="scss">
@import "src/scss/toolkit";

$c: ".contact-form";
#{$c}
{
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 2rem;
	padding-bottom: 2rem;
	@include copy;
	&__form {
		width: 100%;
	}
	&__header {
		margin-bottom: 1rem;
	}
	&__element {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
		text-align: center;
	}
}
</style>
