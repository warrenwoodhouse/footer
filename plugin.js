<!-- Footer Plugin -->
<!-- Author: Warren Woodhouse (T-Codes) -->
<!-- Documentation & Embed Code: warrenwoodhouse.github.io/footer/embed -->
<script>
        class SiteFooter extends HTMLElement {
            connectedCallback() {
                this.attachShadow({ mode: 'open' });
                this.render();
            }

            render() {
                this.shadowRoot.innerHTML = `
                    <style>
                        @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
                        :host {
                            display: block;
                            background-color: #0b0f19;
                            color: #9ca3af;
                            font-family: 'Inter', sans-serif;
                        }
                        .footer-heading {
                            color: #ffffff;
                            font-size: 0.75rem;
                            font-weight: 700;
                            letter-spacing: 0.1em;
                            text-transform: uppercase;
                            margin-bottom: 1rem;
                        }
                        .footer-link {
                            display: block;
                            color: #9ca3af;
                            font-size: 0.875rem;
                            margin-bottom: 0.75rem;
                            text-decoration: none;
                            transition: color 0.2s ease;
                        }
                        .footer-link:hover {
                            color: #ffffff;
                        }
                    </style>
                    <footer>
                        <div>
                            <!-- Column 1: Explore -->
                            <div>
                                <h3 class="footer-heading">Explore</h3>
                                <ul>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/" class="footer-link">Homepage</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/" class="footer-link">Blog</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/about" class="footer-link">About</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/contact" class="footer-link">Contact</a></li>
                                </ul>
                            </div>
                            
                            <!-- Column 2: Community & Legal -->
                            <div>
                                <h3 class="footer-heading">Community</h3>
                                <ul>
                                    <li><a href="https://reddit.com/r/warrenwoodhouse" class="footer-link">Reddit</a></li>
                                    <li><a href="https://warrenwoodhouse.bsky.social/" class="footer-link">Blue Sky</a></li>
                                </ul>
                                
                                <h3 class="footer-heading">Legal</h3>
                                <ul>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/privacy" class="footer-link">Privacy Policy</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/terms" class="footer-link">Terms & Conditions</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/license" class="footer-link">License Agreement</a></li>
                                </ul>
                            </div>

                            <!-- Column 3 & 4: Brands (2 sub-columns) -->
                            <div>
                                <h3 class="footer-heading">Warren Woodhouse Company</h3>
                                <div>
                                    <div>
                                        <a href="https://warrenwoodhouse.github.io/maps" class="footer-link">Warren Maps</a>
                                        <a href="https://warrenwoodhouse.blogspot.com/woodhouseproductions" class="footer-link">WP Woodhouse Productions</a>
                                        <a href="https://warrenwoodhouse.github.io/games" class="footer-link">GotGames Interactive</a>
                                        <a href="https://warrenwoodhouse.blogspot.com/realfilminglocations" class="footer-link">Real Filming Locations</a>
                                        <a href="https://warrenwoodhouse.github.io/notes" class="footer-link">Warren Notes App</a>
                                        <a href="https://warrenwoodhouse.github.io/feedmaker" class="footer-link">FeedMaker</a>
                                    </div>
                                    <div>
                                        <a href="https://warrenwoodhouse.blogspot.com/mods" class="footer-link">Game Mods</a>
                                        <a href="https://warrenwoodhouse.blogspot.com/guides" class="footer-link">Warren Guides</a>
                                        <a href="https://warrenwoodhouse.blogspot.com/798" class="footer-link">798</a>
                                        <a href="https://warrenwoodhouse.blogspot.com/fonts" class="footer-link">Ænigmate Productions</a>
                                        <a href="https://warrenwoodhouse.blogspot.com/codes" class="footer-link">T-Codes</a>
                                        <a href="https://warrenwoodhouse.blogspot.com/products" class="footer-link">More >>>></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>&copy; ${new Date().getFullYear()} <a href="https://warrenwoodhouse.blogspot.com/">Warren Woodhouse</a>. All Rights Reserved.</p>
                        </div>
                    </footer>
                `;
            }
        }
        if (!customElements.get('site-footer')) {
            customElements.define('site-footer', SiteFooter);
        }
    </script>
