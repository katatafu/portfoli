import React from 'react';
import Skills from "../skills/index";
import Carousel from "../carousel/carousel";
import Buttons from "../buttons/button";
import NavigationMenu from "../Navigaton_Menu/Navigation Menu";
function Homepage() {
    return (
        <div>
            <Buttons/>
            <section id="section1">
                <h2>Dosažené Dovednosti</h2>
                {<Skills/>}
            </section>
            <section id="section2">
                <h2>feawa</h2>
                {/* Obsah sekce 3 */}
            </section>
            <section id="section3">
                <h2>Sekce 3</h2>
                {/* Obsah sekce 3 */}
            </section>
            <NavigationMenu/>
            {<Carousel/>}
        </div>
    );
}
export default Homepage;
