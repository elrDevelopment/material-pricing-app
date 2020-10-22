<template>
  <!--
    Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
    Read the documentation to get started: https://tailwindui.com/documentation
  -->

    <div class="max-w-7xl bg-gray-200 mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div class="grid grid-cols-1 gap-16">
        <div class="lg:grid lg:grid-cols-4 lg:gap-8r">
          <h2 class="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
            Get in touch
          </h2>
          <div class="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:col-start-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">

            <div>
              <h4 class="text-lg leading-6 font-medium text-gray-900">
                Say hello
              </h4>
              <dl class="mt-2 text-base leading-6 text-gray-500">
                <div>
                  <dt class="sr-only">
                    Email
                  </dt>
                  <dd>
                    erick@erickroberts.com
                  </dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">
                    Phone number
                  </dt>
                  <dd>
                    +1 (479) 310-5845
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div class="border-t-2 border-gray-100"></div>

      </div>
    </div>

</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>

</style>
