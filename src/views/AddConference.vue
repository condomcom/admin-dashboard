<template>
  <a-form
      id="components-form-demo-normal-conference"
      :form="form"
      @submit="handleConferenceSubmit"
      :hideRequiredMark="true">

    <a-form-item class="mb-10" label="Название" :colon="false">
      <a-input
          v-decorator="[
                'title',
                {
                  rules: [
                    { required: true, message: 'Введите название конференции' },
                  ],
                },
              ]"
          placeholder="Введите название..."
      />
    </a-form-item>

    <a-form-item class="mb-10" label="Колличество мест" :colon="false">
      <a-input
          v-decorator="[
                'title',
                {
                  rules: [
                    { required: true, message: 'Введите колличество мест' },
                  ],
                },
              ]"
          placeholder="Введите колличество мест..."
      />
    </a-form-item>

<!--    <a-form-item class="mb-10" label="Email" :colon="false">-->
<!--      <a-input-->
<!--          v-decorator="[-->
<!--                'email',-->
<!--                {-->
<!--                  rules: [-->
<!--                    { required: true, message: 'Введите свой email' },-->
<!--                  ],-->
<!--                },-->
<!--              ]"-->
<!--          placeholder="Email"-->
<!--      />-->
<!--    </a-form-item>-->
    <a-row :gutter="24" type="flex" align="stretch">
      <a-col :span="24" :lg="4" class="mb-24">
        <a-form-item class="mb-10">
          <a-switch v-model="online"/> Online
        </a-form-item>
      </a-col>
      <a-col :span="24" :lg="4" class="mb-24">
        <a-form-item class="mb-10">
          <a-switch v-model="offline"/> Offline
        </a-form-item>
      </a-col>
    </a-row>

    <a-form-item>
      <a-button
          type="primary"
          block
          html-type="submit"
      >
        Создать
      </a-button>
    </a-form-item>

  </a-form>
</template>

<script>
export default {
  name: "AddConference",
  data() {
    return {
      // Binded model property for "Sign In Form" switch button for "Remember Me" .
      online: true,
      offline: true,
    };
  },
  methods: {
    // Handles input validation after submission.
    handleConferenceSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
  },
  beforeCreate() {
    // Creates the form and adds to it component's "form" property.
    this.form = this.$form.createForm(this, { name: "normal-conference" });
  },
}
</script>

<style scoped>

</style>