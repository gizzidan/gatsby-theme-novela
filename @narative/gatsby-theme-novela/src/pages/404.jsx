import React from "react";
import Section from "@components/Section";
import SEO from "@components/SEO";
import LandingSub from "@components/LandingSub";
import { Global } from '@emotion/core';
import { globalStyles } from '@styles';

function NotFound() {
    return (
        <div>
             <SEO title="404 Not Found" />
             <Global styles={globalStyles} />
            <Section>
                <div style={{paddingTop: '100px', textAlign: 'center'}}>
                <h1>Coming Soon!</h1>
                <LandingSub />
                </div>
            </Section>
        </div>    
    )
}
export default NotFound;