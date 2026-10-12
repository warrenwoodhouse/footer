/**
 * Site Footer Plugin
 * Author: Warren Woodhouse (T-Codes)
 * Documentation & Embed Code: warrenwoodhouse.github.io/footer/embed
 */
class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            
            

                

                        
<a href="../explore">EXPLORE</a>


                        

                            
<a href="/">Homepage</a>

                            
<a href="../contact">Contact Us</a>

                            
<a href="../about">About Us</a>

                            
Ask Anything

                        

                    

                        
COMMUNITY


                        

                            
Reddit

                            
Twitter / X

                        

                        
                        
LEGAL


                        

                            
Privacy Policy

                            
Terms of Use

                            
Accessibility

                            
Do Not Sell My Info

                            
AdChoices

                        

                    

                        
COMPANY NAME


                        

                                
Product 1

                                
Product 2

                                
Product 3

                                
Product 4

                            

                    

                
© ${new Date().getFullYear()} YOUR SITE NAME/COMPANY NAME GOES HERE. All rights reserved.

            

        `;
    }
}
customElements.define('site-footer', SiteFooter);
