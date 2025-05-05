<template>
    <header>
        <div>
            <section class="brand">
                <NuxtLink to="/">
                    {{ appName }}
                </NuxtLink>
            </section>
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/" class="app-link">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/posts" class="app-link">Posts</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="app-link">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" class="app-link">Contact</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script lang="ts" setup>
    const appName = ref<string>('My App Name');
</script>