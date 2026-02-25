class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-gym-black border-t border-gym-gray py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div class="font-display text-2xl tracking-wider text-white">
              Kevin's Fitness Hub
            </div>
            
            <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#home" class="hover:text-gym-orange transition-colors">Home</a>
              <a href="#about" class="hover:text-gym-orange transition-colors">About</a>
              <a href="#trainers" class="hover:text-gym-orange transition-colors">Trainers</a>
              <a href="#membership" class="hover:text-gym-orange transition-colors">Membership</a>
              <a href="#contact" class="hover:text-gym-orange transition-colors">Contact</a>
            </div>

            <div class="text-gray-500 text-sm text-center md:text-right">
              <p>© 2025 Kevin's Fitness Hub. All rights reserved.</p>
              <p>Location, Mumbai West, Maharashtra</p>
            </div>

          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);