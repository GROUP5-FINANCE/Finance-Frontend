<template>
  <pv-toolbar>
    <template #start>
      <div style="margin-inline: 1rem" class="logo flex align-items-center">
        <router-link to="/">
          <img src="" alt="logoFinance" style="height: 50px" />
        </router-link>
      </div>
    </template>
    <template #end>
      <div class="card">
        <div class="flex flex-row card-container">
          <div class="flex align-items-center justify-content-center">
            <router-link
              v-for="item in items"
              :to="item.to"
              custom
              v-slot="{ navigate, href }"
              :key="item.label"
            >
              <pv-button
                class="p-button-text button-text-white mx-3"
                :href="href"
                @click="navigate"
              >
                {{ item.label }}
              </pv-button>
            </router-link>
          </div>
        </div>
      </div>
    </template>
  </pv-toolbar>
</template>

<script>
export default {
  name: "tool-bar",
  data() {
    return {
      items: [
        { label: "Home", to: "/" },
        { label: "Sign In", to: "/sign-in" },
        { label: "Sign Up", to: "/sign-up" },
        { label: "User", to: "/user-profile" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap");
.p-toolbar {
  background: #2196f3;
  display: flex;
  justify-content: space-between;
  border-radius: 0;
}

.logo img {
  padding-right: 1vmax;
}
.card {
  margin-left: 1rem;
  min-width: 450px;
}
.p-button.p-button-text {
  color: #ffffff;
}
</style>
