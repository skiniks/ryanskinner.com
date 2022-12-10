<template>
	<nav>
		<div class="flex flex-row justify-between items-center w-full">
			<NuxtLink class="flex justify-left pt-8 sm:pt-0" to="/" target="_blank">
				<nuxt-img
					src="/images/logo.svg"
					alt="Ryan Skinner"
					class="logo hover:animate-heartBeat"
					format="webp"
					quality="90"
				/>
			</NuxtLink>
			<div class="flex justify-center pt-4 space-x-4">
				<a href="https://github.com/skiniks" target="_blank">
					<span class="sr-only">GitHub</span>
					<svg
						class="github-icon hover:animate-heartBeat"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						width="42"
						height="42"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 24 24"
					>
						<path
							d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z"
							fill="rgba(255, 255, 255, .87)"
						/>
					</svg>
				</a>
				<a href="https://linkedin.com/in/ryankskinner" target="_blank">
					<span class="sr-only">LinkedIn</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						fill="rgba(255, 255, 255, .87)"
						class="linkedin-icon hover:animate-heartBeat"
						viewBox="0 0 16 16"
					>
						<path
							d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
						/>
					</svg>
				</a>
			</div>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
nav {
	padding-top: 3rem;
	padding-bottom: 8rem;
}
.logo {
	rotate: -4deg;
	height: 86px;
	@media (max-width: 768px) {
		height: 64px;
	}
}
.github-icon {
	@media (max-width: 768px) {
		width: 36px;
		height: 36px;
	}
	&:hover {
		rotate: -12deg;
	}
}
.linkedin-icon {
	@media (max-width: 768px) {
		width: 36px;
		height: 36px;
	}
	&:hover {
		rotate: 12deg;
	}
}
</style>
