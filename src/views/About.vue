<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="bg-gray-200">
    <div class="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl leading-9 font-extrabold text-gray-900">Item Tracker Features and Links</h2>
        <p class="mt-4 text-lg leading-7 text-gray-500">A quick summary of this body of work</p>
      </div>
      <dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:col-gap-6 sm:row-gap-12 lg:grid-cols-4 lg:col-gap-8">
        <div class="flex space-x-3">
          <!-- Heroicon name: check -->
          <svg class="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <div class="space-y-2">
            <dt class="text-lg leading-6 font-medium text-gray-900">Vue.Js</dt>
            <dd class="flex space-x-3 lg:py-0 lg:pb-4">
              <span class="text-base leading-6 text-gray-500">I use Angular from day to day. However, I wanted to show that I could pick this up quickly and perform at a high level</span>
            </dd>
          </div>
        </div>
        <div class="flex space-x-3">
          <!-- Heroicon name: check -->
          <svg class="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <div class="space-y-2">
            <dt class="text-lg leading-6 font-medium text-gray-900">User Experience</dt>
            <dd class="flex space-x-3">
              <span class="text-base leading-6 text-gray-500">While I do have experience and skill developing UI. This UI is built using Tailwindcss and TailwindUI. So, much of it is pre-rolled.</span>
            </dd>
          </div>
        </div>
        <div class="flex space-x-3">
          <!-- Heroicon name: check -->
          <svg class="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <div class="space-y-2">
            <dt class="text-lg leading-6 font-medium text-gray-900">API</dt>
            <dd class="flex space-x-3">
              <span class="text-base leading-6 text-gray-500">
                <a class="text-blue-400" href="https://mat-pricing.azurewebsites.net/swagger/index.html" target="_blank">You can view the swagger UI here</a>. The API is hosted in an Azure App service. It is being built through azure dev ops. <a class="text-blue-400" href="https://dev.azure.com/erick0270/erick/_build" target="_blank" >You can see the pipeline here.</a></span>
            </dd>
          </div>
        </div>
        <div class="flex space-x-3">
          <!-- Heroicon name: check -->
          <svg class="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <div class="space-y-2">
            <dt class="text-lg leading-6 font-medium text-gray-900">APP</dt>
            <dd class="flex space-x-3">
              <span class="text-base leading-6 text-gray-500">I used Azure Static Pages Service with a github action pipeline for the UI.
                <a class="text-blue-400" href="https://github.com/elrDevelopment/material-pricing-app/tree/main/.github/workflows" target="_blank">You can view the action in the github.</a></span>
            </dd>
          </div>
        </div>
        <div class="flex space-x-3">
          <!-- Heroicon name: check -->
          <svg class="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <div class="space-y-2">
            <dt class="text-lg leading-6 font-medium text-gray-900">Github link</dt>
            <dd class="flex space-x-3">
              <span class="text-base leading-6 text-gray-500"><a class="text-blue-400" href="https://github.com/elrDevelopment/material-pricing-app" target="_blank">Code Repository</a></span>
            </dd>
          </div>
        </div>
      </dl>
    </div>
  </div>

</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>

</style>
