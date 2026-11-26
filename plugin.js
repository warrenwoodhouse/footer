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
                            background-color: transparent;
                            color: #000000;
                            font-family: 'Arial Black', sans-serif;
                        }
                        .footer-heading {
                            color: #000000;
                            font-size: 0.75rem;
                            font-weight: 700;
                            letter-spacing: 0.1em;
                            text-transform: uppercase;
                            margin-bottom: 1rem;
                            font-family: 'Arial Black', sans-serif;
                        }
                        .footer-link {
                            display: block;
                            color: #ff0000;
                            font-size: 0.875rem;
                            margin-bottom: 0.75rem;
                            text-decoration: none;
                            transition: color 0.2s ease;
                            font-family: 'Arial Black', sans-serif;
                        }
                        .footer-link:hover {
                            color: #cd0000;
                        }
                    </style>
                    <footer>
                        <div>
                            <!-- Column 1: Explore -->
                            <div>
                                <h3 class="footer-heading">Explore</h3>
                                <ul>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/" class="footer-link">Homepage</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/blog" class="footer-link">Blog</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/about" class="footer-link">About</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/contact" class="footer-link">Contact</a></li>
                                    <li><a href="https://warrenwoodhouse.bsky.social/" class="footer-link">Ask Me Anything</a></li>
                                    <li><a href="https://warrenwoodhouse.bsky.social/" class="footer-link">Submit</a></li>
                                    <li><a href="https://warrenwoodhouse.bsky.social/" class="footer-link">Links & Bookmarks</a></li>
                                    <li><a href="https://warrenwoodhouse.bsky.social/" class="footer-link">Likes</a></li>
                                    <li><a href="https://warrenwoodhouse.github.io/" class="footer-link">Profile Page</a></li>
                                </ul>
                            </div>
                            
                            <!-- Column 2: Community & Legal -->
                            <div>
                                <h3 class="footer-heading">Community</h3>
                                <ul>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/community" class="footer-link">Community</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/forums" class="footer-link">Forums</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/guestbook" class="footer-link">Guestbook</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/feedback" class="footer-link">Feedback</a></li>
                                </ul>
                                
                                <h3 class="footer-heading">Socials</h3>
                                <ul>
                                    <li><a href="https://warrenwoodhouse.bsky.social/" class="footer-link">YouTube</a></li>
                                    <li><a href="https://warrenwoodhouse.bsky.social/" class="footer-link">YouTube Gaming</a></li>
                                    <li><a href="https://warrenwoodhouse.bsky.social/" class="footer-link">YouTube Shorts</a></li>
                                    <li><a href="https://warrenwoodhouse.bsky.social/" class="footer-link">YouTube Music</a></li>
                                    <li><a href="https://github.com/warrenwoodhouse" class="footer-link">GitHub</a></li>
                                    <li><a href="https://giphy.com/warrenwoodhouse" class="footer-link">GIPHY</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/search/label/follow%20gaming" class="footer-link">Gaming Profiles</a></li>
                                    <li><a href="https://reddit.com/r/warrenwoodhouse" class="footer-link">Reddit</a></li>
                                    <li><a href="https://warrenwoodhouse.bsky.social/" class="footer-link">Blue Sky</a></li>
                                    <li><a href="https://fb.gg/warrenwoodhousevideos" class="footer-link">Facebook Gaming</a></li>
                                    <li><a href="https://mixer.com/warrenwoodhousevideos" class="footer-link">Mixer</a></li>
                                    <li><a href="https://discord.com/users/warrenwoodhouse" class="footer-link">Discord</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/photos" class="footer-link">Google Photos</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/photos" class="footer-link">Google Picasa Web Albums</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/panoramas" class="footer-link">Google Panorama</a></li>
                                    <li><a href="https://snapchat.com/add/warrenwoodhouse" class="footer-link">Snapchat</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/follow" class="footer-link">More >>>></a></li>
                                </ul>

                                <h3 class="footer-heading">Products, Apps, Brands & Services</h3>
                                <ul>
                                    <li><a href="https://warrenwoodhouse.github.io/notes" class="footer-link">Warren Notes</a> <small>(app)</small></li>
                                    <li><a href="https://warrenwoodhouse.github.io/feedmaker" class="footer-link">FeedMaker</a> <small>(app)</small></li>
                                    <li><a href="https://warrenwoodhouse.github.io/maps" class="footer-link">Warren Maps</a> <small>(service)</small></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/fonts" class="footer-link">Fonts</a> <small>(service)</small></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/guides" class="footer-link">Warren Guides</a> <small>(service)</small></li>
                                    <li><a href="https://warrenwoodhouse.github.io/games" class="footer-link">GotGames Interactive</a> <small>(software developer)</small></li>
                                </ul>
                                
                                <h3 class="footer-heading">Legal</h3>
                                <ul>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/privacy" class="footer-link">Privacy Policy</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/terms" class="footer-link">Terms & Conditions</a></li>
                                    <li><a href="https://warrenwoodhouse.blogspot.com/license" class="footer-link">License Agreement</a></li>
                                </ul>
                            </div>

                            <!-- Column 3 & 4: Company & Popular Brands -->
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
