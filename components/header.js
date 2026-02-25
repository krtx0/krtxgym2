class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav id="navbar" class="fixed w-full z-40 transition-all duration-300 top-0 bg-transparent">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">

            <!-- Logo -->
            <div class="flex-shrink-0">
              <a href="#" class="font-display text-3xl tracking-wider text-white hover:text-gym-orange transition-colors">
                Kevin's Fitness Hub
              </a>
            </div>

            <!-- Desktop Menu -->
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-8">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#trainers">Trainers</a>
                <a href="#membership">Membership</a>
                <a href="#gallery">Gallery</a>
                <a href="#reviews">Reviews</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            <div class="hidden md:block">
              <a href="#membership"
                class="bg-gym-orange text-white px-6 py-2 font-bold uppercase border-2 border-gym-orange">
                Join Now
              </a>
            </div>

            <button id="mobile-menu-btn" class="md:hidden">
              <i data-lucide="menu" class="w-8 h-8"></i>
            </button>

          </div>
        </div>

        <div id="mobile-menu" class="hidden md:hidden bg-gym-dark absolute w-full border-t border-gym-gray">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#trainers">Trainers</a>
            <a href="#membership">Membership</a>
            <a href="#gallery">Gallery</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('custom-header', CustomHeader);