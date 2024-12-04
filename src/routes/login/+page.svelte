<script lang="ts">
  import { enhance } from '$app/forms';
  
  let loading = false;
  let email = '';
  let password = '';
  
  const handleSubmit = async () => {
    loading = true;
    // Add your API call here
    loading = false;
  };
</script>

<div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">
  <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
    <div>
      <h2 class="text-center text-3xl font-bold text-[#9f1c37]">Sign in</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or <a href="/register" class="font-medium text-[#9f1c37] hover:text-[#801529]">create a new account</a>
      </p>
    </div>
    
    <form class="mt-8 space-y-6" use:enhance on:submit|preventDefault={handleSubmit}>
      <div class="space-y-4">
        <div>
          <label for="email" class="sr-only">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            bind:value={email}
            required
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#9f1c37] focus:border-[#9f1c37]"
            placeholder="Email address"
          />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            bind:value={password}
            required
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#9f1c37] focus:border-[#9f1c37]"
            placeholder="Password"
          />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            class="h-4 w-4 text-[#9f1c37] focus:ring-[#9f1c37] border-gray-300 rounded"
          />
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <a href="/forgot-password" class="text-sm font-medium text-[#9f1c37] hover:text-[#801529]">
          Forgot your password?
        </a>
      </div>

      <button
        type="submit"
        disabled={loading}
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#9f1c37] hover:bg-[#801529] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9f1c37] disabled:opacity-50"
      >
        {loading ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  </div>
</div>