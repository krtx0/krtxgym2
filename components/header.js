class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<nav id="navbar"
  class="fixed top-0 w-full z-40 transition-all duration-300
         backdrop-blur-xl bg-black/40 border-b border-white/10">

  <div class="max-w-7xl mx-auto px-6">

    <div class="flex items-center justify-between h-16">

      <!-- LEFT: Logo -->
      <a href="#home"
        class="text-lg md:text-xl font-semibold tracking-wide
               text-white hover:text-gym-orange transition-colors">
        UNIVERSAL FITNESS HUB
      </a>

      <!-- CENTER: Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8
                  text-sm uppercase tracking-wider
                  text-white/80">

        <a href="#home" class="hover:text-white transition">Home</a>
        <a href="#about" class="hover:text-white transition">About</a>
        <a href="#trainers" class="hover:text-white transition">Trainers</a>
        <a href="#membership" class="hover:text-white transition">Membership</a>
        <a href="#gallery" class="hover:text-white transition">Gallery</a>
        <a href="#reviews" class="hover:text-white transition">Reviews</a>
        <a href="#contact" class="hover:text-white transition">Contact</a>

      </div>

      <!-- RIGHT: CTA + Mobile -->
      <div class="flex items-center gap-4">

        <a href="#membership"
          class="hidden md:inline-flex items-center
                 px-5 py-2 text-sm font-semibold
                 bg-gym-orange rounded-full
                 text-white hover:scale-105
                 transition-all duration-300">
          Join Now
        </a>

        <button id="mobile-menu-btn"
          class="md:hidden w-10 h-10 flex items-center justify-center
                 rounded-lg bg-white/5 border border-white/10">
          <i data-lucide="menu" class="w-6 h-6"></i>
        </button>

      </div>

    </div>

  </div>

  <!-- Mobile Menu -->
  <div id="mobile-menu"
  class="hidden md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">

  <div class="flex flex-col divide-y divide-white/10 text-sm uppercase tracking-wider">

    <a href="#home" class="px-6 py-4 hover:bg-white/5 transition">Home</a>
    <a href="#about" class="px-6 py-4 hover:bg-white/5 transition">About</a>
    <a href="#trainers" class="px-6 py-4 hover:bg-white/5 transition">Trainers</a>
    <a href="#membership" class="px-6 py-4 hover:bg-white/5 transition">Membership</a>
    <a href="#gallery" class="px-6 py-4 hover:bg-white/5 transition">Gallery</a>
    <a href="#reviews" class="px-6 py-4 hover:bg-white/5 transition">Reviews</a>
    <a href="#contact" class="px-6 py-4 hover:bg-white/5 transition">Contact</a>

    <div class="px-6 py-5">
      <a href="#membership"
         class="block text-center bg-gym-orange text-white py-3 rounded-full font-semibold">
        Join Now
      </a>
    </div>

  </div>

</div>

</nav>
`;
}
}


customElements.define('custom-header', CustomHeader);

