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

  <div class="flex flex-col items-center text-center
              text-sm uppercase tracking-wider
              py-6 space-y-8">

    <a href="#home" class="hover:text-gym-orange transition">Home</a>
    <a href="#about" class="hover:text-gym-orange transition">About</a>
    <a href="#trainers" class="hover:text-gym-orange transition">Trainers</a>
    <a href="#membership" class="hover:text-gym-orange transition">Membership</a>
    <a href="#gallery" class="hover:text-gym-orange transition">Gallery</a>
    <a href="#reviews" class="hover:text-gym-orange transition">Reviews</a>
    <a href="#contact" class="hover:text-gym-orange transition">Contact</a>

    <!-- CTA -->
    <a href="#membership"
       class="mt-4 px-8 py-3 bg-gym-orange text-white
              rounded-full font-semibold">
      Join Now
    </a>

  </div>

</div>

</nav>
`;
}
}


customElements.define('custom-header', CustomHeader);



